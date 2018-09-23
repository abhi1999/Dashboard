import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Card, CardTitle, CardHeader, CardBody, Col as ColRS, Row } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt, FaPlusCircle, FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown, FaTable, FaList } from 'react-icons/fa';
import { documentGetAll, documentDelete } from '../../actions/DocumentAction';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import DocumentView from './DocumentView';
import JsonEditTree from './JsonEditTree';
import { Pagination } from 'antd';
import { Form, Input, Select, Button, Icon } from 'antd';
import { ICON_SIZE, ICON_SMALL, ICON_COLOR } from '../../constants/Attributes';
import uuid from 'uuid-v4';
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import { IXMLDoc } from '../../constants/edidb'
import * as XXMLDoc from "../../constants/edidb/CXMLDoc";
import Media from "react-media";
import { formatDate } from '../../utils/Conversion';
import { filterAdd, filterIncludes, filterGetValue, selectGetValue } from '../../utils/Comparison';
import XmlEditForm from './XmlEditForm';
import {cloneDeep, remove, orderBy, includes } from "lodash";
import PaginationControl from './../../components/widgets/PaginationControl';
import GridActionMenu from './../../components/widgets/GridActionMenu';
import GridFilter from './../../components/widgets/GridFilter';
import GridFilterPills from './../../components/widgets/GridFilterPills';
import IconButton from "./../../components/widgets/IconButton";
const InputGroup = Input.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 18 },
    wrapperCol: { span: 20 },
};
const selectStatus: KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "N", value: "N", label: "Ready" }),
    new KeyValueLabel({ key: "H", value: "H", label: "Hold" }),
    new KeyValueLabel({ key: "Y", value: "Y", label: "Complete" }),
    new KeyValueLabel({ key: "C", value: "C", label: "Carbon Copied" }),
];
const selectDirection: KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "I", value: "I", label: "Inbound" }),
    new KeyValueLabel({ key: "O", value: "O", label: "Outbound" }),
];

const ViewReplacement = ["summary","detail","editXml"];

const Display = {
    Summary: {}, 
    Detail: {}, 
    EditXml : {}
  };

export interface IDocumentListViewProps {
    // redux
    document: any,
    documentGetAll: any,
    documentDelete: any,
    toastError: any,
}

export interface IDocumentListViewState {
    pageSize: number,
    page: number,
    display: object,
    documentEdit: IXMLDoc,
    isNew: boolean,
    collapseAddNew: boolean,
    documentList: IXMLDoc[],
    documentListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
}

class DocumentListView extends React.Component<IDocumentListViewProps, IDocumentListViewState> {

    constructor(props: IDocumentListViewProps) {
        super(props);
        this.state = {
            pageSize: 10,
            page: 1,
            display: Display.Summary,
            documentEdit: new XXMLDoc.CXMLDoc(),
            isNew: false,
            collapseAddNew: false,
            documentList: [],
            documentListCount: 0,
            loading: true,
            sorted: [new SortDescriptor({ desc: false, id: "Direction" })],
            filtered: [new FilterDescriptor({ displayValue:'Ready', value: 'N', id: "Exp_Flag" })],
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.documentAdd = this.documentAdd.bind(this);
        this.documentEdit = this.documentEdit.bind(this);
        this.documentDelete = this.documentDelete.bind(this);
        this.documentClone = this.documentClone.bind(this);
        this.revertDisplay = this.revertDisplay.bind(this);
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.getSortButton = this.getSortButton.bind(this);
        this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
        this.handleDirectionFilterChange = this.handleDirectionFilterChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.documentEditXML = this.documentEditXML.bind(this);
        this.handleFilterApply = this.handleFilterApply.bind(this);
    }

    public componentWillMount() {
        this.query(1, 10);
    }

    public componentWillReceiveProps(newProps) {
        this.setState({
            loading: false,
            documentList: newProps.document.documentList,
            documentListCount: newProps.document.documentListCount
        });
    }

    public render() {
        const { loading, page, pageSize, sorted, filtered, display } = this.state;
        let { documentList } = this.state;

        switch (display) {
            case Display.Detail:
                return (
                    <DocumentView itemId={this.state.documentEdit.VPID} item={this.state.documentEdit} isNew={this.state.isNew} revertDisplay={this.revertDisplay} />
                );
                break;
            case Display.EditXml:
                return (
                    // <XmlEditForm itemId={this.state.documentEdit.VPID} item={this.state.documentEdit} isNew={this.state.isNew} revertDisplay={this.revertDisplay} />
                    <JsonEditTree itemId={this.state.documentEdit.VPID} item={this.state.documentEdit} isNew={this.state.isNew} revertDisplay={this.revertDisplay} />
                );
                break;
            default:
                break;
        }

        // Filter and sort client-side
        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                documentList = documentList.filter(item => _.includes(String(item[column.id]).toLowerCase(), String(column.value).toLowerCase()));
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            documentList = _.orderBy(documentList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        const tablePageSize = Math.min(documentList.length, pageSize); // Only show rows with data in the table

        return (
            <div>
                <div className="header-icons">
                    <GridFilterPills filters={this.state.filtered} onFilterClear={this.handleFilterApply}/>
                    <div className="header-btn">
                    <IconButton className="fa fa-plus" onClick={() => this.documentAdd()} iconText="Add"/>
                    <GridFilter filters={this.state.filtered} filterItems={[
                            {type:'select', label:'Status', name:XXMLDoc.kXMLDoc_Exp_Flag, placeholder:'',
                                options: selectStatus.map((option)=><option key={option.key} value={option.value}>{option.label}</option>)
                            },
                            {type:'text', label:'ID', name:XXMLDoc.kXMLDoc_VPID, placeholder:''},
                            {type:'text', label:'Trading Partner', name:XXMLDoc.kXMLDoc_TP_PartID, placeholder:''},
                            {type:'text', label:'Doc Group', name:XXMLDoc.kXMLDoc_DGID, placeholder:''},
                            {type:'select', label:'Direction', name:XXMLDoc.kXMLDoc_Direction, placeholder:'',
                                options: selectDirection.map((option)=><option key={option.key} value={option.value}>{option.label}</option>)
                            }]} 
                        onApply={this.handleFilterApply} 
                    />
                    </div>
                </div>
                
                <Media query={{ maxWidth: 768 }}>
                    {matches => // Mobile version first
                        matches ? (
                            <div>
                                <Row>
                                {documentList.map((item) =>
                                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.VPID}>
                                        <Card outline={false}>
                                            <CardHeader>
                                                {item.Exp_Flag}
                                                <div className="card-header-actions">
                                                    <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="edit" onClick={() => this.documentEdit(item)} />
                                                    <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="edit" onClick={() => this.documentEditXML(item)} />
                                                    {/*
                                                    <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="form" onClick={() => this.documentEdit(item)} />
                                                    <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="delete" onClick={() => this.documentDelete(item)} />
                                                    <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="copy" onClick={() => this.documentClone(item)} />
                                                    */}
                                                </div>
                                            </CardHeader>
                                            <CardBody>
                                                <Form layout="inline">
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Status"
                                                    >
                                                        {item.Exp_Flag}
                                                    </FormItem>
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="ID"
                                                    >
                                                        {item.VPID}
                                                    </FormItem>
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Doc Group"
                                                    >
                                                        {item.DGID}
                                                    </FormItem>
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Reference"
                                                    >
                                                        {item.XMLRef}
                                                    </FormItem>
                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </ColRS>)}

                                }
                                </Row>
                            </div>
                       ) : ( // Desktop version
                                <div>
                                    <ReactTable
                                        columns={[
                                            {
                                                sortable: false,
                                                filterable: false,
                                                width: 50,
                                                resizable:false,
                                                className:'action-menu',
                                                Cell: row => (
                                                        <GridActionMenu items={["Edit", "Edit XML", "Delete"]} 
                                                                onItemClick={(item)=>{switch(item){
                                                                    case "Edit":
                                                                        this.documentEdit(row.original)
                                                                        break;
                                                                    case "Edit XML":
                                                                        this.documentEditXML(row.original)
                                                                        break;
                                                                    case "Delete":
                                                                        this.documentDelete(row.original)
                                                                        break;
                                                        }}}/>
                                                )
                                            },
                                            {
                                                Header: "Status",
                                                accessor: XXMLDoc.kXMLDoc_Exp_Flag,
                                                Cell: ({ row }) => {
                                                    return selectGetValue(selectStatus, row.Exp_Flag)
                                                },
                                            },
                                            {
                                                Header: "ID",
                                                accessor: XXMLDoc.kXMLDoc_VPID
                                            },
                                            {
                                                Header: "Trading Partner",
                                                accessor: XXMLDoc.kXMLDoc_TP_PartID
                                            },
                                            {
                                                Header: "Doc Group",
                                                accessor: XXMLDoc.kXMLDoc_DGID
                                            },
                                            {
                                                Header: "Direction",
                                                accessor: XXMLDoc.kXMLDoc_Direction,
                                                Cell: ({ row }) => {
                                                    return selectGetValue(selectDirection, row.Direction)
                                                },
                                            },
                                            {
                                                Header: "Import Date",
                                                accessor: XXMLDoc.kXMLDoc_CreatedDate,
                                                Cell: ({ row }) => {
                                                    return formatDate(row.CreatedDate);
                                                },
                                            },
                                            {
                                                Header: "Export Date",
                                                accessor: XXMLDoc.kXMLDoc_ExportDate,
                                                Cell: ({ row }) => {
                                                    return formatDate(row.ExportDate);
                                                },
                                            },
                                            {
                                                Header: "GCN",
                                                accessor: XXMLDoc.kXMLDoc_GCN
                                            },
                                            {
                                                Header: "TCN",
                                                accessor: XXMLDoc.kXMLDoc_TCN
                                            },
                                        ]}
                                        manual={false}
                                        data={documentList}
                                        loading={loading}
                                        sortable={true}
                                        sorted={sorted}
                                        onSortedChange={this.onSortedChange}
                                        filterable={false}
                                        showPagination={false}
                                        pageSize={tablePageSize}
                                        className="-highlight table-container"
                                    />
                                </div>
                            )
                    }
                </Media>
                <div className="paging-panel">
                    <Pagination
                        showSizeChanger={true}
                        onChange={this.onChangePage}
                        current={this.state.page}
                        pageSize={this.state.pageSize}
                        pageSizeOptions={['10', '50', '100']}
                        onShowSizeChange={this.onShowSizeChange}
                        total={this.state.documentListCount}
                    />
                </div>
            </div>
        );
    }

    public revertDisplay() {
        this.setState({
            display: Display.Summary
        });
    }

    private handleFilterApply(newFilter:FilterDescriptor[]){
        this.setState({filtered:cloneDeep(newFilter)}, ()=>{
            this.requery(this.state.pageSize)
        })
    }

    private handleStatusFilterChange(value: string) {
        this.updateFilter(XXMLDoc.kXMLDoc_Exp_Flag, value);
    }

    private handleDirectionFilterChange(value: string) {
        this.updateFilter(XXMLDoc.kXMLDoc_Direction, value);
    }

    private handleFilterChange(event: any) {
        const target: any = event.target;
        const id: string = target.name;
        const value: string = target.type === 'checkbox' ? String(target.checked) : target.value;

        this.updateFilter(id, value);
    }
    
    private updateFilter(id: string, value: string) {
        let { filtered } = this.state;
        filtered = filterAdd(filtered, id, value);
        this.setState({ filtered , page: 1});
    }

    private query(page: number, pageSize: number) {   // We pass these arguments rather than reading them from the state, because updates to state are delayed
        const top: number = pageSize;
        const skip: number = (page - 1) * pageSize; // The pagination component is 1-based
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        this.props.documentGetAll(params);
    }

    private requery(pageSize: number) {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private documentAdd() {
        this.setState({
            documentEdit: new XXMLDoc.CXMLDoc({
            }),
            display: Display.Detail,
            isNew: true
        });
    }

    private documentEdit(document: IXMLDoc) {
        this.setState({
            documentEdit: document,
            display: Display.Detail,
            isNew: false
        });
    }

    private documentEditXML(document: IXMLDoc) {
        this.setState({
            documentEdit: document,
            display: Display.EditXml,
            isNew: false
        });
    }

    private documentDelete(document: IXMLDoc) {
        this.props.documentDelete(document);
    }

    private documentClone(document) {
        const clone = JSON.parse(JSON.stringify(document));
        clone.Id = uuid();
        clone.Ship_Via_ID += "2";
        this.setState({
            documentEdit: clone,
            display: Display.Detail,
            isNew: true
        });
    }

    private onChangePage = (page) => {
        this.setState({ page });
        this.query(page, this.state.pageSize);
    }

    private onShowSizeChange = (current, pageSize) => {
        this.setState({ pageSize });
        this.requery(pageSize);
    }

    private getSortButton(columnId) {
        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column) => column.id === columnId);

        // This is a tri-state toggle
        if (sortedColumn.length > 0) {
            if (sortedColumn[0].desc) {
                return <FaSortDown onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
            else {
                return <FaSortUp onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
        }
        else {
            return <FaSort onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
    }

    private toggleSortMode(columnId) {
        let sortUpdated: SortDescriptor[] = [];

        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column) => column.id === columnId);

        // This is a tri-state toggle
        if (sortedColumn.length > 0) {
            if (sortedColumn[0].desc) {
                // Remove it from the array
                sortUpdated = this.state.sorted.filter((column) => column.id !== columnId);
            }
            else {
                // Change it to descending
                sortUpdated = this.state.sorted.filter((column) => column.id !== columnId).concat({ "desc": true, "id": columnId });
            }
        }
        else {
            // Add it to the array as ascending (default)
            sortUpdated = this.state.sorted.concat({ "desc": false, "id": columnId });
        }

        this.setState({
            sorted: sortUpdated
        });
    }

    private onSortedChange(sorted: SortDescriptor[]) {
        this.setState({ sorted });
    }

    private onFilteredChange(filtered: FilterDescriptor[]) {
        this.setState({ filtered });
    }
}

const mapStateToProps = ({ document }) => {
    return { document }
};

const mapActionsToProps = {
    documentGetAll,
    documentDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(DocumentListView);
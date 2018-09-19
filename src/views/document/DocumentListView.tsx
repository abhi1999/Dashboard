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
import JsonEditView from './JsonEditView';
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
    modal: boolean,
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
            modal: false,
            documentEdit: new XXMLDoc.CXMLDoc(),
            isNew: false,
            collapseAddNew: false,
            documentList: [],
            documentListCount: 0,
            loading: true,
            sorted: [new SortDescriptor({ desc: false, id: "Direction" })],
            filtered: [new FilterDescriptor({ value: 'N', id: "Exp_Flag" })],
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.documentAdd = this.documentAdd.bind(this);
        this.documentEdit = this.documentEdit.bind(this);
        this.documentDelete = this.documentDelete.bind(this);
        this.documentClone = this.documentClone.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
        const { loading, pageSize, sorted, filtered, modal } = this.state;
        let { documentList } = this.state;

        if (modal) {
            return (
                <JsonEditView itemId={this.state.documentEdit.VPID} item={this.state.documentEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />

                // <DocumentView itemId={this.state.documentEdit.VPID} item={this.state.documentEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
            );
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
                <Card body={true} outline={true} style={{ width: '100%' }}>
                    <FlexView width='100%' wrap={true} style={{ marginTop: -10, marginBottom: 10 }}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <Button type="primary" shape="circle" icon="retweet" size="default" onClick={() => this.requery(this.state.pageSize)} />
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange={this.onChangePage}
                                current={this.state.page}
                                pageSize={this.state.pageSize}
                                pageSizeOptions={['10', '50', '100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.documentListCount}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="40" wrap={true}>
                            <Button type="primary" shape="circle" icon="plus" size="default" onClick={() => this.documentAdd()} />
                        </FlexView>
                    </FlexView>
                </Card>
                <Media query={{ maxWidth: 768 }}>
                    {matches => // Mobile version first
                        matches ? (
                            <div>
                                <Card body={true} outline={true} style={{ width: '100%' }}>
                                    <Form layout="inline" style={{ marginTop: -10, marginBottom: 10 }}>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Status"
                                        >
                                            <Select style={{ width: '100%' }}
                                                value={filterGetValue(this.state.filtered, XXMLDoc.kXMLDoc_Exp_Flag)}
                                                onChange={this.handleStatusFilterChange}
                                            >
                                                {selectStatus.map((option) => <Option key={option.key} value={option.value}>{option.label}</Option>)}
                                            </Select>
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="ID"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_VPID}   
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_VPID)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_VPID)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Trading Partner"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_TP_PartID}    
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_TP_PartID)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_TP_PartID)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="DGID"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_DGID}                                                prefix={this.getSortButton("DGID")}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_DGID)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Reference"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_XMLRef}
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_XMLRef)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_XMLRef)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Direction"
                                        >
                                            <Select style={{ width: '100%' }}
                                                value={filterGetValue(this.state.filtered, XXMLDoc.kXMLDoc_Direction)}
                                                onChange={this.handleDirectionFilterChange}
                                            >
                                                {selectDirection.map((option) => <Option key={option.key} value={option.value}>{option.label}</Option>)}
                                            </Select>
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Import Date"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_CreatedDate}
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_CreatedDate)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_CreatedDate)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="Export Date"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_ExportDate}
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_ExportDate)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_ExportDate)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="GCN"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_GCN}
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_GCN)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_GCN)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                        <FormItem
                                            {...formItemLayout}
                                            colon={false}
                                            label="TCN"
                                        >
                                            <Input
                                                name={XXMLDoc.kXMLDoc_TCN}
                                                prefix={this.getSortButton(XXMLDoc.kXMLDoc_TCN)}
                                                value={filterGetValue(filtered, XXMLDoc.kXMLDoc_TCN)}
                                                onChange={this.handleFilterChange}
                                            />
                                        </FormItem>
                                    </Form>
                                </Card>
                                <Row>
                                    {documentList.map((item) =>
                                        <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.VPID}>
                                            <Card outline={false}>
                                                <CardHeader>
                                                    {item.Exp_Flag}
                                                    <div className="card-header-actions">
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
                                </Row>
                            </div>

                        ) : ( // Desktop version
                                <div>
                                    <ReactTable
                                        columns={[
                                            {
                                                sortable: false,
                                                filterable: false,
                                                width: 120,
                                                Cell: row => (
                                                    <div>
                                                        <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="edit" onClick={() => this.documentEditXML(row.original)} />
                                                        {/*
                                                        <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="form" onClick={() => this.documentEdit(row.original)} />
                                                        <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="delete" onClick={() => this.documentDelete(row.original)} />
                                                        <Button type="primary" shape="circle" size="small" style={{ marginLeft: 2 }} icon="copy" onClick={() => this.documentClone(row.original)} />
                                                        */}
                                                    </div>
                                                )
                                            },
                                            {
                                                Header: "Status",
                                                accessor: XXMLDoc.kXMLDoc_Exp_Flag,
                                                sortable: true,
                                                filterable: true,
                                                Cell: ({ row }) => {
                                                    return selectGetValue(selectStatus, row.Exp_Flag)
                                                },
                                                Filter: ({ filter, onChange }) =>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        value={filterGetValue(this.state.filtered, XXMLDoc.kXMLDoc_Exp_Flag)}
                                                        onChange={this.handleStatusFilterChange}
                                                    >
                                                        {selectStatus.map((option) => <Option key={option.key} value={option.value}>{option.label}</Option>)}
                                                    </Select>
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
                                                sortable: true,
                                                filterable: true,
                                                Cell: ({ row }) => {
                                                    return selectGetValue(selectDirection, row.Direction)
                                                },
                                                Filter: ({ filter, onChange }) =>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        value={filterGetValue(this.state.filtered, "Direction")}
                                                        onChange={this.handleDirectionFilterChange}
                                                    >
                                                        {selectDirection.map((option) => <Option key={option.key} value={option.value}>{option.label}</Option>)}
                                                    </Select>
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
                                        filterable={true}
                                        filtered={filtered}
                                        onFilteredChange={this.onFilteredChange}
                                        defaultFilterMethod={(filter, row) => filterIncludes(filter, row)}
                                        showPagination={false}
                                        pageSize={tablePageSize}
                                        className="-striped -highlight"
                                    />
                                </div>
                            )
                    }
                </Media>
            </div>
        );
    }

    public toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
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
        this.setState({ filtered });
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
            modal: true,
            isNew: true
        });
    }

    private documentEdit(document: IXMLDoc) {
        this.setState({
            documentEdit: document,
            modal: true,
            isNew: false
        });
    }

    private documentEditXML(document: IXMLDoc) {
        this.setState({
            documentEdit: document,
            modal: true,
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
            modal: true,
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
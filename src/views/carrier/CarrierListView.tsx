import * as  React from 'react';
import { connect } from 'react-redux'
import ReactTable from "react-table";
import { Badge, Button as RSButton, ButtonDropdown, Card, CardTitle, CardHeader, CardBody, Col as ColRS, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, Popover, PopoverHeader, PopoverBody, Input as RSInput } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt, FaPlusCircle, FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown, FaTable, FaList } from 'react-icons/fa';
import { carrierGetAll, carrierDelete } from '../../actions/CarrierAction';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import CarrierView from './CarrierView';
import { Pagination } from 'antd';
import {cloneDeep, remove, orderBy, includes } from "lodash";
import PaginationControl from './../../components/widgets/PaginationControl';

import { Form, Input, Select, Button } from 'antd';
import { ICON_SIZE, ICON_SMALL, ICON_COLOR } from '../../constants/Attributes';
import uuid from 'uuid-v4';
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import ShipViaModel from '../../constants/implementations/ShipViaModel';
import { ToString } from '../../utils/Conversion';
import { CarrierListCardItem } from "./CarrierListCardItem";
import Media from "react-media";
import * as XShipVia from "../../constants/edidb/CShipVia";
import { filterAdd, filterIncludes, filterGetValue, selectGetValue } from '../../utils/Comparison';
const InputGroup = Input.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 18 },
    wrapperCol: { span: 20 },
};
const selectType:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "LT", value: "LT", label: "LT" }),
    new KeyValueLabel({ key: "M", value: "M", label: "M" }),
    new KeyValueLabel({ key: "U", value: "U", label: "U" }),
];
const selectTest:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "true", value: "true", label: "True" }),
    new KeyValueLabel({ key: "false", value: "false", label: "False" }),
];

export interface ICarrierListViewProps {
    // redux
    carrier: any,
    carrierGetAll: any,
    carrierDelete: any,
    toastError: any,
}

export interface ICarrierListViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    carrierEdit: ShipViaModel,
    isNew: boolean,
    collapseAddNew: boolean,
    carrierList: ShipViaModel[],
    carrierListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],  // Sort state of the grid
    filtered: FilterDescriptor[],  // filtered state of the grid
    actionMenuState:string // To show/hide action menu poover
    filterPopover:boolean, // To show/hide filter popover
    filterDirtyState:FilterDescriptor[]  /// This is to store dirty changes to the filter
}

class CarrierListView extends React.Component<ICarrierListViewProps, ICarrierListViewState> {

    constructor(props: ICarrierListViewProps) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize: 10,
            page: 1,
            modal: false,
            carrierEdit: new ShipViaModel(),
            isNew: false,
            collapseAddNew: false,
            carrierList: [],
            carrierListCount: 0,
            loading: true,
            sorted: [new SortDescriptor({ desc: false, id: XShipVia.kShipVia_Ship_Via_Name })],
            filtered: [],
            actionMenuState:'',
            filterPopover:false,
            filterDirtyState:[]
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.carrierAdd = this.carrierAdd.bind(this);
        this.carrierEdit = this.carrierEdit.bind(this);
        this.carrierDelete = this.carrierDelete.bind(this);
        this.carrierClone = this.carrierClone.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.getSortButton = this.getSortButton.bind(this);
        this.handleTypeFilterChange = this.handleTypeFilterChange.bind(this);
        this.handleTestFilterChange = this.handleTestFilterChange.bind(this);
        this.toggleActionMenu = this.toggleActionMenu.bind(this);
        this.handleFilterDirtyChange = this.handleFilterDirtyChange.bind(this);
        this.getFilterValues = this.getFilterValues.bind(this);
        this.handleFilterApply = this.handleFilterApply.bind(this);
        this.handleFilterCancel = this.handleFilterCancel.bind(this);
        this.renderEditAddCloneView = this.renderEditAddCloneView.bind(this);
    }
    public componentWillMount() {
        this.query(1, 10);
    }
    public componentWillReceiveProps(newProps) {
        this.setState({
            loading: false,
            carrierList: newProps.carrier.carrierList,
            carrierListCount: newProps.carrier.carrierListCount
        });
    }
    public renderEditAddCloneView(){
        return (
            <CarrierView itemId={this.state.carrierEdit.Id} item={this.state.carrierEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
        );
    }
    public render() {
        const { loading, pageSize, sorted, filtered, modal } = this.state;
        let { carrierList } = this.state;

        if(modal){
            return this.renderEditAddCloneView();
        }

        // Filter and sort client-side
        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                carrierList = carrierList.filter(item => includes(String(item[column.id]).toLowerCase(), String(column.value).toLowerCase()));
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            carrierList = orderBy(carrierList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        const tablePageSize = Math.min(carrierList.length, pageSize); // Only show rows with data in the table

        return (
            <div>
                <div className="header-icons">
                    <RSButton className="fa fa-plus" onClick={() => this.carrierAdd()}/>
                    <RSButton className="fa fa-refresh" onClick={() => this.requery(this.state.pageSize)} />
                    <RSButton id="filterBtn" className="fa fa-filter" active={this.state.filtered.length>0} onClick={() => this.setState({filterPopover:!this.state.filterPopover})}/>{this.state.filtered.length>0? <Badge color="secondary">{this.state.filtered.length}</Badge>:""}
                    <Popover placement="left-end" isOpen={this.state.filterPopover} target="filterBtn" toggle={() => this.setState({filterPopover:!this.state.filterPopover})}>
                        <PopoverHeader>Filter</PopoverHeader>
                        <PopoverBody>
                            ID 
                            <RSInput placeholder="ID" name={XShipVia.kShipVia_Ship_Via_ID} value={this.getFilterValues(XShipVia.kShipVia_Ship_Via_ID)} onChange={(e)=>{this.handleFilterDirtyChange(e.target.name, e.target.value)}} />
                            Carrier Name 
                            <RSInput name={XShipVia.kShipVia_Ship_Via_Name} value={this.getFilterValues(XShipVia.kShipVia_Ship_Via_Name)} placeholder="Carrier Name" onChange={(e)=>{this.handleFilterDirtyChange(e.target.name, e.target.value)}}/>
                            SCAC 
                            <RSInput name={XShipVia.kShipVia_SCAC} placeholder="SCAC" value={this.getFilterValues(XShipVia.kShipVia_SCAC)} onChange={(e)=>{this.handleFilterDirtyChange(e.target.name, e.target.value)}}/>
                            Type 
                            <RSInput name={XShipVia.kShipVia_Ship_Via_Type} value={this.getFilterValues(XShipVia.kShipVia_Ship_Via_Type)} type="select" onChange={(e)=>{this.handleFilterDirtyChange(e.target.name, e.target.value)}}>
                                {selectType.map((option)=><option key={option.key} value={option.value}>{option.label}</option>)}
                            </RSInput>
                            <RSButton color="primary" onClick={this.handleFilterApply}>Apply</RSButton>                                
                            <RSButton color="secondary" onClick={this.handleFilterCancel}>Cancel</RSButton>
                        </PopoverBody>
                    </Popover>
                </div>
                {
                    this.state.filtered.length> 0?<div>
                        {this.state.filtered.map(f=><RSButton key={f.id} onClick={()=>{this.handleFilterDirtyChange(f.id); this.handleFilterApply()}}>{f.value}</RSButton>)}
                    </div>:""
                }
                <Media query={{ maxWidth: 768 }}>
                    {matches => // Mobile version first
                        matches ? (
                            <div>
                                <Row>
                                {
                                    carrierList.map((item) =>
                                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                                        <CarrierListCardItem key={item.Id} data={item} onItemEdit={()=>this.carrierEdit(item)} onItemClone={() => this.carrierClone(item)} onItemDelete={() => this.carrierDelete(item)} />
                                    </ColRS>)
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
                                                    <div>
                                                        <ButtonDropdown direction="right"  isOpen={this.state.actionMenuState === row.original.Id } toggle={()=>{this.toggleActionMenu(row.original)}}>
                                                            <DropdownToggle caret={false} className="fa fa-ellipsis-v btn-toggle"/>
                                                            <DropdownMenu>
                                                                <DropdownItem onClick={() => this.carrierEdit(row.original)}>Edit</DropdownItem>
                                                                <DropdownItem onClick={() => this.carrierClone(row.original)}>Clone</DropdownItem>
                                                                <DropdownItem onClick={() => this.carrierDelete(row.original)}>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </ButtonDropdown>
                                                    </div>
                                                )
                                            },
                                            {
                                                Header: "ID",
                                                accessor: XShipVia.kShipVia_Ship_Via_ID
                                            },
                                            {
                                                Header: "Carrier Name",
                                                accessor: XShipVia.kShipVia_Ship_Via_Name,
                                                minWidth: 250
                                            },
                                            {
                                                Header: "SCAC",
                                                accessor:  XShipVia.kShipVia_SCAC
                                            },
                                            {
                                                Header: "Type",
                                                accessor: XShipVia.kShipVia_Ship_Via_Type,
                                                sortable: true,
                                                filterable: false,
                                                Cell: ({ row }) => selectGetValue(selectType, row.Ship_Via_Type),
                                                Filter: ({ filter, onChange }) =>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        value={filterGetValue(this.state.filtered, XShipVia.kShipVia_Ship_Via_Type)}
                                                        onChange={this.handleTypeFilterChange}
                                                    >
                                                    {selectType.map((option)=><Option key={option.key} value={option.value}>{option.label}</Option>)}
                                                    </Select>
                                            },
                                            {
                                                Header: "Test",
                                                accessor: "Test",
                                                sortable: true,
                                                filterable: false,
                                                Cell: ({ row }) => selectGetValue(selectTest, row.Test),
                                                Filter: ({ filter, onChange }) =>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        value={filterGetValue(this.state.filtered, "Test")}
                                                        onChange={this.handleTestFilterChange}
                                                    >
                                                    {selectTest.map((option)=><Option key={option.key} value={option.value}>{option.label}</Option>)}
                                                    </Select>
                                            },
                                        ]}
                                        manual={false}
                                        data={carrierList}
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
                        total={this.state.carrierListCount}
                    />
                </div>
            </div>
        );
    }

    private toggleModal() {
        this.setState({modal: !this.state.modal});
    }
    // Filter calls
    private handleFilterApply(){
        this.setState({filterPopover:false, filtered:cloneDeep(this.state.filterDirtyState)}, ()=>{
            this.requery(this.state.pageSize)
        })
    }
    private handleFilterCancel(){
        this.setState({filterPopover:false, filterDirtyState:cloneDeep(this.state.filtered)})
    }
    private getFilterValues(id){
        const item = this.state.filterDirtyState.find(f=> f.id === id);
        return item? item.value: ""; 
    }
    private handleFilterDirtyChange(id, value=''){
        const filterDirtyState = this.state.filterDirtyState;
        let item = filterDirtyState.find(f=> f.id === id)
        if(item!== undefined){
            item.value = value;
        }else{
            item = {id, value}
            filterDirtyState.push(item);
        }
        remove(filterDirtyState, (f)=>f.value === undefined || f.value.length === 0 )
        this.setState({filterDirtyState});
    }
    private toggleActionMenu(data){
        this.setState({actionMenuState:this.state.actionMenuState=== data.Id? "": data.Id});
    }
    private handleTypeFilterChange(value: string) {
        this.updateFilter(XShipVia.kShipVia_Ship_Via_Type, value);
    }
    private handleTestFilterChange(value: string) {
        this.updateFilter("Test", value);
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
    private toggleViewMode() {
        if (this.state.viewMode === 'cards') {
            this.setState({ viewMode: 'table' });
        }
        else {
            this.setState({ viewMode: 'cards' });
        }
    }

    private query(page: number, pageSize: number) {   // We pass these arguments rather than reading them from the state, because updates to state are delayed
        const top: number = pageSize;
        const skip: number = (page - 1) * pageSize; // The pagination component is 1-based
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        this.props.carrierGetAll(params);
    }

    private requery(pageSize: number) {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private carrierAdd() {
        const newCarrier = new ShipViaModel();
        newCarrier.Ship_Via_ID = uuid().toString().substring(0, 8);
        newCarrier.Ship_Via_Name = "New Carrier";
        this.setState({
            carrierEdit: newCarrier,
            modal: true,
            isNew: true
        });
    }

    private carrierEdit(carrier: ShipViaModel) {
        this.setState({
            carrierEdit: carrier,
            modal: true,
            isNew: false
        });
    }

    private carrierDelete(carrier: ShipViaModel) {
        const check = confirm('Are you sure you want to delete this Carrier?')
        if (check) {
            this.props.carrierDelete(carrier);
        }
    }

    private carrierClone(carrier) {
        const clone = JSON.parse(JSON.stringify(carrier));
        clone.Id = uuid();
        clone.Ship_Via_ID += "2";
        this.setState({
            carrierEdit: clone,
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
        debugger;
        this.setState({ filtered }, ()=>{
            // this.requery(this.state.pageSize)
        });
    }
}


// Redux Connect componet
const mapStateToProps = ({ carrier }) => {
    return { carrier }
};

const mapActionsToProps = {
    carrierGetAll,
    carrierDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierListView);
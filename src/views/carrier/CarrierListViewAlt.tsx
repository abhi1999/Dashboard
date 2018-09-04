import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card, Col as ColRS, Row } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt, FaPlusCircle, FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown, FaTable, FaList } from 'react-icons/fa';
import { carrierGetAll, carrierDelete } from '../../actions/CarrierAction';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import CarrierView from './CarrierView';
import { Pagination } from 'antd';
import { Input, Select, Col, Checkbox } from 'antd';
import { ICON_SIZE, ICON_COLOR } from '../../constants/Attributes';
import uuid from 'uuid-v4';
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import ShipViaModel from '../../constants/implementations/ShipViaModel';
import { ToString } from '../../utils/Conversion';
const InputGroup = Input.Group;
const Option = Select.Option;

import { CarrierListCardItem}  from "./CarrierListCardItem";


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
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
    // Filter fields
    Ship_Via_ID: string,
    Ship_Via_Name: string,
    SCAC: string,
    Ship_Via_Type: string,
    Test: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class CarrierListViewAlt extends React.Component<ICarrierListViewProps, ICarrierListViewState> {

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
            sorted: [new SortDescriptor({ desc: false, id: "Ship_Via_Name" })],
            filtered: [],
            Ship_Via_ID: "",
            Ship_Via_Name: "",
            SCAC: "",
            Ship_Via_Type: "All",
            Test: "All"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
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

    public render() {
        const { loading, pageSize, sorted, filtered } = this.state;
        let { carrierList } = this.state;

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                carrierList = carrierList.filter(item => _.includes(ToString(item[column.id]).toLowerCase(), ToString(column.value).toLowerCase()));
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            carrierList = _.orderBy(carrierList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        let toggleButton;
        let cardHeader;
        let detailSection;
        const tablePageSize = Math.min(carrierList.length, pageSize); // Only show rows with data in the table

        if (this.state.viewMode === 'cards') {   // Conditional display elements for either cards or table view
            toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;

            cardHeader =
                <FlexView width='100%' wrap={true} >
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <span />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder="ID"
                            name="Ship_Via_ID"
                            prefix={this.getSortButton("Ship_Via_ID")}
                            value={this.state.Ship_Via_ID}
                            onChange={this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="200" wrap={true}>
                        <Input
                            placeholder="Name"
                            name="Ship_Via_Name"
                            prefix={this.getSortButton("Ship_Via_Name")}
                            value={this.state.Ship_Via_Name}
                            onChange={this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder="SCAC"
                            name="SCAC"
                            prefix={this.getSortButton("SCAC")}
                            value={this.state.SCAC}
                            onChange={this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Select style={{ width: '100%' }} 
                                value={this.state.Ship_Via_Type}
                                onChange={this.handleTypeFilterChange}
                                >
                                <Option key="all" value="all">All</Option>
                                <Option key="LT" value="LT">LT</Option>
                                <Option key="M" value="M">M</Option>
                                <Option key="U" value="U">U</Option>
                            </Select>
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Select style={{ width: '100%' }} 
                                value={this.state.Test}
                                onChange={this.handleTestFilterChange}
                                >
                                <Option key="all" value="all">All</Option>
                                <Option key="true" value="true">True</Option>
                                <Option key="false" value="false">False</Option>
                        </Select>
                    </FlexView>
                    <FlexView hAlignContent="right" vAlignContent="center" grow={true} wrap={true}>
                        <span />
                    </FlexView>
                </FlexView>;

            detailSection = <Row> 
                {carrierList.map((item) =>
                <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                    <CarrierListCardItem key={item.Id} data={item} onItemEdit={()=>this.carrierEdit(item)} onItemClone={() => this.carrierClone(item)} onItemDelete={() => this.carrierDelete(item)} />
                </ColRS>)}
            </Row>;
        }
        else // Table Display
        {
            toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;

            cardHeader = <span />; // This part is blank for the table view

            detailSection =
                <ReactTable
                    columns={[
                        {
                            sortable: false,
                            filterable: false,
                            width: 120,
                            Cell: row => (
                                <div>
                                    <FaEdit onClick={() => this.carrierEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaTimesCircle onClick={() => this.carrierDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaClone onClick={() => this.carrierClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                </div>
                            )
                        },
                        {
                            Header: "ID",
                            accessor: "Ship_Via_ID"
                        },
                        {
                            Header: "Carrier Name",
                            accessor: "Ship_Via_Name",
                            minWidth: 250
                        },
                        {
                            Header: "SCAC",
                            accessor: "SCAC"
                        },
                        {
                            Header: "Type",
                            accessor: "Ship_Via_Type",
                            sortable: true,
                            filterable: true,
                            Cell: ({ row }) => {
                                // This is where we could cause it to display in the table as something else
                                return (
                                    row.Ship_Via_Type
                                )
                            },
                            Filter: ({ filter, onChange }) =>
                                <Select
                                    style={{ width: "100%" }}
                                    value={this.state.Ship_Via_Type}
                                    onChange={this.handleTypeFilterChange}
                                >
                                    <Option key="all" value="all">All</Option>
                                    <Option key="LT" value="LT">LT</Option>
                                    <Option key="M" value="M">M</Option>
                                    <Option key="U" value="U">U</Option>
                                </Select>
                        },
                        {
                            Header: "Test",
                            accessor: "Test",
                            sortable: true,
                            filterable: true,
                            Cell: ({ row }) => {
                                // This is where we could cause it to display in the table as something else
                                return (
                                    ToString(row.Test)
                                )
                            },
                            Filter: ({ filter, onChange }) =>
                                <Select
                                    style={{ width: "100%" }}
                                    value={this.state.Test}
                                    onChange={this.handleTestFilterChange}
                                >
                                    <Option key="all" value="all">All</Option>
                                    <Option key="true" value="true">True</Option>
                                    <Option key="false" value="false">False</Option>
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
                    defaultFilterMethod={(filter, row) => String(row[filter.id]).includes(filter.value)}
                    showPagination={false}
                    pageSize={tablePageSize}
                    className="-striped -highlight"
                />
        }

        return (
            <div>
                <Card body={true} outline={true} style={{ width: '100%' }}>
                    <FlexView width='100%' wrap={true} style={{ marginBottom: 12 }}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <FaSyncAlt onClick={() => this.requery(this.state.pageSize)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange={this.onChangePage}
                                current={this.state.page}
                                pageSize={this.state.pageSize}
                                pageSizeOptions={['10', '50', '100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.carrierListCount}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.carrierAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />
                            {toggleButton}
                        </FlexView>
                    </FlexView>
                    {cardHeader}
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Carrier</ModalHeader>
                    <ModalBody>
                        <CarrierView itemId={this.state.carrierEdit.Id} item={this.state.carrierEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
                    </ModalBody>
                </Modal>

                {detailSection}
            </div>
        );
    }

    public toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    private handleTypeFilterChange(value: string) {

        let { filtered } = this.state;
        // Remove the current filter for this column if there is one
        filtered = filtered.filter((column:FilterDescriptor) => column.id !== "Ship_Via_Type")

        // If they selected a value (not "all" or blank), then add the filter back in
        if (value!=="all" && value.length > 0)
        {
            filtered = filtered.concat(new FilterDescriptor({id:"Ship_Via_Type", value }));
        }

        // Update the state value for the field, as well as the filtered array
        this.setState({ Ship_Via_Type: value, filtered });
    }
    
    private handleTestFilterChange(value: string) {

        let { filtered } = this.state;
        // Remove the current filter for this column if there is one
        filtered = filtered.filter((column:FilterDescriptor) => column.id !== "Test")

        // If they selected a value (not "all" or blank), then add the filter back in
        if (value!=="all" && value.length > 0)
        {
            filtered = filtered.concat(new FilterDescriptor({id:"Test", value }));
        }

        // Update the state value for the field, as well as the filtered array
        this.setState({ Test: value, filtered });
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
        this.setState({
            carrierEdit: new ShipViaModel({
                "Ship_Via_ID": uuid(),
                "Ship_Via_Name": "New Carrier"
            }),
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
        this.props.carrierDelete(carrier);
    }

    private carrierClone(carrier) {
        const clone = JSON.parse(JSON.stringify(carrier));
        clone.Id = uuid();
        clone.Ship_Via_ID += "#";
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
        if (filtered.length > 0) {
            filtered.map((column) => {
                this.setState({ [column.id]: column.value });
            });
        }

        this.setState({ filtered });
    }

    private handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this !== undefined) {
            this.setState({
                [name]: value
            });
        }
    }

    private handleFilterChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const columnId = target.name;

        if (this !== undefined) {
            this.setState({
                [columnId]: value
            });
        }

        let filterUpdated: FilterDescriptor[] = [];

        // Get the relevant column from the filtered array
        const filteredColumn = this.state.filtered.filter((column) => column.id === columnId);

        if (filteredColumn.length > 0) {
            // Update the value that it is filtering on
            filterUpdated = this.state.filtered.filter((column) => column.id !== columnId).concat({ "id": columnId, "value": value });
        }
        else {
            // Add it to the array as new
            filterUpdated = this.state.filtered.concat({ "id": columnId, "value": value });
        }

        this.setState({
            filtered: filterUpdated
        });
    }
}

const mapStateToProps = ({ carrier }) => {
    return { carrier }
};

const mapActionsToProps = {
    carrierGetAll,
    carrierDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierListViewAlt);
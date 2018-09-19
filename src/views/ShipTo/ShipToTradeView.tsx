import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from '../../constants/Attributes';
import { Pagination, Input } from 'antd';
import { shipToGetAll, shipToDelete, shipToUpdate } from '../../actions/ShipTo';
import { tradeGetAll } from '../../actions/Trade';
import { IShipTo } from "../../constants/edidb";
import { CShipTo } from "../../constants/edidb/CShipTo";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import { ToString } from '../../utils/Conversion';
import ShipToTradeCardView from "./ShipToTradeCardView"
import ShipToTradeTableView from "./ShipToTradeTableView"
// import ShipToDetailView from "./ShipToDetailView"
// import ShipToTableView from "./ShipToTableView"
import ShipToView from "./ShipToView"
import Media from "react-media";
import { CTrade } from "../../constants/edidb/CTrade";
import { ITrade } from "../../constants/edidb";

const statusList = [{ id: "I", status: "Inactive" }, { id: "P", status: "Production" }, { id: "T", status: "Test" }]

export interface IShipToTradeViewProps {
    // redux
    shipTo: any,
    tradeTo: any,
    kitType: any,
    tradeGetAll: any,
    shipToGetAll: any,
    shipToDelete: any,
    toastError: any,
}

export interface IShipToTradeViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    shipToEdit: IShipTo,
    tradeToEdit: ITrade,
    isNew: boolean,
    collapseAddNew: boolean,
    tradeList: ITrade[],
    tradeListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
    // Filter fields
    TP_PartID: string,
    TP_PartQ: string,
    TP_ID: string,
    TP_Name: string,
    TP_GroupID: string,
    // KitTypeID: number,
    KitTypeID: string,
    TP_Status: string
    // kitTypeIDFilter: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class ShipToTradeView extends React.Component<IShipToTradeViewProps, IShipToTradeViewState> {
    constructor(props: IShipToTradeViewProps) {
        super(props)
        this.state = {
            viewMode: 'header',
            pageSize: 10,
            page: 1,
            shipToEdit: new CShipTo(),
            tradeToEdit: new CTrade(),
            isNew: false,
            collapseAddNew: false,
            tradeList: [],
            tradeListCount: 0,
            shipToList: [],
            shipToListCount: 0,
            loading: true,
            refresh: false,
            sorted: [{ desc: false, id: "TP_Name" }],
            filtered: [],
            TP_PartID: "",
            TP_PartQ: "",
            TP_ID: "",
            TP_Name: "",
            TP_GroupID: "",
            // KitTypeID: 0,
            KitTypeID: "All",
            TP_Status: "All",
            // kitTypeIDFilter: ""
        }
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
        this.setHeaderViewMode = this.setHeaderViewMode.bind(this);
        this.tradeToEdit = this.tradeToEdit.bind(this);
        this.handleKitTypeIDFilterChange = this.handleKitTypeIDFilterChange.bind(this);
    }
    public componentDidMount() {
        this.query()
    }

    public componentDidUpdate(prevProps, prevState) {
        if (prevState.refresh === false && this.state.refresh) {
            this.query()

            this.setState({ refresh: false })
        }
        else if (prevState.pageSize !== this.state.pageSize) {
            this.query()
        }
        else if (prevState.page !== this.state.page) {
            this.query()
        }
    }

    public componentWillReceiveProps(newProps) {
        
        this.setState({
            loading: false,
            tradeList: newProps.trade.tradeList,
            tradeListCount: newProps.trade.tradeListCount,
        });
    }

    public render() {
        const { loading, pageSize, sorted, filtered } = this.state;
        const partnerList = this.props.kitType.kitTypeList;

        let { tradeList } = this.state;
        // let viewComponent;

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                tradeList = tradeList.filter(item => _.includes(ToString(item[column.id]).toLowerCase(), ToString(column.value).toLowerCase()));
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            tradeList = _.orderBy(tradeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        // let toggleButton;
        const tablePageSize = Math.min(tradeList.length, pageSize); // Only show rows with data in the table;

        // toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        
        const cardViewComponent = <ShipToTradeCardView list={tradeList}
            tradeListCount={this.state.tradeListCount}
            sorted={sorted}
            toggleSortMode={this.toggleSortMode}
            handleFilterChange={this.handleFilterChange}
            tradeToEdit={this.tradeToEdit}
            kitTypeID={this.state.KitTypeID}
            partnerList={partnerList}
            handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
            tpStatus={this.state.TP_Status}
            statusList={statusList}
            handleStatusFilterChange={this.handleStatusFilterChange}
        />

        // toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        const tableViewComponent = <ShipToTradeTableView list={tradeList}
            loading={loading}
            sorted={sorted}
            filtered={filtered}
            pageSize={tablePageSize}
            onSortChange={this.onSortedChange}
            onFilteredChange={this.onFilteredChange}
            tradeToEdit={this.tradeToEdit}
            kitTypeID={this.state.KitTypeID}
            partnerList={partnerList}
            handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
            tpStatus={this.state.TP_Status}
            statusList={statusList}
            handleStatusFilterChange={this.handleStatusFilterChange}
        />

        // if mode list show list screen            
        if (this.state.viewMode === 'list') {
            return <ShipToView item={this.state.tradeToEdit} setHeaderViewMode={this.setHeaderViewMode}/> // pass the trading partner id for edit to ship to
        }

        return (
            <div>
                <Card body={true} outline={true} style={{ width: '100%' }}>
                    <FlexView width='100%' wrap={true} style={{ marginBottom: 12 }}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <FaSyncAlt onClick={() => this.requery()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange={this.onChangePage}
                                current={this.state.page}
                                pageSize={this.state.pageSize}
                                pageSizeOptions={['10', '50', '100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.tradeListCount}
                            />
                        </FlexView>
                        {/*
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            {toggleButton}
                        </FlexView>
                        */}
                    </FlexView>
                </Card>
                <Media query={{ maxWidth: 768 }}>
                    { matches => matches ? cardViewComponent : tableViewComponent }
                </Media>
            </div>
        )
    }

    protected setHeaderViewMode() {
        this.setState({
            viewMode: 'header'
        });
    }

    private query() {
        const top: number = this.state.pageSize;
        const skip: number = (this.state.page - 1) * this.state.pageSize; // The pagination component is 1-based
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };

        this.props.tradeGetAll(params);
    }

    private requery() {
        this.setState({ page: 1, refresh: true });
    }

    private onChangePage = (page) => {
        this.setState({ page });
    }

    private onShowSizeChange = (current, pageSize) => {
        this.setState({ pageSize });
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
    private handleStatusFilterChange(value: string) {

        let { filtered } = this.state;
        // Remove the current filter for this column if there is one
        filtered = filtered.filter((column: FilterDescriptor) => column.id !== "TP_Status")

        // If they selected a value (not "all" or blank), then add the filter back in
        if (value !== "all" && value.length > 0) {
            filtered = filtered.concat(new FilterDescriptor({ id: "TP_Status", value }));
        }

        // Update the state value for the field, as well as the filtered array
        this.setState({ TP_Status: value, filtered });
    }

    private handleKitTypeIDFilterChange(value: string) {

        let { filtered } = this.state;
        // Remove the current filter for this column if there is one
        filtered = filtered.filter((column: FilterDescriptor) => column.id !== "KitTypeID")

        // If they selected a value (not "all" or blank), then add the filter back in
        if (value !== "all" && value.length > 0) {
            filtered = filtered.concat(new FilterDescriptor({ id: "KitTypeID", value }));
        }

        // Update the state value for the field, as well as the filtered array
        this.setState({ KitTypeID: value, filtered });
    }

    private tradeToEdit(trade: ITrade) {

        const top: number = this.state.pageSize;
        const skip: number = (this.state.page - 1) * this.state.pageSize; // The pagination component is 1-based
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };

        // this.props.shipToGetAll(trade.TP_PartID);

        this.setState({
            tradeToEdit: trade,
            viewMode: "list",
            isNew: false,
        });
    }
}

const mapStateToProps = ({ trade, kitType }) => {
    return { trade, kitType }
};

const mapActionsToProps = {
    tradeGetAll,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(ShipToTradeView);
import * as React from "react";
import { connect } from 'react-redux'
import {cloneDeep, includes, orderBy} from 'lodash';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import { Card, Container } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Pagination, Modal, Input } from 'antd';
import PaginationControl from './../../components/widgets/PaginationControl';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import LoadingComponent from "../../components/widgets/LoadingComponent";
import GridFilter from './../../components/widgets/GridFilter';
import GridFilterPills from './../../components/widgets/GridFilterPills';
import FormActionGroup from './../../components/widgets/FormActionGroup';
import IconButton from './../../components/widgets/IconButton';
import { tradeGetAll, tradeDelete } from './../../actions/Trade';
import Media from "react-media";
// import { ITrade } from "../../constants/edidb";
import { CTrade } from "../../constants/edidb/CTrade";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import { ToString } from '../../utils/Conversion';
import TradeCardView from "./TradeCardView"
import TradeTableView from "./TradeTableView"
import TradeDetailView from "./TradeDetailView"
import TradeDetailViewOrig from "./TradeDetailView-Original"
import TradeCloneView from "./TradeCloneView"


// import TradeDetailViewReact from "./TradeDetailViewReact"
// import Trade from "../../constants/implementations/Trade";

const statusList = [{ id: "I", status: "Inactive" }, { id: "P", status: "Production" }, { id: "T", status: "Test" }]

export interface ITradeViewProps {
    // redux
    trade: any,
    kitType: any,
    ediDocGroupSet: any,
    tradeNetworkSet: any,
    tradeGetAll: any,
    tradeDelete: any,
    toastError: any,
}

export interface ITradeViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    clone: boolean,
    tradeEdit: CTrade,
    tradeClone: CTrade,
    isNew: boolean,
    collapseAddNew: boolean,
    // tradeList: ITrade[],
    tradeList: CTrade[],
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
    // KitTypeID: string,
    TP_Status: string
    // kitTypeIDFilter: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class TradeView extends React.Component<ITradeViewProps, ITradeViewState> {
    constructor(props: ITradeViewProps) {
        super(props)
        this.state = {
            viewMode: 'cards',
            actionMenuOpenFor_TP_PartID: '',
            pageSize: 10,
            page: 1,
            modal: false,
            clone: false,
            tradeEdit: new CTrade(),
            tradeClone: new CTrade(),
            isNew: false,
            collapseAddNew: false,
            tradeList: [],
            tradeListCount: 0,
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
            // KitTypeID: "All",
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
        this.handleFilterApply = this.handleFilterApply.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleClone = this.toggleClone.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.tradeEdit = this.tradeEdit.bind(this);
        this.tradeDelete = this.tradeDelete.bind(this);
        this.tradeClone = this.tradeClone.bind(this);
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

        if (this.state.loading) {
            return <LoadingComponent />
        }
        
        const { loading, pageSize, sorted, filtered, modal } = this.state;
        const partnerList = this.props.kitType.kitTypeList;

        let { tradeList } = this.state;
        // let viewComponent;

        if (modal) {

            const networkList = this.props.tradeNetworkSet.tradeNetworkList
            const ediDocGroupList = this.props.ediDocGroupSet.ediDocGroupList;

            return (
                    <TradeDetailView itemId={this.state.tradeEdit.TP_PartID}
                        item={this.state.tradeEdit}
                        isNew={this.state.isNew}
                        toggleViewMode={this.toggleModal}
                        statusList={statusList}
                        partnerList={partnerList}
                        networkList={networkList}
                        ediDocGroupList={ediDocGroupList}
                    />
            )
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                tradeList = tradeList.filter(item => includes(ToString(item[column.id]).toLowerCase(), ToString(column.value).toLowerCase()));
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            tradeList = orderBy(tradeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        // let toggleButton;
        const tablePageSize = Math.min(tradeList.length, pageSize); // Only show rows with data in the table;

        // if (this.state.viewMode === 'cards') {
        //     toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        //     viewComponent = <TradeCardView list={tradeList}
        //         tradeListCount={this.state.tradeListCount}
        //         sorted={sorted}
        //         toggleSortMode={this.toggleSortMode}
        //         handleFilterChange={this.handleFilterChange}
        //         tradeEdit={this.tradeEdit}
        //         tradeDelete={this.tradeDelete}
        //         tradeClone={this.tradeClone}
        //         kitTypeID={this.state.KitTypeID}
        //         partnerList={partnerList}
        //         handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
        //         tpStatus={this.state.TP_Status}
        //         statusList={statusList}
        //         handleStatusFilterChange={this.handleStatusFilterChange}
        //     />
        // }
        // else if (this.state.viewMode === 'table') {
        //     toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        //     viewComponent = <TradeTableView list={tradeList}
        //         loading={loading}
        //         sorted={sorted}
        //         filtered={filtered}
        //         pageSize={tablePageSize}
        //         onSortChange={this.onSortedChange}
        //         onFilteredChange={this.onFilteredChange}
        //         tradeEdit={this.tradeEdit}
        //         tradeDelete={this.tradeDelete}
        //         tradeClone={this.tradeClone}
        //         kitTypeID={this.state.KitTypeID}
        //         partnerList={partnerList}
        //         handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
        //         tpStatus={this.state.TP_Status}
        //         statusList={statusList}
        //         handleStatusFilterChange={this.handleStatusFilterChange}
        //     />
        // }
        // else if (this.state.viewMode === 'detail') {
        //     toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        //     viewComponent = <TradeDetailView itemId={this.state.tradeEdit.TP_PartID}
        //         item={this.state.tradeEdit}
        //         isNew={this.state.isNew}
        //         toggleViewMode={this.toggleViewMode}
        //         statusList={statusList}
        //         partnerList={partnerList}
        //     />;
        // }
        // else {
        //     toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        //     viewComponent = <TradeDetailViewReact itemId={this.state.tradeEdit.TP_PartID}
        //         item={this.state.tradeEdit}
        //         isNew={this.state.isNew}
        //         toggleViewMode={this.toggleViewMode} />;
        // }
        return (
            <div>
                <div className="header-icons">
                    <GridFilterPills filters={this.state.filtered} onFilterClear={this.handleFilterApply}/>
                    <div className="header-btn">
                        <FormActionGroup items={["Help", "Settings"]} onItemClick={(item)=>console.log('Action clicked was - ', item)}/>
                        <GridFilter filters={this.state.filtered} filterItems={[
                                {type:'text', label:'Trading Partner', name:"TP_Name",  placeholder:''},
                                {type:'text', label:'Qualifier', name:"TP_PartQ", placeholder:''},
                                {type:'select', label:'Partner Type', name:"KitTypeID", placeholder:'', returnType:'number',
                                    options: partnerList.map((option)=><option key={option.KitTypeID} value={option.KitTypeID}>{option.KitTypeDesc}</option>)
                                },
                                {type:'select', label:'Status', name:"TP_Status", placeholder:'',
                                    options: statusList.map((option)=><option key={option.id} value={option.id}>{option.status}</option>)
                                }
                            ]} 
                            onApply={this.handleFilterApply} 
                        />
                        {/* <IconButton className="fa fa-hel" iconText="Help"/> */}
                    </div>
                </div>
                <Media query={{ maxWidth: 768 }}>
                    {matches =>
                        matches ?
                            <TradeCardView list={tradeList}
                                tradeListCount={this.state.tradeListCount}
                                sorted={sorted}
                                toggleSortMode={this.toggleSortMode}
                                handleFilterChange={this.handleFilterChange}
                                tradeEdit={this.tradeEdit}
                                tradeDelete={this.tradeDelete}
                                tradeClone={this.tradeClone}
                                kitTypeID={this.state.KitTypeID}
                                partnerList={partnerList}
                                handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
                                tpStatus={this.state.TP_Status}
                                statusList={statusList}
                                handleStatusFilterChange={this.handleStatusFilterChange}
                            />
                            :
                            <TradeTableView list={tradeList}
                                actionMenuOpen={true}
                                actionMenuOpenFor_TP_PartID={this.state.actionMenuOpenFor_TP_PartID}
                                toggleActionMenu={(data) => {
                                    this.setState({ actionMenuOpenFor_TP_PartID: this.state.actionMenuOpenFor_TP_PartID === data.TP_PartID ? "" : data.TP_PartID });
                                    console.log('hello', data)
                                }
                                }
                                loading={loading}
                                sorted={sorted}
                                filtered={filtered}
                                pageSize={tablePageSize}
                                onSortChange={this.onSortedChange}
                                onFilteredChange={this.onFilteredChange}
                                tradeEdit={this.tradeEdit}
                                tradeDelete={this.tradeDelete}
                                tradeClone={this.tradeClone}
                                kitTypeID={this.state.KitTypeID}
                                partnerList={partnerList}
                                handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
                                tpStatus={this.state.TP_Status}
                                statusList={statusList}
                                handleStatusFilterChange={this.handleStatusFilterChange}
                            />
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
                        total={this.state.tradeListCount}
                    />
                </div>
                {/* {viewComponent} */}
                <Modal visible={(this.state.clone)}
                    title="Clone Trading Partner"
                    footer={null}
                    closable={false}
                    destroyOnClose={true}
                >
                    <TradeCloneView
                        toggleClone={this.toggleClone}
                        isNew={this.state.isNew}
                        item={this.state.tradeClone}
                    />

                </Modal>

            </div>
        )

    }
    protected toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    protected toggleViewMode() {
        if (this.state.viewMode === 'cards') {
            this.setState({ viewMode: 'table' });
        }
        else if (this.state.viewMode === 'table') {
            this.setState({ viewMode: 'detail' });
        }
        else if (this.state.viewMode === 'detail') {
            this.setState({ viewMode: 'detailReact' })
        }
        else {
            this.setState({ viewMode: 'cards' });
        }
    }

    private query() {
        const top: number = this.state.pageSize;
        const skip: number = (this.state.page - 1) * this.state.pageSize; // The pagination component is 1-based
        const filtered = this.state.filtered;
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered };
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

    private handleFilterApply(newFilter:FilterDescriptor[]){
        this.setState({filtered:cloneDeep(newFilter)}, ()=>{
            this.requery()
        })
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

    // private tradeEdit(trade: ITrade) {
    private tradeEdit(trade: CTrade) {
        this.setState({
            tradeEdit: trade,
            viewMode: "detail",
            modal: true,
            isNew: false
        });
    }

    // private tradeDelete(trade: ITrade) {
    private tradeDelete(trade: CTrade) {
        this.props.tradeDelete(trade);
    }

    // private tradeClone(trade: ITrade) {
    private tradeClone(trade: CTrade) {
        this.setState({
            tradeClone: trade,
            clone: true
        })
    }

    private toggleClone() {
        this.setState({
            clone: !this.state.clone
        });
    }
}

const mapStateToProps = ({ trade, kitType, ediDocGroupSet, tradeNetworkSet }) => {
    return { trade, kitType, ediDocGroupSet, tradeNetworkSet }
};

const mapActionsToProps = {
    tradeGetAll,
    tradeDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(TradeView);
import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import uuid from 'uuid-v4';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Pagination, Input } from 'antd';
import { tradeGetAll, tradeDelete } from './../../actions/Trade';
import { ITrade } from "../../constants/edidb";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import TradeCardView from "./TradeCardView"
import TradeTableView from "./TradeTableView"
// import FreightCodeDetailView from "./FreightCodeDetailView"

const statusList = [ { id:"I", status:"Inactive"}, { id:"P", status:"Production"}, {id:"T", status:"Test"}]

export interface ITradeViewProps {
    // redux
    trade: any,
    kitType: any,
    tradeGetAll: any,
    tradeDelete: any,
    toastError: any,
}

export interface ITradeViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    tradeEdit: {},
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
    KitTypeID: number,
    TP_Status:string
    kitTypeIDFilter:string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class TradeView extends React.Component<ITradeViewProps, ITradeViewState> {
    constructor(props: ITradeViewProps) {
        super(props)
        this.state = {
            viewMode: 'cards',
            pageSize: 10,
            page: 1,
            modal: false,
            tradeEdit:{},
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
            KitTypeID: 0,
            TP_Status:"",
            kitTypeIDFilter:""
        }
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
        else if (prevState.page !== this.state.page){
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
        const { loading, pageSize, sorted, filtered, kitTypeIDFilter } = this.state;
        const partnerList = this.props.kitType.kitTypeList;

        let { tradeList } = this.state;

        if (filtered.length > 0) {   // Filter on each column with a value
             filtered.map((column) => {
                 if(column.id==="KitTypeID")
                 {
                    tradeList = tradeList.filter(item => item[column.id]===column.value);
                 
                 }
                 else
                 {
                    tradeList = tradeList.filter(item => _.includes(item[column.id].toLowerCase(), column.value.toLowerCase()));
                 }
            });
         }

        // tradeList = tradeList.map( trade => (
        //                             {...trade, 
        //                              TP_Status: (statusList.find(item => item.id === trade.TP_Status) === undefined ? " " : 
        //                                          statusList.find(item => item.id === trade.TP_Status)!.status),
        //                              KitTypeID: (partnerList.find(partner => partner.KitTypeID === trade.KitTypeID) === undefined ? " " :
        //                                          partnerList.find(partner => partner.KitTypeID === trade.KitTypeID)!.KitTypeDesc)
        //                             }))

        // tradeList = tradeList.map( trade => ({...trade, 
        //                                       TP_Status: (statusList.filter(item => item.id === trade.TP_Status)[0] === undefined ? " "  : 
        //                                                   statusList.filter(item => item.id === trade.TP_Status)[0].status),
        //                                       KitTypeID: (partnerList.filter(partner => partner.KitTypeID === trade.KitTypeID)[0] === undefined ? " " : 
        //                                                   partnerList.filter(partner => partner.KitTypeID === trade.KitTypeID)[0].KitTypeDesc)
        //                                     }))

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            tradeList = _.orderBy(tradeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        let toggleButton;
        const tablePageSize = Math.min(tradeList.length, pageSize); // Only show rows with data in the table;

        if (this.state.viewMode === 'cards') {
            toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
        }
        else {
            toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />;
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
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            {toggleButton}
                        </FlexView>
                    </FlexView>
                </Card>
                {this.state.viewMode === 'cards' ?
                    <TradeCardView list={tradeList}
                        tradeListCount={this.state.tradeListCount}
                        sorted={sorted}
                        toggleSortMode={this.toggleSortMode}
                        handleFilterChange={this.handleFilterChange}
                        tradeEdit={this.tradeEdit}
                        tradeDelete={this.tradeDelete}
                        tradeClone={this.tradeClone}
                        statusList={statusList}
                        partnerList={partnerList}
                        kitTypeIDFilter={kitTypeIDFilter}
                        handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
                    />
                    :
                    <TradeTableView list={tradeList}
                        loading={loading}
                        sorted={sorted}
                        filtered={filtered}
                        pageSize={tablePageSize}
                        onSortChange={this.onSortedChange}
                        onFilteredChange={this.onFilteredChange}
                        tradeEdit={this.tradeEdit}
                        tradeDelete={this.tradeDelete}
                        tradeClone={this.tradeClone}
                        statusList={statusList}
                        partnerList={partnerList}
                        kitTypeIDFilter={kitTypeIDFilter}
                        handleKitTypeIDFilterChange={this.handleKitTypeIDFilterChange}
                    />
                }
                {/* <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Freight Code</ModalHeader>
                    <ModalBody>
                        <FreightCodeDetailView itemId={this.state.freightCodeEdit.Id} item={this.state.freightCodeEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
                    </ModalBody>
                </Modal> */}

            </div>
        )

    }
    protected toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    private handleKitTypeIDFilterChange(value:string) {
        this.setState({ kitTypeIDFilter: value })
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

    private toggleViewMode() {
        if (this.state.viewMode === 'cards') {
            this.setState({ viewMode: 'table' });
        }
        else {
            this.setState({ viewMode: 'cards' });
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


    private tradeEdit(trade: ITrade) {
        this.setState({
            tradeEdit: trade,
            modal: true,
            isNew: false
        });
    }

    private tradeDelete(trade: ITrade) {
        this.props.tradeDelete(trade);
    }

    private tradeClone(trade: ITrade) {
        const clone = JSON.parse(JSON.stringify(trade));
        clone.Id = uuid();
        clone.Frt_Code += "#";
        this.setState({
            tradeEdit: clone,
            modal: true,
            isNew: true
        });
    }


}

const mapStateToProps = ({ trade, kitType }) => {
    return { trade, kitType }
};

const mapActionsToProps = {
    tradeGetAll,
    tradeDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(TradeView);
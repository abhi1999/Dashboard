import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import uuid from 'uuid-v4';
import { ModalHeader, ModalBody } from 'reactstrap';
import { Modal } from 'antd';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Pagination, Input } from 'antd';
import { shipToGetAll, shipToDelete, } from './../../actions/ShipTo';
import { ToString } from '../../utils/Conversion';
import Media from "react-media";
import { Button } from 'antd';

import Trade from "../../constants/implementations/Trade";
import ShipTo from "../../constants/implementations/ShipTo";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';

// import ShipToCardView from "./ShipToCardView"
import ShipToTableView from "./ShipToTableView"
import ShipToDetailView from "./ShipToDetailView"

export interface IShipToViewProps {
    item: Trade,
    setHeaderViewMode: any,
    // redux
    shipTo_ID: any,
    shipToGetAll: any,
    shipToDelete: any,
    toastError: any,
}

export interface IShipToViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    shipToEdit: ShipTo,
    isNew: boolean,
    collapseAddNew: boolean,
    shipToList: ShipTo[],
    shipToListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
    // Filter fields
    ShipTo_ID: string,
    Description: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class ShipToView extends React.Component<IShipToViewProps, IShipToViewState> {
    constructor(props: IShipToViewProps) {
        super(props)
        this.state = {
            viewMode: 'table',
            pageSize: 10,
            page: 1,
            modal: false,
            shipToEdit: new ShipTo(),
            isNew: false,
            collapseAddNew: false,
            shipToList: [],
            shipToListCount: 0,
            loading: true,
            refresh: false,
            sorted: [{ desc: false, id: "ShipTo_ID" }],
            filtered: [],
            ShipTo_ID: "",
            Description: "",
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
        this.shipToAdd = this.shipToAdd.bind(this);
        this.shipToEdit = this.shipToEdit.bind(this);
        this.shipToDelete = this.shipToDelete.bind(this);
        this.shipToClone = this.shipToClone.bind(this);
        this.onOkDelete = this.onOkDelete.bind(this);
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
        // const tablePageSize = Math.min(Number(this.state.pageSize), Number(newProps.errorCode.errorCodeList.length));
        this.setState({
            loading: false,
            shipToList: newProps.shipTo.shipToList,
            shipToListCount: newProps.shipTo.shipToListCount,
            // tablePageSize: tablePageSize
        });
    }

    public render() {
        const { loading, pageSize, sorted, filtered, modal } = this.state;
        let { shipToList } = this.state;

        let TP_Name = "";
        if (this.props.item !== undefined) {
            TP_Name = this.props.item.TP_Name;
        }

        if (modal) {
            return (
                <ShipToDetailView 
                    TP_PartID={this.props.item.TP_PartID} 
                    TP_Name={this.props.item.TP_Name}
                    itemId={this.state.shipToEdit.Id}
                    item={this.state.shipToEdit}
                    isNew={this.state.isNew}
                    toggleModal={this.toggleModal} />
            )
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            shipToList = _.orderBy(shipToList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                shipToList = shipToList.filter(item => _.includes(ToString(item[column.id]).toLowerCase(), ToString(column.value).toLowerCase()));
            });
        }

        const tablePageSize = Math.min(shipToList.length, pageSize); // Only show rows with data in the table;

        return (
            <div>
                <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() => {
                        // this.initState();
                        this.props.setHeaderViewMode(); // return from this screen
                 }}/>
                 <Card outline={true}>&nbsp;&nbsp;{TP_Name}</Card>
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
                                total={this.state.shipToListCount}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.shipToAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />
                        </FlexView>
                    </FlexView>
                </Card>
                <Media query={{ maxWidth: 1 /* 768 */ }}>
                {matches => // Mobile version first
                     matches ?
                        {/* 
                        <ShipToCardView list={errorCodeList}
                            errorCodeListCount={this.state.errorCodeListCount}
                            sorted={sorted}
                            toggleSortMode={this.toggleSortMode}
                            handleFilterChange={this.handleFilterChange}
                            errorCodeEdit={this.errorCodeEdit}
                            errorCodeDelete={this.errorCodeDelete}
                            errorCodeClone={this.errorCodeClone}
                        />
                        */}
                        :
                        <ShipToTableView list={shipToList}
                            loading={loading}
                            sorted={sorted}
                            filtered={filtered}
                            pageSize={tablePageSize}
                            onSortChange={this.onSortedChange}
                            onFilteredChange={this.onFilteredChange}
                            shipToEdit={this.shipToEdit}
                            shipToDelete={this.shipToDelete}
                            shipToClone={this.shipToClone}
                        />
                }
                </Media>
            </div>
        )
    }

    protected toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    private query() {
        const top: number = this.state.pageSize;
        const skip: number = (this.state.page - 1) * this.state.pageSize; // The pagination component is 1-based

        let filter: FilterDescriptor; // = this.state.filtered;
        filter = new FilterDescriptor();
        filter.id = "TP_PartID";
        // = this.state.filtered;
        /*
        if (this.props.item !== undefined) { // for specific TP
            alert(JSON.stringify(this.state.filtered));                
        }
        */

        let params: ODataParams;
        
        if (this.props.item !== undefined) {
           
            let TP_PartID: string;
            TP_PartID = this.props.item.TP_PartID
            params = { top, skip, sorted: this.state.sorted, filtered: [{ "id" : "TP_PartID", "value" : TP_PartID }] }; // this.state.filtered };

        }
        else {
            params = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        }

        this.props.shipToGetAll(params);
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

    private setTableViewMode() {
        this.setState({ viewMode: 'table' });
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

    private shipToAdd() {
        this.setState({
            shipToEdit: new ShipTo({

            }),
            modal: true,
            isNew: true
        });
    }

    private shipToEdit(shipTo: ShipTo) {
        this.setState({
            shipToEdit: shipTo,
            modal: true,
            isNew: false
        });
    }

    private onOkDelete() {
        this.props.shipToDelete(this.state.shipToConfirm);
    }

    private shipToDelete(shipTo: ShipTo) {
        // this.props.shipToDelete(shipTo);

        this.setState({
            shipToConfirm: shipTo
        })

        const loc: string = 'Ship to location ' + shipTo.ShipTo_ID;

        Modal.confirm({
            title: 'Confirm Delete for:',
            content: [loc],
            onOk:  this.onOkDelete,
            onCancel() { 
                console.log('Cancel');
            },
          });
    }

    private shipToClone(shipTo: ShipTo) {
        const clone = JSON.parse(JSON.stringify(shipTo));
        clone.Id = uuid();
        clone.ErrCode += "#";
        this.setState({
            errorCodeEdit: clone,
            modal: true,
            isNew: true
        });
    }
}

const mapStateToProps = ({ shipTo }) => {
    return { shipTo }
};

const mapActionsToProps = {
    shipToGetAll,
    shipToDelete
};

export default connect(mapStateToProps, mapActionsToProps)(ShipToView);

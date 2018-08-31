import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import uuid from 'uuid-v4';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Pagination, Input } from 'antd';
import { freightCodeGetAll, freightCodeDelete } from './../../actions/FreightCode';

import FreightCode from "../../constants/implementations/FreightCode";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';

import FreightCodeCardView from "./FreightCodeCardView"
import FreightCodeTableView from "./FreightCodeTableView"
import FreightCodeDetailView from "./FreightCodeDetailView"

export interface IFreightCodeViewProps {
    // redux
    freightCode: any,
    freightCodeGetAll: any,
    freightCodeDelete: any,
    toastError: any,
}

export interface IFreightCodeViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    freightCodeEdit: FreightCode,
    isNew: boolean,
    collapseAddNew: boolean,
    freightCodeList: FreightCode[],
    freightCodeListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
    // Filter fields
    Frt_Code: string,
    Description: string,
    NMFC: string,
    HazMat: boolean,
    Sub: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class FreightCodeView extends React.Component<IFreightCodeViewProps, IFreightCodeViewState> {
    constructor(props: IFreightCodeViewProps) {
        super(props)
        this.state = {
            viewMode: 'cards',
            pageSize: 10,
            page: 1,
            modal: false,
            freightCodeEdit: new FreightCode(),
            isNew: false,
            collapseAddNew: false,
            freightCodeList: [],
            freightCodeListCount: 0,
            loading: true,
            refresh: false,
            sorted: [{ desc: false, id: "Frt_Code" }],
            filtered: [],
            Frt_Code: "",
            Description: "",
            NMFC: "",
            Class: "",
            HazMat: false,
            Sub: ""
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
        this.freightCodeAdd = this.freightCodeAdd.bind(this);
        this.freightCodeEdit = this.freightCodeEdit.bind(this);
        this.freightCodeDelete = this.freightCodeDelete.bind(this);
        this.freightCodeClone = this.freightCodeClone.bind(this);
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
        // const tablePageSize = Math.min(Number(this.state.pageSize), Number(newProps.freightCode.freightCodeList.length));
        this.setState({
            loading: false,
            freightCodeList: newProps.freightCode.freightCodeList,
            freightCodeListCount: newProps.freightCode.freightCodeListCount,
            // tablePageSize: tablePageSize
        });
    }

    public render() {
        const { loading, pageSize, sorted, filtered } = this.state;
        let { freightCodeList } = this.state;

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            freightCodeList = _.orderBy(freightCodeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                freightCodeList = freightCodeList.filter(item => _.includes(item[column.id].toLowerCase(), column.value.toLowerCase()));
            });
        }

        let toggleButton;
        const tablePageSize = Math.min(freightCodeList.length, pageSize); // Only show rows with data in the table;

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
                                pageSizeOptions={['1', '2', '3', '10', '50', '100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.freightCodeListCount}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.freightCodeAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />
                            {toggleButton}
                        </FlexView>
                    </FlexView>
                </Card>
                {this.state.viewMode === 'cards' ?
                    <FreightCodeCardView list={freightCodeList}
                        freightCodeListCount={this.state.freightCodeListCount}
                        sorted={sorted}
                        toggleSortMode={this.toggleSortMode}
                        handleFilterChange={this.handleFilterChange}
                        freightCodeEdit={this.freightCodeEdit}
                        freightCodeDelete={this.freightCodeDelete}
                        freightCodeClone={this.freightCodeClone}
                    />
                    :
                    <FreightCodeTableView list={freightCodeList}
                        loading={loading}
                        sorted={sorted}
                        filtered={filtered}
                        pageSize={tablePageSize}
                        onSortChange={this.onSortedChange}
                        onFilteredChange={this.onFilteredChange}
                        freightCodeEdit={this.freightCodeEdit}
                        freightCodeDelete={this.freightCodeDelete}
                        freightCodeClone={this.freightCodeClone}
                    />
                }
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Freight Code</ModalHeader>
                    <ModalBody>
                        <FreightCodeDetailView itemId={this.state.freightCodeEdit.Id} item={this.state.freightCodeEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
                    </ModalBody>
                </Modal>

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
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        this.props.freightCodeGetAll(params);
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

    private freightCodeAdd() {
        this.setState({
            freightCodeEdit: new FreightCode({

            }),
            modal: true,
            isNew: true
        });
    }

    private freightCodeEdit(freightCode: FreightCode) {
        this.setState({
            freightCodeEdit: freightCode,
            modal: true,
            isNew: false
        });
    }

    private freightCodeDelete(freightCode: FreightCode) {
        this.props.freightCodeDelete(freightCode);
    }

    private freightCodeClone(freightCode: FreightCode) {
        const clone = JSON.parse(JSON.stringify(freightCode));
        clone.Id = uuid();
        clone.Frt_Code += "#";
        this.setState({
            freightCodeEdit: clone,
            modal: true,
            isNew: true
        });
    }


}


const mapStateToProps = ({ freightCode }) => {
    return { freightCode }
};

const mapActionsToProps = {
    freightCodeGetAll,
    freightCodeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(FreightCodeView);
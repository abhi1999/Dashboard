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
import { errorCodeGetAll, errorCodeDelete } from './../../actions/ErrorCode';
import { ToString } from '../../utils/Conversion';
import Media from "react-media";

import ErrorCode from "../../constants/implementations/ErrorCode";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';

import ErrorCodeCardView from "./ErrorCodeCardView"
import ErrorCodeTableView from "./ErrorCodeTableView"
import ErrorCodeDetailView from "./ErrorCodeDetailView"

export interface IErrorCodeViewProps {
    // redux
    errorCode: any,
    errorCodeGetAll: any,
    errorCodeDelete: any,
    toastError: any,
}

export interface IErrorCodeViewState {
    viewMode: string,
    pageSize: number,
    page: number,
    modal: boolean,
    errorCodeEdit: ErrorCode,
    isNew: boolean,
    collapseAddNew: boolean,
    errorCodeList: ErrorCode[],
    errorCodeListCount: number,
    loading: boolean,
    sorted: SortDescriptor[],
    filtered: FilterDescriptor[],
    // Filter fields
    ErrCode: string,
    Description: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class ErrorCodeView extends React.Component<IErrorCodeViewProps, IErrorCodeViewState> {
    constructor(props: IErrorCodeViewProps) {
        super(props)
        this.state = {
            viewMode: 'cards',
            pageSize: 10,
            page: 1,
            modal: false,
            errorCodeEdit: new ErrorCode(),
            isNew: false,
            collapseAddNew: false,
            errorCodeList: [],
            errorCodeListCount: 0,
            loading: true,
            refresh: false,
            sorted: [{ desc: false, id: "ErrCode" }],
            filtered: [],
            ErrCode: "",
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
        this.errorCodeAdd = this.errorCodeAdd.bind(this);
        this.errorCodeEdit = this.errorCodeEdit.bind(this);
        this.errorCodeDelete = this.errorCodeDelete.bind(this);
        this.errorCodeClone = this.errorCodeClone.bind(this);
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
            errorCodeList: newProps.errorCode.errorCodeList,
            errorCodeListCount: newProps.errorCode.errorCodeListCount,
            // tablePageSize: tablePageSize
        });
    }

    public render() {
        const { loading, pageSize, sorted, filtered, modal } = this.state;
        let { errorCodeList } = this.state;

        if (modal) {
            return (
                <ErrorCodeDetailView itemId={this.state.errorCodeEdit.Id} item={this.state.errorCodeEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
            )
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            errorCodeList = _.orderBy(errorCodeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                errorCodeList = errorCodeList.filter(item => _.includes(ToString(item[column.id]).toLowerCase(), ToString(column.value).toLowerCase()));
            });
        }

        const tablePageSize = Math.min(errorCodeList.length, pageSize); // Only show rows with data in the table;

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
                                total={this.state.errorCodeListCount}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.errorCodeAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />
                        </FlexView>
                    </FlexView>
                </Card>
                <Media query={{ maxWidth: 768 }}>
                {matches => // Mobile version first
                     matches ?
                    
                        <ErrorCodeCardView list={errorCodeList}
                            errorCodeListCount={this.state.errorCodeListCount}
                            sorted={sorted}
                            toggleSortMode={this.toggleSortMode}
                            handleFilterChange={this.handleFilterChange}
                            errorCodeEdit={this.errorCodeEdit}
                            errorCodeDelete={this.errorCodeDelete}
                            errorCodeClone={this.errorCodeClone}
                        />
                        :
                        <ErrorCodeTableView list={errorCodeList}
                            loading={loading}
                            sorted={sorted}
                            filtered={filtered}
                            pageSize={tablePageSize}
                            onSortChange={this.onSortedChange}
                            onFilteredChange={this.onFilteredChange}
                            errorCodeEdit={this.errorCodeEdit}
                            errorCodeDelete={this.errorCodeDelete}
                            errorCodeClone={this.errorCodeClone}
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
        const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        this.props.errorCodeGetAll(params);
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

    private errorCodeAdd() {
        this.setState({
            errorCodeEdit: new ErrorCode({

            }),
            modal: true,
            isNew: true
        });
    }

    private errorCodeEdit(errorCode: ErrorCode) {
        this.setState({
            errorCodeEdit: errorCode,
            modal: true,
            isNew: false
        });
    }

    private errorCodeDelete(errorCode: ErrorCode) {
        this.props.errorCodeDelete(errorCode);
    }

    private errorCodeClone(errorCode: ErrorCode) {
        const clone = JSON.parse(JSON.stringify(errorCode));
        clone.Id = uuid();
        clone.ErrCode += "#";
        this.setState({
            errorCodeEdit: clone,
            modal: true,
            isNew: true
        });
    }
}

const mapStateToProps = ({ errorCode }) => {
    return { errorCode }
};

const mapActionsToProps = {
    errorCodeGetAll,
    errorCodeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(ErrorCodeView);

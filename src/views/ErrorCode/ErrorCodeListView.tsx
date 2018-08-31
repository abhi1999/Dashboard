import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt,FaPlusCircle,FaTimesCircle,FaEdit,FaClone,FaSort,FaSortUp,FaSortDown,FaTable,FaList } from 'react-icons/fa';
import { errorCodeGetAll, errorCodeDelete } from '../../actions/ErrorCode';
// import { toastError } from '../../actions/Service';
import ErrorCodeView from '../ErrorCode/ErrorCodeView';
import { Pagination } from 'antd';
import { Input } from 'antd';
import { ICON_SIZE, ICON_COLOR } from '../../constants/Attributes';
// import uuid from 'uuid-v4';
import { IErrorCode } from "../../constants/edidb";

class ErrorCodeListView extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize: 10,
            page: 1,
            modal: false,
            errorCodeEdit: {},
            isNew: false,
            collapseAddNew: false,
            errorCodeList: [],
            errorCodeListCount: 0,
            loading: true,
            sorted: [{desc: false, id: "ErrCode"}],
            filtered: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.errorCodeAdd = this.errorCodeAdd.bind(this);
        this.errorCodeEdit = this.errorCodeEdit.bind(this);
        this.errorCodeDelete = this.errorCodeDelete.bind(this);
        this.errorCodeClone = this.errorCodeClone.bind(this);
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
    }

    public componentWillMount() {
        this.query(1, 10);
    }

    public componentWillReceiveProps(newProps) {
        this.setState({
            loading: false,
            errorCodeList: newProps.errorCode.errorCodeList,
            errorCodeListCount: newProps.errorCode.errorCodeListCount,
          });
    }

    public render() {
        // console.log("%c ","font-size: 20px");
        const { loading, pageSize, sorted, filtered } = this.state;
        let { errorCodeList } = this.state;

        const tablePageSize = Math.min(errorCodeList.length, pageSize); // Only show rows with data in the table

        if (filtered.length > 0)
        {   // Filter on each column with a value
            filtered.map((column) =>
            {
                errorCodeList = errorCodeList.filter(item => _.includes(item[column.id].toLowerCase(), column.value.toLowerCase()));
            });
        }
    
        if (sorted.length > 0)
        {   // Implement the multi-sort with lodash
            errorCodeList = _.orderBy(errorCodeList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc")); 
        }

        let toggleButton;
        let cardHeader;
        let detailSection;

        if (this.state.viewMode === 'cards')
        {   // Conditional display elements for either cards or table view
            toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>;
                
            cardHeader =
                <FlexView width='100%' wrap={true} >
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <span/>
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder = "Code"
                            name = "ErrCode"
                            prefix = {this.getSortButton("ErrCode")}
                            value = {this.state.ErrCode}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="200" wrap={true}>
                        <Input
                            placeholder = "Desc"
                            name = "ErrDesc"
                            prefix = {this.getSortButton("ErrDesc")}
                            value = {this.state.ErrDesc}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder = "Problem"
                            name = "Problem"
                            prefix = {this.getSortButton("Problem")}
                            value = {this.state.Problem}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder = "Solution"
                            name = "Solution"
                            prefix = {this.getSortButton("Solution")}
                            value = {this.state.Solution}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder = "URL"
                            name = "URL"
                            prefix = {this.getSortButton("URL")}
                            value = {this.state.URL}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <Input
                            placeholder = "AcctPackageID"
                            name = "AcctPackageID"
                            prefix = {this.getSortButton("AcctPackageID")}
                            value = {this.state.AcctPackageID}
                            onChange = {this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="right" vAlignContent="center" grow={true} wrap={true}>
                        <span/>
                    </FlexView>
                </FlexView>
                ;
        
            detailSection = errorCodeList.map((item) =>
                <Card key={item.Id} body={true} outline={true} style={{width: '100%', marginBottom: '1px'}}>
                    <FlexView width='100%' wrap={true}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            <FaEdit onClick={() => this.errorCodeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>
                            <FaTimesCircle onClick={() => this.errorCodeDelete(item)}  size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                            <FaClone onClick={() => this.errorCodeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.ErrCode}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="200" wrap={true}>
                            {item.ErrDesc}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Problem}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Solution}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.URL}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.AcctPackageID}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" grow={true} wrap={true}>
                            <span/>
                        </FlexView>
                    </FlexView>
                </Card>
            );
        }
        else // Table Display
        {
            toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>;

            cardHeader = <span/>; // This part is blank for the table view

            detailSection =
            <ReactTable
                columns = {[
                    {
                        sortable: false,
                        filterable: false,
                        width: 120,
                        Cell: row => (
                            <div>
                                <FaEdit onClick={() => this.errorCodeEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaTimesCircle onClick={() => this.errorCodeDelete(row.original)}  size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaClone onClick={() => this.errorCodeClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                        </div>
                        )
                    },
                    {
                        Header: "Code",
                        accessor: "ErrCode"
                    },
                    {
                        Header: "Error Desc",
                        accessor: "ErrDesc",
                        minWidth: 250
                    },
                    {
                        Header: "Problem",
                        accessor: "Problem"
                    },
                    {
                        Header: "Solution",
                        accessor: "Solution"
                    },
                    {
                        Header: "URL",
                        accessor: "URL"
                    },
                    {
                        Header: "AcctPackageID",
                        accessor: "AcctPackageID"
                    },
                ]}
                manual = {false} 
                data = {errorCodeList}
                loading = {loading}
                sortable = {true}
                sorted = {sorted}
                onSortedChange = {this.onSortedChange}
                filterable = {true}
                filtered = {filtered}
                onFilteredChange = {this.onFilteredChange}
                defaultFilterMethod = {(filter, row) => String(row[filter.id]).includes(filter.value)}
                showPagination = {false}
                pageSize = {tablePageSize}
                className = "-striped -highlight"
           />
        }

        return (
            <div>
                <Card body={true} outline={true} style={{width: '100%' }}>
                    <FlexView width='100%' wrap={true} style={{marginBottom: 12}}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <FaSyncAlt onClick={() => this.requery(this.state.pageSize)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange = {this.onChangePage} 
                                current = {this.state.page}
                                pageSize = {this.state.pageSize}
                                pageSizeOptions = {['10', '50', '100']}
                                onShowSizeChange = {this.onShowSizeChange}
                                total = {this.state.errorCodeListCount}
                                />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.errorCodeAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>
                            {toggleButton}
                        </FlexView>
                    </FlexView>
                    {cardHeader}
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Error Code</ModalHeader>
                    <ModalBody>
                        <ErrorCodeView itemId={this.state.errorCodeEdit.id} item={this.state.errorCodeEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
                    </ModalBody>
                </Modal>

                {detailSection}
           </div>
        );
    }

    protected toggleModal()
    {
        this.setState({
          modal: !this.state.modal
        });
    }

    private toggleViewMode()
    {
        if (this.state.viewMode === 'cards')
        {
            this.setState({ viewMode: 'table' });
        }
        else
        {
            this.setState({ viewMode: 'cards' });
        }
    }

    private query(page, pageSize) 
    {   // We pass these arguments rather than reading them from the state, because updates to state are delayed
        const top = pageSize;
        const skip = (page - 1) * pageSize; // The pagination component is 1-based
        const params = {top, skip, sorted: this.state.sorted, filtered: this.state.filtered};
        this.props.errorCodeGetAll(params);
    }

    private requery(pageSize)
    {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private errorCodeAdd()
    {
        this.setState({
            errorCodeEdit: {
                "ErrCode": "Error Code",
                "ErrDesc": "Error Description",
                "Problem": "Problem",
                "Solution": "Solution",
                "URL": "URL",
                "AcctPackageID": "AcctPackageID",
            },
            modal: true,
            isNew: true
        });
    }

    private errorCodeEdit(errorCode)
    {
        this.setState({
            errorCodeEdit: errorCode,
            modal: true,
            isNew: false
        });      
    }

    private errorCodeDelete(errorCode)
    {
        this.props.errorCodeDelete(errorCode);    
    }

    private errorCodeClone(errorCode)
    {
        // TODO: have to change this for ErrorCode

        const clone = JSON.parse(JSON.stringify(errorCode));
        // clone.Id = uuid();
        // clone.ErrCode += "#";  
        this.setState({
            errorCodeEdit: clone,
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

    private getSortButton(columnId)
    {
        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column) => column.id === columnId);

        // This is a tri-state toggle
        if (sortedColumn.length > 0)
        {
            if (sortedColumn[0].desc)
            {
                return <FaSortDown onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
            else
            {
                return <FaSortUp onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
        }
        else
        {
            return <FaSort onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
    }

    private toggleSortMode(columnId)
    {
        let sortUpdated = [];

        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column) => column.id === columnId);

        // This is a tri-state toggle
        if (sortedColumn.length > 0)
        {
            if(sortedColumn[0].desc)
            {
                // Remove it from the array
                sortUpdated = this.state.sorted.filter((column) => column.id !== columnId);
            }
            else
            {
                // Change it to descending
                sortUpdated = this.state.sorted.filter((column) => column.id !== columnId).concat({"desc": true, "id": columnId});
            }
        }
        else
        {
            // Add it to the array as ascending (default)
            sortUpdated = this.state.sorted.concat({"desc": false, "id": columnId});
        }

        this.setState({
            sorted: sortUpdated
        });
    }

    private onSortedChange(sorted)
    {
        this.setState({sorted});
    }

    private onFilteredChange(filtered)
    {
        if (filtered.length > 0)
        {
            filtered.map((column) =>
            {
                this.setState({[column.id]: column.value});
            });
        }

        this.setState({filtered});
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

        let filterUpdated = [];

        // Get the relevant column from the filtered array
        const filteredColumn = this.state.filtered.filter((column) => column.id === columnId);

        if (filteredColumn.length > 0)
        {
            // Update the value that it is filtering on
            filterUpdated = this.state.filtered.filter((column) => column.id !== columnId).concat({"id": columnId, "value": value});
        }
        else
        {
            // Add it to the array as new
            filterUpdated = this.state.filtered.concat({"id": columnId, "value": value});
        }

        this.setState({
            filtered: filterUpdated
        });
    }
}

const mapStateToProps = ({errorCode}) => {
    return {errorCode}
};

const mapActionsToProps = {
    errorCodeGetAll,
    errorCodeDelete,
    // toastError
};

export default connect(mapStateToProps, mapActionsToProps)(ErrorCodeListView);
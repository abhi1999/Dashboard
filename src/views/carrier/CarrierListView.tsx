import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt,FaPlusCircle,FaTimesCircle,FaEdit,FaClone,FaSort,FaSortUp,FaSortDown,FaTable,FaList } from 'react-icons/fa';
import { carrierGetAll, carrierDelete } from '../../actions/Carrier';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import CarrierView from './CarrierView';
import { Pagination } from 'antd';
import { Input, Checkbox } from 'antd';
import { ICON_SIZE, ICON_COLOR } from '../../constants/Attributes';
import uuid from 'uuid-v4';
import ShipVia from "../../constants/implementations/ShipVia";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';

export interface ICarrierListViewProps
{
    // redux
    carrier:any,
    carrierGetAll:any,
    carrierDelete:any,
    toastError:any,
}

export interface ICarrierListViewState
{
    viewMode:string,
    pageSize:number,
    page:number,
    modal:boolean,
    carrierEdit:ShipVia,
    isNew:boolean,
    collapseAddNew:boolean,
    carrierList:ShipVia[],
    carrierListCount:number,
    loading:boolean,
    sorted:SortDescriptor[],
    filtered:FilterDescriptor[],
    // Filter fields
    Ship_Via_ID:string,
    Ship_Via_Name:string,
    SCAC:string,
    Ship_Via_Type:string,
    test:boolean,
    [propName: string]: any, // This is so we can set by name dynamically
}

class CarrierListView extends React.Component<ICarrierListViewProps, ICarrierListViewState> {
    
    constructor(props:ICarrierListViewProps) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize:10,
            page:1,
            modal: false,
            carrierEdit: new ShipVia(),
            isNew: false,
            collapseAddNew: false,
            carrierList: [],
            carrierListCount: 0,
            loading: true,
            sorted: [{desc: false,id: "Ship_Via_Name"}],
            filtered: [],
            Ship_Via_ID:"",
            Ship_Via_Name:"",
            SCAC:"",
            Ship_Via_Type:"",
            test:false
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
    }

    public componentWillMount() {
        this.query(1,10);
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

        if(filtered.length>0)
        {   // Filter on each column with a value
            filtered.map((column)=>
            {
                carrierList = carrierList.filter(item => _.includes(item[column.id].toLowerCase(), column.value.toLowerCase()));
            });
        }
    
        if(sorted.length>0)
        {   // Implement the multi-sort with lodash
            carrierList = _.orderBy(carrierList, sorted.map((column)=>column.id), sorted.map((column)=>column.desc?"desc":"asc")); 
        }

        let toggleButton;
        let cardHeader;
        let detailSection;
        const tablePageSize = Math.min(carrierList.length, pageSize); // Only show rows with data in the table

        if (this.state.viewMode==='cards')
        {   // Conditional display elements for either cards or table view
            toggleButton = <FaTable onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} />;
                
            cardHeader =
                <FlexView width='100%' wrap={true} >
                    <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                        <span/>
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
                        <Input
                            placeholder="Type"
                            name="Ship_Via_Type"
                            prefix={this.getSortButton("Ship_Via_Type")}
                            value={this.state.Ship_Via_Type}
                            onChange={this.handleFilterChange}
                        />
                    </FlexView>
                    <FlexView hAlignContent="right" vAlignContent="center" grow={true} wrap={true}>
                        <span/>
                    </FlexView>
                </FlexView>
                ;
        
            detailSection = carrierList.map((item) =>
                <Card key={item.Id} body={true} outline={true} >
                    <FlexView width='100%' wrap={true}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            <FaEdit onClick={() => this.carrierEdit(item)} size={ICON_SIZE} color={ICON_COLOR} />
                            <FaTimesCircle onClick={() => this.carrierDelete(item)}  size={ICON_SIZE} color={ICON_COLOR} />    
                            <FaClone onClick={() => this.carrierClone(item)} size={ICON_SIZE} color={ICON_COLOR}/>    
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Ship_Via_ID}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="200" wrap={true}>
                            {item.Ship_Via_Name}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.SCAC}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Ship_Via_Type}
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
            toggleButton = <FaList onClick={() => this.toggleViewMode()} size={ICON_SIZE} color={ICON_COLOR} />;

            cardHeader = <span/>; // This part is blank for the table view

            detailSection=
            <ReactTable
                columns={[
                    {
                        sortable: false,
                        filterable: false,
                        width: 120,
                        Cell: row => (
                            <div>
                                <FaEdit onClick={() => this.carrierEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR}/>
                                <FaTimesCircle onClick={() => this.carrierDelete(row.original)}  size={ICON_SIZE} color={ICON_COLOR}/>
                                <FaClone onClick={() => this.carrierClone(row.original)} size={ICON_SIZE} color={ICON_COLOR}/>    
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
                        accessor: "Ship_Via_Type"
                    }
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
            <div className="carrier-list-view">
                <Card body={true} outline={true} >
                    <FlexView width='100%' wrap={true} >
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <FaSyncAlt onClick={() => this.requery(this.state.pageSize)} size={ICON_SIZE} color={ICON_COLOR} />
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange={this.onChangePage} 
                                current={this.state.page}
                                pageSize={this.state.pageSize}
                                pageSizeOptions={['10','50','100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.carrierListCount}
                                />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <FaPlusCircle onClick={() => this.carrierAdd()} size={ICON_SIZE} color={ICON_COLOR} />
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

    protected toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
      }

    private toggleViewMode()
    {
        if (this.state.viewMode==='cards')
        {
            this.setState({ viewMode: 'table' });
        }
        else
        {
            this.setState({ viewMode: 'cards' });
        }
    }

    private query(page:number, pageSize:number) 
    {   // We pass these arguments rather than reading them from the state, because updates to state are delayed
        const top:number = pageSize;
        const skip:number = (page-1) * pageSize; // The pagination component is 1-based
        const params:ODataParams = {top, skip, sorted: this.state.sorted, filtered: this.state.filtered};
        this.props.carrierGetAll(params);
    }

    private requery(pageSize:number)
    {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private carrierAdd()
    {
        this.setState({
            carrierEdit:new ShipVia ({
                "Ship_Via_ID": uuid(),
                "Ship_Via_Name": "New Carrier"}),
            modal: true,
            isNew: true
        });
    }

    private carrierEdit(carrier:ShipVia)
    {
        this.setState({
            carrierEdit: carrier,
            modal: true,
            isNew: false
        });      
    }

    private carrierDelete(carrier:ShipVia)
    {
        this.props.carrierDelete(carrier);    
    }

    private carrierClone(carrier)
    {
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

    private getSortButton(columnId)
    {
        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column)=>column.id===columnId);

        // This is a tri-state toggle
        if(sortedColumn.length>0)
        {
            if(sortedColumn[0].desc)
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
        let sortUpdated:SortDescriptor[] = [];

        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column)=>column.id===columnId);

        // This is a tri-state toggle
        if(sortedColumn.length>0)
        {
            if(sortedColumn[0].desc)
            {
                // Remove it from the array
                sortUpdated = this.state.sorted.filter((column)=>column.id!==columnId);
            }
            else
            {
                // Change it to descending
                sortUpdated = this.state.sorted.filter((column)=>column.id!==columnId).concat({"desc":true,"id":columnId});
            }
        }
        else
        {
            // Add it to the array as ascending (default)
            sortUpdated = this.state.sorted.concat({"desc":false,"id":columnId});
        }

        this.setState({
            sorted: sortUpdated
        });
    }

    private onSortedChange(sorted:SortDescriptor[])
    {
        this.setState({sorted});
    }

    private onFilteredChange(filtered:FilterDescriptor[])
    {
        if(filtered.length>0)
        {
            filtered.map((column)=>
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

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }
    }

    private handleFilterChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const columnId = target.name;

        if (this!==undefined) {
            this.setState({
                [columnId]: value
            });
        }

        let filterUpdated:FilterDescriptor[] = [];

        // Get the relevant column from the filtered array
        const filteredColumn = this.state.filtered.filter((column)=>column.id===columnId);

        if(filteredColumn.length>0)
        {
            // Update the value that it is filtering on
            filterUpdated = this.state.filtered.filter((column)=>column.id!==columnId).concat({"id":columnId,"value":value});
        }
        else
        {
            // Add it to the array as new
            filterUpdated = this.state.filtered.concat({"id":columnId,"value":value});
        }

        this.setState({
            filtered: filterUpdated
        });
    }
}

const mapStateToProps = ({carrier}) => {
    return {carrier}
};

const mapActionsToProps = {
    carrierGetAll,
    carrierDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierListView);
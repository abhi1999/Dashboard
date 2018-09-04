import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { carrierGetAll, carrierDelete } from '../../actions/CarrierAction';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import CarrierView from './CarrierView';
import uuid from 'uuid-v4';
import ShipViaModel from '../../constants/implementations/ShipViaModel';
import ODataParams from '../../constants/params/oDataParams';

import {AgGridReact} from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

import { CarrierListCardItem}  from "./CarrierListCardItem";
import { carrierGet } from '../../services/Carrier';

import CarrierGridEditControl from "./CarrierGridEditControl";

import classnames from "classnames";
const PAGE_SIZE = 10
declare const window:any;

 class CarrierList extends React.Component<any, any>{
    private gridApi:any;
    private columnApi:any;

    public constructor(props){
        super(props);
        const _this = this;
        this.state={
            columnDefs:[
                {headerName: "ID", field: "Ship_Via_ID"},
                {headerName: "Carrier Name", field: "Ship_Via_Name"},
                {headerName: "SCAC", field: "SCAC"},
                {headerName: "Type", field: "Ship_Via_Type"},
                {headerName: "", field: "Ship_Via_ID",  suppressFilter:true, width:30,
                    cellRendererFramework: CarrierGridEditControl,
                    cellRendererParams: {
                        onItemEdit: (params)=>{_this.onItemEdit(params)},
                        onItemClone: (params)=>{_this.onItemClone(params)},
                        onItemDelete: (params)=>{_this.onItemDelete(params)}
                    }
                }
            ],  
            isFullWidth:false,
            modal:false,
            isNew:false,
            carrierEdit:new ShipViaModel()
        }
        this.onGridReady = this.onGridReady.bind(this);
        this.getDataSource = this.getDataSource.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.refreshGrid = this.refreshGrid.bind(this);
        this.onItemAdd = this.onItemAdd.bind(this);
        this.onItemClone = this.onItemClone.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemEdit = this.onItemEdit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    public render(){
        const _this = this;
        const gridOptions = {
            defaultColDef: {
                width: 20,
                suppressFilter: false,
                filter: 'agTextColumnFilter',
                filterParams: {
                    newRowsAction: "keep"
                }
            },
            enableFilter:true,
            enableSorting: true,
            columnDefs: this.state.columnDefs,
            enableColResize: true,
            rowModelType: 'serverSide',
            cacheBlockSize: PAGE_SIZE,
            getRowNodeId: (item) => {
                return item.Ship_Via_ID;
              },
            showToolPanel:false, 
            animateRows: true,
            floatingFilter: true,
            toolPanelSuppressRowGroups:true,
            toolPanelSuppressValues:true,
            toolPanelSuppressPivots:true,
            toolPanelSuppressPivotMode:true,
            toolPanelSuppressSideButtons:true,
            toolPanelSuppressColumnFilter:true,
            toolPanelSuppressColumnSelectAll:true,
            toolPanelSuppressColumnExpandAll:true,
            frameworkComponents: { 'fullWidthCellRenderer': CarrierListCardItem},
            fullWidthCellRendererParams:{
                onItemEdit: (params)=>{this.onItemEdit(params)},
                onItemClone:(params)=>{ this.onItemClone(params)},
                onItemDelete: (params)=>{this.onItemDelete(params)}
            },
            isFullWidthCell:(rownode)=>this.state.isFullWidth,
            fullWidthCellRenderer: "fullWidthCellRenderer",
            getRowHeight: (params)=> {
                return _this.state.isFullWidth? 100:25;
            },
            suppressCellSelection:true
        };
        return <div className="carrier-view">
            <div className="header-actions">
                <i className="fa fa-refresh" onClick={ () => { this.refreshGrid(); }}/>
                <i className={classnames("fa", {"fa-th":this.state.isFullWidth}, {"fa-list":!this.state.isFullWidth})} onClick={ () => { this.toggleViewMode(); }}/>
            </div>
            <div style={{height: 600, marginTop: 15, width:"100%"}} className="ag-theme-balham ">
                <AgGridReact
                    {...gridOptions}
                    onGridReady={this.onGridReady}
                    />
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Carrier</ModalHeader>
                    <ModalBody>
                        <CarrierView itemId={this.state.carrierEdit.Id} item={this.state.carrierEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
                    </ModalBody>
            </Modal>
        </div>
    }
    protected toggleModal() {
        if(this.state.modal){
            this.refreshGrid();
        }
        this.setState({
          modal: !this.state.modal
        });
      }
    private onGridReady(params){
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
        params.api.setServerSideDatasource(this.getDataSource());
    }
    private onItemAdd(){
        this.setState({
            carrierEdit:new ShipViaModel ({
                "Ship_Via_ID": uuid(),
                "Ship_Via_Name": "New Carrier"}),
            modal: true,
            isNew: true
        });
    }
    private onItemEdit(data){
        this.setState({
            carrierEdit: data,
            modal: true,
            isNew: false
        });
    }
    private onItemClone(data){
        const clone = JSON.parse(JSON.stringify(data));
        clone.Id = uuid();
        clone.Ship_Via_ID += "#";  
        this.setState({
            carrierEdit: clone,
            modal: true,
            isNew: true
        });
        console.log('clone', data)
    }
    private onItemDelete(data){
        this.props.carrierDelete(data);
        this.refreshGrid();
    }
    private getDataSource(){
        const dataSource ={
            getRows:(params)=>{
                console.log('grid request params', params)
                const startRow = params.request.startRow;
                const endRow = params.request.endRow;
                const pageSize = endRow-startRow; // 50;
                const top:number = pageSize;
                const skip:number = startRow; // (page-1) * pageSize; // The pagination component is 1-based
                const sortModel = params.request.sortModel.map(m=> {const retObj= {"id":m.colId, "desc":m.sort === "desc"}; return retObj;})
                const defaultSort = [{desc: false,id: "Ship_Via_Name"}];
                const filtered:any[]=[];
                for(const key in params.request.filterModel) {
                    if(params.request.filterModel[key]!== undefined){
                        filtered.push({id:key, value:params.request.filterModel[key].filter})
                    }
                }
                const queryParam:ODataParams = {top, skip, sorted:sortModel.length===0?defaultSort:sortModel, filtered};
                carrierGet(queryParam).then(
                    res=>{ 
                        params.successCallback(res.data.value, res.data["@odata.count"])
                    }).catch(e=> params.failCallback())
            }
        };
        return dataSource;
    }
    private toggleViewMode(){
       this.setState({isFullWidth: !this.state.isFullWidth}, ()=>{ 
            this.gridApi.purgeServerSideCache();
            /* Need to figure out if there is a better way to refresh the view
            this.gridApi.resetRowHeights()

            this.gridApi.forEachNode(rowNode => {
                if (rowNode.data) {
                    console.log(rowNode.rowHeight)
                    if(rowNode.rowHeight !== 100){
                        rowNode.setRowHeight(100);
                    }
                    else {
                        rowNode.setRowHeight(25);
                    }   
                }
              });
              this.gridApi.onRowHeightChanged();
              */
        })
        
    }
    private refreshGrid(){
        if(this.gridApi){
            this.gridApi.purgeServerSideCache()
        }
        
    }
}

const mapStateToProps = ({carrier}) => {
    return {carrier}
};

const mapActionsToProps = {
    carrierGetAll,
    carrierDelete,
    toastError,
    carrierGet
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierList);
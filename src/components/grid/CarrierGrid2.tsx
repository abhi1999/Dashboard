import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import * as React from 'react';

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-fresh.css";

interface ICarrierGridProps{
    loading:boolean,
    rows:any[],
    totalPages:number,
    loadCarriersData:(pageSize?:number, page?:number, sorted?:any[], filtered?:any[])=>Promise<any>
}
class CarrierGrid2 extends React.Component<ICarrierGridProps> {
    private gridApi:any;
    private columnApi:any;
    constructor(props){
        super(props);
        this.onGridReady = this.onGridReady.bind(this);
    }
    public componentWillReceiveProps(props){
        if(this.gridApi) {
            this.gridApi.setRowData(props.rows);
        }
    }
    public render() {
        console.log('in render', this.props.rows)
        return (
            <div style={{height: 400, width: 900, marginTop: 15}} className="ag-fresh">
                <AgGridReact 
                    columnDefs={this.columnConfig()}
                    enableColResize={true}
                    enableFilter={true}
                    enableSorting={true}
                    pagination={false}
                    paginationPageSize={10}
                    // events
                    onGridReady={this.onGridReady}/>   
            </div>
        );
    }
    private onGridReady(params){
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.setRowData(this.props.rows);
        this.gridApi.sizeColumnsToFit();
        this.gridApi.showLoadingOverlay();
        this.props.loadCarriersData(1000).then(()=>{
            this.gridApi.hideOverlay();
        })
    }
    private columnConfig():any[]{
    // TODO this should be externalized
    return [
          {
            editable:true, enableRowGroup:true, field: "Ship_Via_ID", headerName: "ID", width:100, 
          },
          {
            editable:true, field: "Ship_Via_Name", headerName: "Carrier Name", width:250,
          },
          {
            editable:true, enableRowGroup:true, field: "SCAC", headerName: "SCAC",
          },
          {
            editable:true, field: "Ship_Via_Type", headerName: "Type",
          },
          {
            editable:true, field: "User1", headerName: "User1",
          },
          {
            editable:true, field:"User2", headerName: "User2",
          },
          {
            editable:true, field: "User3", headerName: "User3",
          },
          {
            editable:true, field: "User4", headerName: "User4",
          },
          {
            editable:true, field: "User5", headerName: "User5",
          }
      ]
    }
}

export default CarrierGrid2;

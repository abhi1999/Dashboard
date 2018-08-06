import "ag-grid-enterprise";
import {AgGridReact} from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';
import {GetFields} from "../../utils/"

interface IGridViewProps{
    data:any[]
    groupField?:string
}

class GridView extends React.Component<IGridViewProps, any>{
    private gridApi:any;
    private columnApi:any;
    public constructor(props) {
        super(props);
        this.onGridReady = this.onGridReady.bind(this);
    }
<<<<<<< HEAD
=======
    /*public render1(){
        const {data} = this.props;
        const headers:any =this.getHeaders(data);
        return <Table>
                <thead>
                    <tr>
                        {headers.map(h=><th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((r,i)=><tr key={i}> {headers.map(h=><td key={h}>{r[h]}</td>)} </tr>)}
                </tbody>
            </Table>
    }*/
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
    public render(){
        const {data} = this.props;
        const columnDefs:any[] =[];
        GetFields(data).forEach((h)=>{
            const col:any ={"field":h, enableRowGroup:true}
            if(h === this.props.groupField) {col.rowGroup=true;col.hide=true;}
            columnDefs.push(col)
        })
        return <div style={{height: 600, width: "95%", marginTop: 15}} className="ag-theme-balham">
                <AgGridReact
                    animateRows={true}
                    columnDefs={columnDefs}
                    enableColResize={true}
                    enableFilter={true}
                    enableSorting={true}
                    rowData={this.props.data}
                    onGridReady={this.onGridReady}
                    />
            </div>
    }
    private onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
        // this.gridApi.setRowData(this.props.data)
    }
}
export default GridView;

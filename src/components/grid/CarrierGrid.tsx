import * as React from 'react';
import ReactTable from "react-table";
import AddEditItem from './../form/AddEditItem'

interface ICarrierGridProps{
    loading:boolean,
    rows:any[],
    totalPages:number,
    addUpdateDeleteCarrierItem:(data:any, mode:string)=>{}
    loadCarriersData:(pageSize?:number, page?:number, sorted?:any[], filtered?:any[])=>Promise<any>
}
interface ICarrierGridState{
    editRowIndex?:number,
    expanded?:any
}
class CarrierGrid extends React.Component<ICarrierGridProps, ICarrierGridState> {
    constructor(props){
        super(props);
        this.state = {
            editRowIndex:undefined
        }
    }
    public componentDidMount(){
        // to do something
    }
    public componentWillReceiveProps(next){
        console.log(next);
    }
    public render() {
        const tableConfiguration= {
            SubComponent:(row)=> {
                console.log('here', row)
                return (
                  <div style={{ padding: "20px" }}>
                    <AddEditItem item={row.original} addUpdateDeleteCarrierItem={this.props.addUpdateDeleteCarrierItem}/>
                  </div>
                );
            },
            className:"-striped -highlight",
            columns:this.columnConfig(),
            data: this.props.rows,
            defaultPageSize:10,
            defaultSorted:[
                {
                    desc: false,
                    id: "Ship_Via_Name"
                }
            ],
            filterable:true,
            loading:this.props.loading,
            manual:true,
            onFetchData:this.fetchData.bind(this),
            pages: this.props.totalPages
        }
        return (
            <div>
                <ReactTable {...tableConfiguration}/>   
            </div>
        );
    }
    private columnConfig():any[]{
        return [
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
          },
          {
              Header: "User1",
              accessor: "User1"
          },
          {
              Header: "User2",
              accessor: "User2"
          },
          {
              Header: "User3",
              accessor: "User3"
          },
          {
              Header: "User4",
              accessor: "User4"
          },
          {
              Header: "User5",
              accessor: "User5"
          }
        ]
    }
    private fetchData(girdState){
        this.props.loadCarriersData(girdState.pageSize,
            girdState.page,
            girdState.sorted,
            girdState.filtered);
    }
}

export default CarrierGrid;

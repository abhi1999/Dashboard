import "ag-grid-enterprise";
import {AgGridReact} from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Collapse, Fade, Row, Table } from 'reactstrap';
import {GetFields} from "../../utils/"

interface IProcessStepCardProps{
    item:any
}

class ProcessStepCard extends React.Component<IProcessStepCardProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {item} = this.props;
        return <Card key={item.ControlID} body={true} outline={true} style={{
                    borderColor: this.getHexColor(item.GroupColor),
                    borderStyle:"solid",
                    borderWidth: '5px 1px 1px 1px',
                    marginBottom: "30px",
                    textAlign: "center",
                }}>
                <CardTitle style={{fontSize:12}}>{item.Title}</CardTitle>
            </Card>
    }
   private getHexColor(nonHexColor:string){
        return "#" +nonHexColor.substring(nonHexColor.length-6,nonHexColor.length)  
   }
}
export default ProcessStepCard;

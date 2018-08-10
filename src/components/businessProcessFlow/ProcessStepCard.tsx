import "ag-grid-enterprise";
import {AgGridReact} from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import classnames from 'classnames';
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader,CardSubtitle, CardText, CardTitle,  Col, Collapse, Fade, Row, Table } from 'reactstrap';

interface IProcessStepCardProps{
    item:any
}

class ProcessStepCard extends React.Component<IProcessStepCardProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {item} = this.props;
        return <Card key={item.ControlID}  outline={true} style={{
                    borderColor: this.getHexColor(item.GroupColor),
                    borderStyle:"solid",
                    borderWidth: '5px 1px 1px 1px',
                    textAlign: "center",
                }}>
                <CardTitle>
                    <div className="card-header-actions">
                    {
                        <a className="card-header-action btn"><i className={classnames("fa fa-star-o")}/></a>
                    }
                    </div>
                </CardTitle>
                <CardBody>
                <CardText style={{fontSize:12}}>{item.Title}</CardText>
                </CardBody>
            </Card>
    }
   private getHexColor(nonHexColor:string){
        return "#" +nonHexColor.substring(nonHexColor.length-6,nonHexColor.length)  
   }
}
export default ProcessStepCard;

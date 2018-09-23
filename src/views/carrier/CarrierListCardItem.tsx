import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from "classnames";

import { Badge, Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Col, Collapse, Fade, Row, Table, Label } from 'reactstrap';

import CarrierGridEditControl from "./CarrierGridEditControl";


export class CarrierListCardItem extends React.Component<any, any> {
    public constructor(props?) {
        super(props);
        if(props.reactContainer!== undefined){
            props.reactContainer.style.display = "inline-block";
            props.reactContainer.style.height = "100%";
            props.reactContainer.style.width = "100%";
            props.reactContainer.style.overflowY = "auto";
            props.reactContainer.style.overflowX = "hidden";
        }
    }
    public componentDidMount() {
        // to allow for inner scrolling
        /*
        const obj:any = ReactDOM.findDOMNode(this);
        if(obj !== undefined && obj !== null){
            obj.addEventListener('mousewheel', (event) => {
                event.stopPropagation();
            }, false);
        }
        */
    }
    public render() {
        const {data} = this.props;
        return (
            <Card outline={false}>
                <CardHeader>
                {data.Ship_Via_Name}
                    <div className="card-header-actions">
                        <CarrierGridEditControl {...this.props}/>
               </div> 
                </CardHeader>
                <CardBody>
                    <div>
                        <Label>ID:</Label> &nbsp;<Label>{data.Ship_Via_ID}</Label>
                    </div>
                    <div>
                        <Label>SCAS:</Label> &nbsp;<Label>{data.SCAS}</Label>
                    </div>
                    <div>
                        <Label>Type:</Label> &nbsp;<Label>{data.Ship_Via_Type}</Label>
                    </div>
                </CardBody>
            </Card>
        );
    }
};
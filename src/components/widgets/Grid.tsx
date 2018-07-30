import classnames from "classnames";
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';
import DashboardContainer from "./DashboardContainer"
interface IGridProps{
    children?:any;
    headerTitle?:string
    data?:any[]
    gridProps?:any
}
interface IGridState{
    data?:any
}
class GridContainer extends React.Component<IGridProps, IGridState>{
    private containerRef:any;
    public constructor(props) {
        super(props);
        this.state = {
        };
    }
    public render(){
        return <Card>
                <CardHeader/>
                <CardBody>
                    {this.props.children}
                </CardBody>
            </Card>
            
    } 
}

export default GridContainer;

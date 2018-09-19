import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';
import {GetFields} from "../../utils/"
import Chart from "../charts"
import AlertViewToggle from "./AlertViewToggle"

const presets:string[] = ["Pie", "Doughnut", "Bar", "Table"];
const defaultSelected:string = "Doughnut";
interface IAlertViewState{
    isOpen: boolean
    selected:string
}
interface IAlertViewProps{
    alertId:string;
    data:any;
}
class AlertView extends React.Component<IAlertViewProps, IAlertViewState>{
    public constructor(props) {
        super(props);
        this.state={isOpen:false, selected:defaultSelected}
        this.renderChart = this.renderChart.bind(this);
    }
    public render(){
        return <React.Fragment>
            {this.renderChart()}
            <AlertViewToggle defaultSelection={defaultSelected} presets={presets} onChange={(selected)=>{this.setState({selected})}}/>
        </React.Fragment>
    }
    private renderChart(){
        switch(this.state.selected){
            case "Pie":
            case "Doughnut":
                return <Chart data={this.props.data} type={this.state.selected}/>;
            case "Bar":
                return <Chart data={this.props.data} type={"HorizontalBar"}/>;
            case "Table":
                const headers = GetFields(this.props.data);
                return <Table>
                            <tbody>
                                {this.props.data.map((r,i)=><tr key={i}>{headers.map(h=><td key={h}>{r[h]}</td>)}</tr>)}
                            </tbody>
                        </Table>
            default:
                return <div>default - {this.state.selected}</div>
        }
    }
}
export default AlertView;
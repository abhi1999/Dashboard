import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';
import {GetFields} from "../../utils/"
import Chart from "../charts"
import AlertViewToggle from "./AlertViewToggle"

<<<<<<< HEAD
const presets:string[] = ["Pie", "Doughnut", "Bar", "Table"];
const defaultSelected:string = "Doughnut";
=======
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
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
<<<<<<< HEAD
        this.state={isOpen:false, selected:defaultSelected}
=======
        this.state={isOpen:false, selected:"Pie"}
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
        this.renderChart = this.renderChart.bind(this);
    }
    public render(){
        return <React.Fragment>
            {this.renderChart()}
<<<<<<< HEAD
            <AlertViewToggle defaultSelection={defaultSelected} presets={presets} onChange={(selected)=>{this.setState({selected})}}/>
=======
            <AlertViewToggle selected="Pie" presets={["Pie", "Doughnut", "Bar", "Table"]} onChange={(selected)=>{this.setState({selected})}}/>
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
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
<<<<<<< HEAD
                                {this.props.data.map((r,i)=><tr key={i}>{headers.map(h=><td key={h}>{r[h]}</td>)}</tr>)}
=======
                                {this.props.data.map((r,i)=><tr key={i}> {headers.map(h=><td key={h}>{r[h]}</td>)} </tr>)}
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
                            </tbody>
                        </Table>
            default:
                return <div>default - {this.state.selected}</div>
        }
    }
}
export default AlertView;
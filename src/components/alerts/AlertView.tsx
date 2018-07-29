import * as  React from 'react';
import * as P from "./../charts"
import Pie from "./../charts/Pie"
import AlertViewToggle from "./AlertViewToggle"

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
        this.state={isOpen:false, selected:"Pie"}
        this.renderChart = this.renderChart.bind(this);
    }
    public render(){
        return <React.Fragment>
            {this.renderChart()}
            <AlertViewToggle selected="Pie" presets={["Pie", "Line", "Table"]} onChange={(selected)=>{this.setState({selected})}}/>
        </React.Fragment>
    }
    private renderChart(){
        switch(this.state.selected){
            case "Pie":
                return <Pie data={this.props.data}/>;
            default:
                return <div>default - {this.state.selected}</div>
        }
    }
}
export default AlertView;
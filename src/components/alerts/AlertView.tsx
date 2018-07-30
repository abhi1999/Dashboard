import * as  React from 'react';
import Chart from "./../charts"
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
            <AlertViewToggle selected="Pie" presets={["Pie", "Bar", "Table"]} onChange={(selected)=>{this.setState({selected})}}/>
        </React.Fragment>
    }
    private renderChart(){
        switch(this.state.selected){
            case "Pie":
                return <Chart data={this.props.data} type={this.state.selected}/>;
            case "Bar":
                return <Chart data={this.props.data} type={"HorizontalBar"}/>;

            default:
                return <div>default - {this.state.selected}</div>
        }
    }
}
export default AlertView;
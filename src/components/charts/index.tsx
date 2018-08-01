import * as  React from 'react';
import { Bar, Doughnut, HorizontalBar, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import {ChartBackgroundColors, ChartOptions} from "./../../configs/chartOptions"

interface IChartProps{
   data?:any[],
   chartOptions?:any;
   chartSettings?:any,
   chartData?:any
   type?:string
}
interface IChartState{
   data:any
}
class Chart extends React.Component<IChartProps, IChartState>{
    constructor(props){
        super(props);
        this.state = {data:this.getChartData(props)}
        this.renderChart = this.renderChart.bind(this);
    }
    public componentWillReceiveProps(nextProps){
      this.setState({data: this.getChartData(nextProps)})
    }
    public render(){
        return <div>
                {this.state.data ? 
                  <div className="chart-wrapper">
                    {this.renderChart()}
                  </div>
                  : <span>No Data found</span>}
            </div>
    }
    private renderChart(){
        const type = this.props.type ? this.props.type : ""; 
        switch(type.toLowerCase()){
            case "bar":
                return <Bar data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}} />;
            case "doughnut":
                return <Doughnut data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}} />;
            case "polar":
                return <Polar data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}} />;
            case "radar":
                return <Radar data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}} />;
            case "line":
                return <Line data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}}  />;
            case "horizontalbar":
                return <HorizontalBar data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}}  />;
            case "pie":
            default:
                return <Pie data={this.state.data} options={{...ChartOptions,...this.props.chartOptions}} />

        }
    }
    private getChartData(props){
      const {data, chartData} = props
      if(chartData !== undefined ){
        return chartData;
      }
      const singleSeriesData:any = { datasets:[{ backgroundColor:ChartBackgroundColors, data:[], hoverBackgroundColor:ChartBackgroundColors}], labels:[]}
      if(props.data && props.data.length>0){
        data.forEach((item:any)=>{ singleSeriesData.datasets[0].data.push(item.value); singleSeriesData.labels.push(item.label)})
        return singleSeriesData;
      }
      return undefined;
    }
}

export default Chart;

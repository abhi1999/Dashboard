import * as  React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {ChartBackgroundColors, ChartOptions} from "./../../configs/chartOptions"

interface IPieComponentProps{
   data?:any[]
}
interface IPieComponentState{
   pieData:any
}
class PieComponent extends React.Component<IPieComponentProps, IPieComponentState>{
    constructor(props){
        super(props);
        this.state = {pieData:this.getPieData(props)}
    }
    public componentWillReceiveProps(nextProps){
      this.setState({pieData: this.getPieData(nextProps)})
    }
    public render(){
        return <div>
                {this.state.pieData ? 
                  <div className="chart-wrapper">
                    <Pie data={this.state.pieData} options={ChartOptions}/>
                  </div>
                  : <span>No Data found</span>}
            </div>
    }
    private getPieData(props){
      const data:any = { datasets:[{ backgroundColor:ChartBackgroundColors, data:[], hoverBackgroundColor:ChartBackgroundColors}], labels:[]}
      if(props.data && props.data.length>0){
        props.data.forEach((item:any)=>{ data.datasets[0].data.push(item.value); data.labels.push(item.label)})
        return data;
      }
      return undefined;
    }
}

export default PieComponent;

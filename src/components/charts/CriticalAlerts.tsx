import * as  React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


const options = {
  legend:{
    display:false
  },
  maintainAspectRatio: false,
  tooltips: {
      custom: CustomTooltips,
      enabled: false,
    },
    
  }
  const pie = {
    datasets: [
      {
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#000000',
          '#111111'
        ],
        data: [300, 50, 100],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#000000',
          '#111111'
        ],
        label:'series1',
      }],
      labels: [
        'ALert 1',
        'Alert 2',
        'Alert 3',
        'Alert 4'
      ],
  };
interface ICriticalAlertsProps{
   data?:any[]
}
interface ICriticalAlertsState{
   pieData:any
}
class CriticalAlerts extends React.Component<ICriticalAlertsProps, ICriticalAlertsState>{
    private initalShowCount:number= 3;
    constructor(props){
        super(props);
        this.state = {pieData:this.getPieData(props)}
        
    }
    public componentWillReceiveProps(nextProps){
      this.setState({pieData: this.getPieData(nextProps)})
    }
    public render(){
        return <div>
                <div className="chart-wrapper">
                <Pie data={pie} options={options}/>
              </div>
            </div>
    }
    private getPieData(props){
      if(props.data){
        const data:any = {datasets:{ backgroundColor:this.getBackgroudColors(), data:[], hoverBackgroundColor:this.getBackgroudColors()}, labels:[]}
        props.data.forEach((item:any)=>{ data.datasets.data.push(item.value); data.labels.push(item.lablel)})
        return pie
      }
      return pie;
    }
    private getBackgroudColors(){
      return ['#3366CC',
      '#DC3912',
      '#FF9900',
      '#109618',
      '#990099',
      '#3B3EAC',
      '#0099C6',
      '#DD4477',
      '#66AA00',
      '#B82E2E',
      '#316395',
      '#994499',
      '#22AA99',
      '#AAAA11',
      '#6633CC',
      '#E67300',
      '#8B0707',
      '#329262',
      '#5574A6',
      '#3B3EAC',
      ]
    }
}

export default CriticalAlerts;
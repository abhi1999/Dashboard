import * as  React from 'react';
 import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
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
        ],
        data: [300, 50, 100],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
      ],
  };
interface ICriticalAlertsProps{
   a?:number
}
interface ICriticalAlertsState{
   n?:number
}
class CriticalAlerts extends React.Component<ICriticalAlertsProps, ICriticalAlertsState>{
    private initalShowCount:number= 3;
    constructor(props){
        super(props);
    }
    public render(){
        return <div>
                <div className="chart-wrapper">
                <Pie data={pie} options={options}/>
              </div>
            </div>
    }

}

export default CriticalAlerts;

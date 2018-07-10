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
  
const radar = {
  datasets: [
    {
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
      label: 'Exception by Process',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
    },
  ],
  labels: ['Type 1', 'Type 2', 'Type 3', 'Quote', 'Bill', 'Proposal', 'Something Else'],
};

interface IDocReceivedProps{
   a?:number
}
interface IDocReceivedState{
   n?:number
}
class DocReceived extends React.Component<IDocReceivedProps, IDocReceivedState>{
    private initalShowCount:number= 3;
    constructor(props){
        super(props);
    }
    public render(){
        return <div>
                <div className="chart-wrapper">
                <Radar data={radar} options={options} />
              </div>
            </div>
    }

}

export default DocReceived;

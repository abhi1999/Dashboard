import * as  React from 'react';
import {HorizontalBar, Line} from 'react-chartjs-2';
import {ChartBackgroundColors, ChartOptions} from "./../../configs/chartOptions"
import DashboardContainer from "./../widgets/DashboardContainer"

interface ITopErrorsProps{
    topErrors:any[]
}
class TopErrors extends React.Component<ITopErrorsProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {topErrors} = this.props
        return <React.Fragment>
           <DashboardContainer colSize={4} headerTitle={"Exceptions By Process"}> 
                <HorizontalBar data={this.getChartData(topErrors)} options={ChartOptions}/>
            </DashboardContainer>
        </React.Fragment>
    }
    private getChartData(topErrors){
        const data:any = { datasets:[{ backgroundColor:ChartBackgroundColors, data:[], hoverBackgroundColor:ChartBackgroundColors}], labels:[]}
        if(topErrors){
            topErrors.forEach(e=>{
                data.datasets[0].data.push(e.Count); data.labels.push(e.LogProcess)
            })
        }
        return data;
    }
}

export default TopErrors;

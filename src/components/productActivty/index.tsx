import * as  React from 'react';
import { Bar, Doughnut, HorizontalBar, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import {ChartBackgroundColors, ChartOptions} from "./../../configs/chartOptions"
import {TransformToMultiSeriesChartData} from "./../../utils";
import {DashboardContainer, LoadingOrErrorComponent} from "./../widgets";
interface IProductActivitySummaryProps{
    loading:boolean,
    error:boolean,
    productActivitySummary:any
}
class ProductActivitySummary extends React.Component<IProductActivitySummaryProps, any>{
    private counter:number=0;
    public constructor(props) {
        super(props);
    }
    public render(){
        const {productActivitySummary} = this.props
        return <React.Fragment>
<<<<<<< HEAD
            <DashboardContainer colSize={6} headerTitle={"Product Activity Summary"}> 
=======
            <DashboardContainer colSize={4} headerTitle={"Product Activity Summary"}> 
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
            <LoadingOrErrorComponent {...this.props}/>
            {
                (this.props.loading || this.props.error)? "": <Bar data={this.getData(this.props.productActivitySummary)} />
            }
            </DashboardContainer>
        </React.Fragment>
    }
    private getData(data){
        return TransformToMultiSeriesChartData(data,"Year","Name", "Total")
        /*
        const datasets:any[] = []; 
        const labels:string[]=[]
        data.forEach(item=>{
            if(labels.find(l=> l===item.Year) === undefined){
                labels.push(item.Year);
            }
            if(datasets.find(c=> c.label === item.Name) === undefined) {
                const color = this.getNextColor();
                datasets.push({
                    backgroundColor: color,// 'rgba(75,192,192,0.4)',
                    borderCapStyle: 'butt',
                    borderColor: color,//  'rgba(75,192,192,1)',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    data:[],
                    fill: false,
                    label:item.Name, 
                    lineTension: 0.1,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: color,// 'rgba(75,192,192,1)',
                    pointBorderWidth: 1,
                    pointHitRadius: 10,
                    pointHoverBackgroundColor: color,//  'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    spanGaps:true,
                })
            }
        })
        labels.forEach((l)=>{
            datasets.forEach((d)=>{
                const datapoint = data.find(item=> item.Name === d.label && item.Year === l )
                d.data.push(datapoint=== undefined?NaN: datapoint.Total)
            })
        })
        return {datasets, labels}
        */
    }
    private getNextColor(){
        let color="#000";
        if(this.counter >= ChartBackgroundColors.length){
            this.counter =0;
        }
        color = ChartBackgroundColors[this.counter];
        this.counter++
        return color;
    }
}

export default ProductActivitySummary;

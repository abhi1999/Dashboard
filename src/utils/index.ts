import {ChartBackgroundColors, ChartOptions} from "./../configs/chartOptions";

export const GetFields = (data:any[])=>{
    const headers:any =[];
    if(data && data.length> 0){
        for(const key in data[0]){
            if(data[0].hasOwnProperty(key)){
                headers.push(key)
            }
        }
    }
    return headers;
}
export const TransformToMultiSeriesChartData = (data:any[], labelField:string, datasetField:string, valueField:string)=>{
    const datasets:any[] = []; 
    const labels:string[]=[]
    let counter =0;
    data.forEach(item=>{
        if(labels.find(l=> l===item[labelField]) === undefined){
            labels.push(item[labelField]);
        }
        if(datasets.find(c=> c.label === item[datasetField]) === undefined) {
            const colorValue = getNextColor(counter);
            counter = colorValue.counter;
            const color = colorValue.color;
            datasets.push({
                backgroundColor: color,// 'rgba(75,192,192,0.4)',
                borderCapStyle: 'butt',
                borderColor: color,//  'rgba(75,192,192,1)',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                data:[],
                fill: false,
                label:item[datasetField], 
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
            const datapoint = data.find(item=> item[datasetField] === d.label && item[labelField] === l )
            d.data.push(datapoint=== undefined?NaN: datapoint[valueField])
        })
    })
    return {datasets, labels}
}
const getNextColor=(originalCounter:number)=>{
    let color="#000"; let counter = originalCounter;
    if(counter >= ChartBackgroundColors.length){
       counter =0;
    }
    color = ChartBackgroundColors[counter];
    counter ++;
    return {color, counter};
}
import * as  React from 'react';
import {TransformToMultiSeriesChartData} from "./../../utils";
import Charts from "./../charts";
import {DashboardContainer, LoadingOrErrorComponent} from "./../widgets";

interface ITopErrorsProps{
    docReceivedByType:any[],
    loading:boolean,
    error:boolean
}
class DocsByType extends React.Component<ITopErrorsProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {docReceivedByType} = this.props
        return <React.Fragment>
            <DashboardContainer colSize={4} headerTitle={"Documents Received by Type"}> 
            <LoadingOrErrorComponent {...this.props}/>
            {
                (this.props.loading || this.props.error)? "": <Charts chartData={this.getData(docReceivedByType)} chartOptions={{legend:{display:true, position:'top'}}} type="bar"/>
            }
            </DashboardContainer>
        </React.Fragment>
    }
    private getData(docReceivedByType){
        return TransformToMultiSeriesChartData(docReceivedByType, "Mdate","Doc_Desc","Count" );
        // return docReceivedByType.map(e=>({label:e.Mdate, value:e.Count}));
    }
}

export default DocsByType;

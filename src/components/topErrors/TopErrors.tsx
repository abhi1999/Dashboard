import * as  React from 'react';
import Charts from "./../charts";
import {DashboardContainer, LoadingOrErrorComponent} from "./../widgets";

interface ITopErrorsProps{
    topErrors:any[],
    loading:boolean,
    error:boolean
}
class TopErrors extends React.Component<ITopErrorsProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {topErrors} = this.props
        return <React.Fragment>
            <DashboardContainer colSize={4} headerTitle={"Exceptions By Process"}> 
            <LoadingOrErrorComponent {...this.props}/>
            {
                (this.props.loading || this.props.error)? "": <Charts data={this.getData(topErrors)} type="HorizontalBar" chartPresets={["Pie", "Bar","HorizontalBar" ]}/>
            }
            </DashboardContainer>
        </React.Fragment>
    }
    private getData(topErrors){
        return topErrors.map(e=>({label:e.LogProcess, value:e.Count}));
    }
}

export default TopErrors;

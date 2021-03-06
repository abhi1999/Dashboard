import _ from "lodash";
import * as  React from 'react';
import CardView from "./CardView";
interface IBusinessProcessFlowViewProps{
    dashboardMenuItemDetails:any[]
    dashboardMenuItems:any[]
    error:boolean,
    loading:boolean
    match:any
}

class BusinessProcessFlowView extends React.Component<IBusinessProcessFlowViewProps, any>{
    public constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.getGroupedData = this.getGroupedData.bind(this);
        this.getChartData = this.getChartData.bind(this);
        this.getPageTitle = this.getPageTitle.bind(this);
        console.log(this.props.match.params.ShortCutID)
    }
 
    public render(){
        return <div className="process-flow"> 
              <CardView data={this.getData()}/>  
        </div>
    }
    /* {this.props.loading || this.props.error || this.getData().length === 0? "":
        <GridContainer>
            <GridView data={this.getData()} />
        </GridContainer>    
    }*/
    private getData(){
        const {dashboardMenuItemDetails, match} = this.props;
        const data = dashboardMenuItemDetails.find(i=> i.ShortCutID.toString() === match.params.ShortCutID)
        return data && data.values ? data.values : [];
    }
    private getGroupedData(){
        const data = _.sortBy(this.getData(),"GroupOrder");
        const groupedData:any ={};
        data.forEach(element => {
            if(groupedData[element.GroupName] === undefined){
                groupedData[element.GroupName] = [];
            }
            groupedData[element.GroupName].push({...element});
        });
        return groupedData;
    }
    private getChartData(){
        const data = this.getGroupedData()
        const chartData :any=[];
        for(const key in data){
            if(data.hasOwnProperty(key)){
                chartData.push({label:key, value: data[key].length })
            }
        }
        return chartData;
    }
    private getPageTitle(){
        const {dashboardMenuItems, match} = this.props;
        const item = dashboardMenuItems.find(i=> i.ShortCutID.toString() === match.params.ShortCutID)
        return item && item.Caption? item.Caption :"Loading.."
    }
}
export default BusinessProcessFlowView;

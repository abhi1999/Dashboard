import _ from "lodash";
import * as  React from 'react';
import {DashboardContainer, LoadingOrErrorComponent} from "./../widgets"
import AlertView from "./AlertView"

interface IAlertsProps{
    alertGroupSet:any[]
    alertGroupDetails:any[],
    error:boolean
    loadAlertPresets:()=>{}
    loading:boolean
}
class Alerts extends React.Component<IAlertsProps, any>{
    public constructor(props) {
        super(props);
        this.props.loadAlertPresets();
    }
    public render(){
        const {alertGroupDetails, alertGroupSet} = this.props
        return <React.Fragment>
            {this.props.loading || this.props.error? <DashboardContainer colSize={3} headerTitle="Alerts"><LoadingOrErrorComponent {...this.props}/></DashboardContainer>:
                alertGroupSet.map(a=>{
                    return <DashboardContainer key={a.GroupTile} colSize={3} headerTitle={a.Caption} badgeText={a.quantity}>
                        <AlertView alertId={a.GroupTile} data={this.getChartData(a.GroupTile, alertGroupDetails)} {...this.props}/>
                    </DashboardContainer>})
            }    
        </React.Fragment>
    }
    private getChartData(GroupTile, details){
        const item = details.find((d)=> d.GroupTile === GroupTile)
        if(item && item.values){
            const data = item.values.map(i=> {
                const obj:any = {value:i.Quantity, label:i.Caption}
                return obj;
            })
            return _.orderBy(data, ['value'],['desc']); 
        }
        return []
    }
    
}

export default Alerts;

import * as  React from 'react';
import { FadeLoader, RingLoader } from 'react-spinners';
import Pie from "./../charts/Pie"
import { LoadingComponent } from "./../widgets/"
import DashboardContainer from "./../widgets/DashboardContainer"
import AlertView from "./AlertView"
import AlertViewToggle from "./AlertViewToggle"

interface IAlertsProps{
    alertGroupSet:any[]
    alertGroupDetails:any[]
    loadAlertPresets:()=>{}
}
class Alerts extends React.Component<IAlertsProps, any>{
    public constructor(props) {
        super(props);
        this.props.loadAlertPresets();
    }
    public render(){
        const {alertGroupDetails, alertGroupSet} = this.props
        return <React.Fragment>
            {alertGroupSet && alertGroupSet.length>0? 
                alertGroupSet.map(a=>{
                    return <DashboardContainer key={a.GroupTile} colSize={3} headerTitle={a.Caption} badgeText={a.quantity}>
                        <AlertView alertId={a.GroupTile} data={this.getPieData(a.GroupTile, alertGroupDetails)} {...this.props}/>
                    </DashboardContainer>})
            :<DashboardContainer colSize={3} headerTitle="Alerts"><LoadingComponent/></DashboardContainer>}    
        </React.Fragment>
    }
    private getPieData(GroupTile, details){
        const item = details.find((d)=> d.GroupTile === GroupTile)
        if(item && item.values){
            return item.values.map(i=> {
                const obj:any = {value:i.Quantity, label:i.Caption}
                return obj;
            })
        }
        return []
    }
    
}

export default Alerts;

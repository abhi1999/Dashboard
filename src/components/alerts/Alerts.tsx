import * as  React from 'react';
import Pie from "./../charts/Pie"
import DashboardContainer from "./../widgets/DashboardContainer"
interface IAlertsProps{
    alertGroupSet:any[]
    alertGroupDetails:any[]
}
class Alerts extends React.Component<IAlertsProps, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const {alertGroupDetails, alertGroupSet} = this.props
        return <React.Fragment>
            {alertGroupSet? 
                alertGroupSet.map(a=>{
                    return <DashboardContainer key={a.GroupTile} colSize={3} headerTitle={a.Caption} badgeText={a.quantity}>
                        <Pie data={this.getPieData(a.GroupTile, alertGroupDetails)}/>
                    </DashboardContainer>})
            :""}    
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

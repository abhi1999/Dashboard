import * as  React from 'react';
import DashboardContainer from "./../widgets/DashboardContainer"
interface IAlertsProps{
    alertGroupSet:any[]
}
class Alerts extends React.Component<IAlertsProps, any>{
    private momentInstance:any;
    public constructor(props) {
        super(props);
    }
    public render(){
        return <React.Fragment>
            {this.props.alertGroupSet? 
                this.props.alertGroupSet.map(a=>{
                    return <DashboardContainer key={a.GroupTitle} colSize={3} headerTitle={a.Caption + " ("+ a.quantity + ")"}>
                        {a.quantity}
                    </DashboardContainer>})
            :""}
        </React.Fragment>
    }
}

export default Alerts;

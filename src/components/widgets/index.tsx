import * as  React from 'react';
import { FadeLoader, RingLoader } from 'react-spinners';
import DashboardContainer from "./DashboardContainer"
import GridContainer from "./Grid"
class LoadingComponent extends React.Component<any, any>{
    public render(){
        return <div className='dashboard-component-loading' >
        <FadeLoader height={10} width={2} radius={1} margin="2px" color={'#123abc'}/>
      </div>
    }
}
export {
    DashboardContainer,
    GridContainer,
    LoadingComponent,
}
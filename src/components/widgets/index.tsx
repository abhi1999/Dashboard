import * as  React from 'react';
import DashboardContainer from "./DashboardContainer"
import ErrorComponent from "./ErrorComponent";
import GridContainer from "./Grid"
import LoadingComponent from "./LoadingComponent";
interface ILoadingOrErrorComponentProps{
    loading?:boolean;
    error?:boolean
}
class LoadingOrErrorComponent extends React.Component<ILoadingOrErrorComponentProps, any>{
    public render(){
        return <React.Fragment>
            {this.props.loading? <LoadingComponent/>:""}
            {this.props.error? <ErrorComponent/>:""}
        </React.Fragment>
    }
}
export {
    DashboardContainer,
    ErrorComponent,
    GridContainer,
    LoadingComponent,
    LoadingOrErrorComponent
}
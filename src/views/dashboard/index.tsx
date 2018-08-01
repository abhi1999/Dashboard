import * as  React from 'react';
import { Container, Row } from 'reactstrap';
import CriticalAlerts from "./../../components/charts/CriticalAlerts"
import DocReceived from "./../../components/charts/DocReceived";
import {DashboardContainer} from "./../../components/widgets"
import AlertsContainer from "./../../containers/Alerts/AlertsContainer"
import DocReceivedByTypeContainer from "./../../containers/DocReceivedByType/DocReceivedByTypeContainer";
import NewsFeedContainer from "./../../containers/NewsFeed/NewsFeedContainer"
import ProductActivityContainer from "./../../containers/ProductActivity/ProductActivityContainer";
import TopErrorsContainer from "./../../containers/TopError/TopErrorsContainer"

class Dashboard extends React.Component<any, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        return (<Row>
                    <DashboardContainer colSize={6} headerTitle="News">
                        <NewsFeedContainer/>
                    </DashboardContainer>
                    <AlertsContainer/>
                    <TopErrorsContainer/>
                    <DocReceivedByTypeContainer/>
                    <ProductActivityContainer/>
                </Row> );  
    }
}

export default Dashboard;

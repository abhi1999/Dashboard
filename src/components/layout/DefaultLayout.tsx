import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import AlertsContainer from "./../../containers/Alerts/AlertsContainer"
import NewsFeedContainer from "./../../containers/NewsFeed/NewsFeedContainer"
import { INewsFeed } from "./../../domain/DataModel"
import CriticalAlerts from "./../charts/CriticalAlerts"
import DocReceived from "./../charts/DocReceived";
import DashboardContainer from "./../widgets/DashboardContainer"
import DashboardFooter from "./DashboardFooter"
import DashboardHeader from "./DashboardHeader";

interface IDefaultLayoutProps{
  navItems:any[]
  newsFeeds:INewsFeed
}

class DefaultLayout extends React.Component<IDefaultLayoutProps> {
  public render() {
    return (
      <div className="app">
        <AppHeader fixed={true}>
          <DashboardHeader/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed={true} display="lg">
            <AppSidebarHeader/>
            <AppSidebarNav navConfig={{items:this.props.navItems}}/>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
          <Row>
           <DashboardContainer colSize={6} headerTitle="News">
              <NewsFeedContainer/>
           </DashboardContainer>
           <AlertsContainer/>
           <DashboardContainer colSize={3} headerTitle="Critical Alerts"><CriticalAlerts/></DashboardContainer>
           <DashboardContainer colSize={3} headerTitle="Documents by Type"> <DocReceived/></DashboardContainer>
          </Row>
            <Container fluid={true}>
              <Switch>
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed={true} hidden={true}>
            Some desktop only components
          </AppAside>
        </div>
        <AppFooter>
          <DashboardFooter/>
        </AppFooter>  
      </div>
    );
  }
}

export default DefaultLayout;

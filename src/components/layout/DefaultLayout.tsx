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



import DashboardHeader from "./DashboardHeader"

import { INewsFeed } from "./../../domain/DataModel"

import NewsFeedList from "./../news/NewsFeedList"

import DashboardContainer from "./../widgets/DashboardContainer"

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
            <AppSidebarHeader>Navigation Header</AppSidebarHeader>
            <AppSidebarNav navConfig={{items:this.props.navItems}}/>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
          <Row>
           <DashboardContainer colSize={6} headerTitle="News">
              <NewsFeedList {...this.props}/>
           </DashboardContainer>
           <DashboardContainer colSize={2}/>
           <DashboardContainer colSize={2}/>
           <DashboardContainer colSize={2}/>
          </Row>
            <Container fluid={true}>
              <Switch>
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed={true} hidden={true}>
            aside
          </AppAside>
        </div>
        <AppFooter>
          footer
        </AppFooter>  
      </div>
    );
  }
}

export default DefaultLayout;

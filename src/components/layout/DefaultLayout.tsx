import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import BussinessProcess from "./../../containers/BusinessProcessFlow";
import Dashboard from "./../../views/dashboard";
import Favorites from "./../../views/favorites";
import Footer from "./Footer"
import Header from "./Header";

import TaskStatusListView from "../../views/scheduler/TaskStatusListView";
import WorkflowListView from "../../views/scheduler/WorkflowListView";
import TaskListView from "../../views/scheduler/TaskListView";
import SchedulerListView from "../../views/scheduler/SchedulerListView";
import NetworkListView from "../../views/scheduler/NetworkListView";
import DatabaseListView from "../../views/scheduler/DatabaseListView";
import FolderListView from "../../views/scheduler/FolderListView";
import VariableListView from "../../views/scheduler/VariableListView";
import CarrierListView from "../../views/carrier/CarrierListView";
import ErrorCodeListView from "../../views/ErrorCode/ErrorCodeListView";
import FreightCodeView from "./../../views/FreightCode/FreightCodeView";
import TradeView from "./../../views/Trade/TradeView";

import CarrierList from  "../../views/carrier/CarrierList";
import CarrierListViewAlt from  "../../views/carrier/CarrierListViewAlt";


import JsonTreeComponent from "./../jsonEditView"


interface IDefaultLayoutProps{
  reload:()=>void
  navItems:any[]
}
class DefaultLayout extends React.Component<IDefaultLayoutProps> {
  public render() {
    const routes = [
      { path: '/', exact: true, name: 'Home' },
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      { path: '/favorites', name: 'Favorites', component: Favorites },
      { path: '/QuoteToCash', name: 'Quote To Cash', component: Favorites },
      { path: '/ProcureToPay', name: 'Procure To Pay', component: Favorites },
      { path: '/logistics', name: 'Logistics', component: Favorites },
      { path: '/automotiveplanning', name: 'Automotive Planning', component: Favorites },
      { path: '/product', name: 'Product Management', component: Favorites },
      { path: '/businessProcess/:ShortCutID', name: '', component: BussinessProcess },
      { path: '/status', name: 'Status', component: TaskStatusListView },
      { path: '/workflows', name: 'Workflows', component: WorkflowListView },
      { path: '/tasks', name: 'Tasks', component: TaskListView },
      { path: '/schedulers', name: 'Schedulers', component: SchedulerListView },
      { path: '/networks', name: 'Networks', component: NetworkListView },
      { path: '/databases', name: 'Databases', component: DatabaseListView },
      { path: '/folders', name: 'Folders', component: FolderListView },
      { path: '/variables', name: 'Variables', component: VariableListView },
      { path: '/carriers', name: 'Carriers', component: CarrierListView },
      { path: '/carriersaggrid', name: 'CarriersAG-Grid', component: CarrierList },
      { path: '/carriersalt', name: 'CarriersAlt', component: CarrierListViewAlt },
      { path: '/errorCodes', name: 'ErrorCodes', component: ErrorCodeListView },
      { path: '/freightCodes', name: 'Freight Codes', component: FreightCodeView },
      { path: '/trades', name: 'Trading Partners', component: TradeView },
    ];
    return (
      <div className="app">
        <AppHeader fixed={true}>
          <Header {...this.props}/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed={true} display="lg">
            <AppSidebarHeader/>
            <AppSidebarNav navConfig={{items:this.props.navItems}} location={window.location}/>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/> 
            <Container fluid={true}>
              <Switch>
                {routes.map((route:any, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Route path='/JsonEdit' render={(props) => (
                    <JsonTreeComponent/>
                    )}/>

              <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>          
          </main>
          <AppAside fixed={true} hidden={true}>
            Some desktop only components
          </AppAside>
        </div>
        <AppFooter>
          <Footer/>
        </AppFooter>  
      </div>
    );
  }
}

export default DefaultLayout;

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

<<<<<<< HEAD
interface IDefaultLayoutProps{
  reload:()=>void
  navItems:any[]
}
class DefaultLayout extends React.Component<IDefaultLayoutProps> {
=======
class DefaultLayout extends React.Component<any> {
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
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
    ];
    return (
      <div className="app">
        <AppHeader fixed={true}>
<<<<<<< HEAD
          <Header {...this.props}/>
=======
          <Header/>
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed={true} display="lg">
            <AppSidebarHeader/>
            <AppSidebarNav navConfig={{items:this.props.navItems}}/>
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

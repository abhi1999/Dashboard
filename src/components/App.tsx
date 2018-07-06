import * as React from 'react';
import Notifications from 'react-notification-system-redux';
import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

import './App.css';

// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './../styles/style.css'

import { INewsFeed } from "./../domain/DataModel"



interface IAppProps{
  alertGroupSet:any[],
  notifications:any,
  navItems:any[],
  newsFeeds:INewsFeed,
  loadAlertGroupSet:()=>{},
  loadAllLookup:()=>{},
  loadNewsFeed: ()=>{},
}

class App extends React.Component<IAppProps> {
  public constructor(props){
    super(props)
    this.reloadData= this.reloadData.bind(this);
  }
  public componentDidMount(){
    this.reloadData();
  }
  public render() {
    const defaultStyle ={
      NotificationItem:{
          DefaultStyle:{
              margin:"10px, 5px, 2px, 1px"
          }
      }
    }
    console.log(this.props.alertGroupSet)
    return (
      <div className="App">
        <HashRouter>
            <Switch>
              <Route path='/home' render={(props) => (
                  <div>home</div>
                  )}/>
              <Route path="/dashboard" name="Home" render={(props) => (
                  <DefaultLayout {...this.props}/>
                  )}/>
            </Switch>
        </HashRouter>        
        <Notifications notifications={this.props.notifications} style={defaultStyle} />
      </div>
    );
  }
  private reloadData(){
    // this.props.loadNewsFeed();
    // this.props.loadAlertGroupSet();
    this.props.loadAllLookup();
  }
}

export default App;

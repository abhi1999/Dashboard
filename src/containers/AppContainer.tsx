import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import App from "./../components/App"

const mapStateToProps = (state) => {
  const {
      mainReducer:{
        alertGroupSet,
        dashboardMenuItems,
        loading,
        newsFeeds,
      },
      businessFlowReducer:{        
        navItems,
      },
      notifications
  }= state;
  return {
      alertGroupSet,
      dashboardMenuItems,
      loading,
      navItems,
      newsFeeds,
      notifications,
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    loadAlertGroupSet,
    loadDashboardMenuList,
    loadDocReceivedCount,
    loadExceptionByProcessLogs,
    loadProductActivitySummary,
    testNotification,

  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadAlertGroupSet,
    loadDocReceivedCount,
    testNotification,
    loadAllLookup(){
      loadDashboardMenuList();
      const date = new Date()
      loadDocReceivedCount(date.getFullYear()+"-" + (date.getMonth()+1) + "-"+ date.getDate());
      loadAlertGroupSet();
      loadExceptionByProcessLogs();
      loadProductActivitySummary();
    }
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
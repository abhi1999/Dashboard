import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import App from "./../components/App"

const mapStateToProps = (state) => {
  const {
      mainReducer:{
        alertGroupSet,
        loading,
        navItems,
        newsFeeds,
      },
      notifications
  }= state;
  return {
      alertGroupSet,
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
    testNotification
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadAlertGroupSet,
    loadDocReceivedCount,
    testNotification,
    loadAllLookup(){
      loadDashboardMenuList();
      loadDocReceivedCount();
      loadAlertGroupSet();
      loadExceptionByProcessLogs();
    }
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
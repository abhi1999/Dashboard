import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/mainAction";
import App from "../components/App"

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
    loadDocReceivedCount,
    loadNewsFeed,
    loadTopErrorLogs,
    testNotification
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadAlertGroupSet,
    loadDocReceivedCount,
    loadNewsFeed,
    loadTopErrorLogs,
    testNotification,
    loadAllLookup(){
      loadNewsFeed()
      loadDocReceivedCount();
      loadAlertGroupSet();
      loadTopErrorLogs();
      // dispatch(loadAlertGroupSet())
      // dispatch(loadDocReceivedCount())
      // dispatch(loadNewsFeed());
      // dispatch(loadTopErrorLogs());
    }
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
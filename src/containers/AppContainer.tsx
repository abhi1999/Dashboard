import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/mainAction";
import App from "../components/App"

const mapStateToProps = (state) => {
  const {
      mainReducer:{
        loading,
        navItems,
        newsFeeds,
      },
      notifications
  }= state;
  return {
      loading,
      navItems,
      newsFeeds,
      notifications,
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    loadNewsFeed,
    testNotification
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadNewsFeed,
    testNotification
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
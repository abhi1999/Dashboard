import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions/mainAction";
import Alerts from "./../../components/alerts/Alerts";

const mapStateToProps = (state) => {
  const {
    alertsReducer:{
        alertGroupDetails,
        alertGroupSet,
        error,
        loading,   
      },
  }= state;
  return {
    alertGroupDetails,
    alertGroupSet,
    error,
    loading, 
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    loadNewsFeed,
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadNewsFeed,
  }
}
const AlertsContainer = connect(mapStateToProps, mapDispatchToProps)(Alerts);
export default AlertsContainer;
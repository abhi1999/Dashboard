import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions";
import Alerts from "./../../components/alerts/Alerts";

const mapStateToProps = (state) => {
  const {
    alertsReducer:{
        alertGroupDetails,
        alertGroupPresets,
        alertGroupSet,
        error,
        loading,
      },
  }= state;
  return {
    alertGroupDetails,
    alertGroupPresets,
    alertGroupSet,
    error,
    loading, 
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    loadAlertPresets,
    setAlertPreset,
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadAlertPresets,
    setAlertPreset,
  }
}
const AlertsContainer = connect(mapStateToProps, mapDispatchToProps)(Alerts);
export default AlertsContainer;
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions";
import BusinessProcessFlow from "./../../components/businessProcessFlow";

const mapStateToProps = (state) => {
  const {
    businessFlowReducer:{
        dashboardMenuItemDetails,
        dashboardMenuItems,
        error,
        loading, 
      },
  }= state;
  return {
      dashboardMenuItemDetails,
      dashboardMenuItems,
      error,
      loading,
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
  } = bindActionCreators(actionCreators, dispatch)
  return {
  }
}
const BusinessProcessFlowContainer = connect(mapStateToProps, mapDispatchToProps)(BusinessProcessFlow);
export default BusinessProcessFlowContainer;
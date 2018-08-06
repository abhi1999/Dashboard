import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions";
import DocsByType from "./../../components/documentsByType/DocsByType";

const mapStateToProps = (state) => {
  const {
    docReceivedReducer:{
        docReceivedByType, 
        error,
        loading,
      },
  }= state;
  return {
    docReceivedByType, 
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
const DocReceivedByTypeContainer = connect(mapStateToProps, mapDispatchToProps)(DocsByType);
export default DocReceivedByTypeContainer;
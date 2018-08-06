import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions";
import TopError from "./../../components/topErrors/TopErrors";

const mapStateToProps = (state) => {
  const {
    topErrorsReducer:{
        error,
        loading,
        topErrors,   
      },
  }= state;
  return {
    error,
    loading,
    topErrors, 
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    
  } = bindActionCreators(actionCreators, dispatch)
  return {
  }
}
const TopErrorsContainer = connect(mapStateToProps, mapDispatchToProps)(TopError);
export default TopErrorsContainer;
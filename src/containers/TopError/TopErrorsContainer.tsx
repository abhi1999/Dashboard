import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions/mainAction";
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
    loadNewsFeed,
  } = bindActionCreators(actionCreators, dispatch)
  return {
    loadNewsFeed,
  }
}
const TopErrorsContainer = connect(mapStateToProps, mapDispatchToProps)(TopError);
export default TopErrorsContainer;
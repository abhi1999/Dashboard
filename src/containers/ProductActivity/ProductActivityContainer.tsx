import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions";
import ProductActivitySummary from "./../../components/productActivty/";

const mapStateToProps = (state) => {
  const {
    productActivityReducer:{
        error,
        loading,
        productActivitySummary,
      },
  }= state;
  return {
    error,
    loading,
    productActivitySummary,
  }
}
const mapDispatchToProps = (dispatch) => {
  const {
    
  } = bindActionCreators(actionCreators, dispatch)
  return {
  }
}
const ProductActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ProductActivitySummary);
export default ProductActivityContainer;
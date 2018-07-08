import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./../../actions/mainAction";
import NewsFeedList from "./../../components/news/NewsFeedList";

const mapStateToProps = (state) => {
  const {
      newsFeedReducer:{
        error,
        loading, 
        newsFeeds,      
      },
  }= state;
  return {
        error,
        loading,
        newsFeeds,
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
const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeedList);
export default NewsFeedContainer;
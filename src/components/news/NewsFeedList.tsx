import * as  React from 'react';
import  {Fade} from "reactstrap";
import { INewsFeed, INewsFeedItem } from "./../../domain/DataModel"
import { LoadingOrErrorComponent } from "./../widgets/"
import NewsFeedItem from "./NewsFeedItem"

interface INewsFeedListProps{
    loadNewsFeed:()=>Promise<any>,
    error:boolean,
    loading:boolean,
    newsFeeds:INewsFeed,
}
interface INewsFeedListState{
    showCount:number
}
class NewsFeedList extends React.Component<INewsFeedListProps, INewsFeedListState>{
    private initalShowCount:number= 3;
    constructor(props){
        super(props);
        this.toggleShowAll = this.toggleShowAll.bind(this);
        this.renderPaging = this.renderPaging.bind(this);
        this.state={
            showCount:this.initalShowCount
        }
        this.props.loadNewsFeed()
    }
    public render(){
        const {newsFeeds} = this.props;
        return <Fade timeout={300} in={true}>
                <LoadingOrErrorComponent {...this.props}/>
                {this.props.loading || this.props.error? "":
                    <div className="news-feed-list">
                        {newsFeeds && newsFeeds.items ? newsFeeds.items.map((item:INewsFeedItem, index:number)=>{
                            if(this.state.showCount === 0 || index<this.state.showCount){
                                return <NewsFeedItem key={index} item={item} />;
                            }else {return "";}
                        }) :""}
                        <small>{this.renderPaging()}</small>
                    </div>
                }
        </Fade>
    }
    private renderPaging(){
        if(this.props.loading === false && (this.props.newsFeeds === undefined || this.props.newsFeeds.items === undefined || this.props.newsFeeds.items.length === 0)){
            return <span>No items found</span>
        }
        else if(this.props.newsFeeds && this.props.newsFeeds.items && this.props.newsFeeds.items.length <= 3){
            return <span/>
        }
        else if(this.state.showCount !== 0){
            return <a  className="btn " onClick={()=>{this.toggleShowAll(true)}}><i className={"icon-arrow-down"}/> Show All</a>
        }
        else{
            return <a className="btn " onClick={()=>{this.toggleShowAll(false)}}><i className={"icon-arrow-up"}/> Show Top 3</a>            
        }
    }
    private toggleShowAll(showAll){
        this.setState({showCount:showAll? 0: this.initalShowCount})            
    }
}

export default NewsFeedList;

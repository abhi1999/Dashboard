import * as  React from 'react';
import { INewsFeed, INewsFeedItem } from "./../../domain/DataModel"
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
        return <div>
                {newsFeeds && newsFeeds.items ? newsFeeds.items.map((item:INewsFeedItem, index:number)=>{
                    if(this.state.showCount === 0 || index<this.state.showCount){
                        return <NewsFeedItem key={index} item={item} />;
                    }else {return "";}
                }) :""}
                {this.renderPaging()}
            </div>
    }
    private renderPaging(){
        if(this.props.newsFeeds === undefined || this.props.newsFeeds.items === undefined || this.props.newsFeeds.items.length === 0){
            return <span>No items found</span>
        }
        else if(this.props.newsFeeds && this.props.newsFeeds.items && this.props.newsFeeds.items.length <= 3){
            return <span/>
        }
        else if(this.state.showCount !== 0){
            return <a onClick={()=>{this.toggleShowAll(true)}}>Show All</a>
        }
        else{
            return <a onClick={()=>{this.toggleShowAll(false)}}>Show Top 3</a>            
        }
    }
    private toggleShowAll(showAll){
        this.setState({showCount:showAll? 0: this.initalShowCount})            
    }
}

export default NewsFeedList;

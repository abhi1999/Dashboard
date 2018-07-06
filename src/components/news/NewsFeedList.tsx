import * as  React from 'react';

import { INewsFeed, INewsFeedItem } from "./../../domain/DataModel"
import NewsFeedItem from "./NewsFeedItem"
interface INewsFeedListProps{
    newsFeeds:INewsFeed
}
interface INewsFeedListState{
    showCount:number
}
class NewsFeedList extends React.Component<INewsFeedListProps, INewsFeedListState>{
    private initalShowCount:number= 3;
    constructor(props){
        super(props);
        this.toggleShowAll = this.toggleShowAll.bind(this);
        this.state={
            showCount:this.initalShowCount
        }
    }
    public render(){
        const {newsFeeds} = this.props;
        return <div>
                {newsFeeds && newsFeeds.items ? newsFeeds.items.map((item:INewsFeedItem, index:number)=>{
                    if(this.state.showCount === 0 || index<this.state.showCount){
                        return <NewsFeedItem key={index} item={item} />;
                    }else {return "";}
                }) :""}
                <a onClick={this.toggleShowAll}>Show All</a>
            </div>
    }
    private toggleShowAll(){
        if(this.state.showCount){
            this.setState({showCount:0})
        }
        else{
            this.setState({showCount:this.initalShowCount})
        }
            
    }
}

export default NewsFeedList;

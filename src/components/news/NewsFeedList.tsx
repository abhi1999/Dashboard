import * as  React from 'react';
import { INewsFeed, INewsFeedItem } from "./../../domain/DataModel"
import NewsFeedItem from "./NewsFeedItem"
interface INewsFeedListProps{
    newsFeeds:INewsFeed
}

class NewsFeedList extends React.Component<INewsFeedListProps>{

    public render(){
        return <div>
            {this.props.newsFeeds.title} - {this.props.newsFeeds.link}
            <div>
                {this.props.newsFeeds && this.props.newsFeeds.items ? this.props.newsFeeds.items.map((item:INewsFeedItem, index:number)=>{
                    return <NewsFeedItem key={index} item={item} />;
                }) :""}
            </div>
        </div>
    }
}

export default NewsFeedList;

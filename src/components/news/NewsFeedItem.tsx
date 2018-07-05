import * as  React from 'react';
import { INewsFeedItem } from "./../../domain/DataModel"
interface INewsFeedItemProps{
    item:INewsFeedItem
}
class NewsFeedItem extends React.Component<INewsFeedItemProps>{

    public render(){
        return <div>
            {this.props.item ? this.props.item.title : ""}
            <div>
                {this.props.item && this.props.item.categories ? this.props.item.categories.map((c,index)=>{
                    return <span key={index}>{c};</span>
                }):"" }
            </div>
        </div>
    }
}

export default NewsFeedItem;

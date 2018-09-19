export interface IItemDataModel{
    Ship_Via_ID:string;
    Ship_Via_Name:string;
    SCAC:string;
    Type:string;
    User1:string;
    User2:string;
    User3:string;
    User4:string;
    User5:string;
}
export interface INewsFeed{
    description:string;
    language:string;
    link:string;
    pubDate:string;
    title:string;
    items:INewsFeedItem[]
}
export interface INewsFeedItem{
    categories:string[];
    content:string;
    contentEncoded:string;
    contentSnippet:string;
    creator:string;
    date:string;
    guid:string;
    isoDate:string;
    link:string;
    pubDate:string;
    title:string
}

export interface IChartDataItem{
    label:string;
    value:number
}
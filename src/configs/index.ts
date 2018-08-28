import Parser from 'rss-parser';

export const BASE_URL = process.env.REACT_APP_SERVICE_URL;
export const SCHEDULER_URL = process.env.REACT_APP_SCHEDULER_URL;
export const RSS_FEED_URL:string = process.env.REACT_APP_RSS_FEED_URL?process.env.REACT_APP_RSS_FEED_URL:"";
export const SERVICES ={
    endpoints:{
        alertGroupSet:"/odata/ApiAlertGroupSet",
        alertSetDetails:"/odata/ApiAlertSet",
        docReceivedCount:"/odata/ApiGetDocReceivedCount",
        errorLog:"/odata/ApiGetTopErrorLog",
        productActivtySummary:"/odata/ApiGetProductActivitySummary",
        shortcutMenuItemDetails:"/odata/ApiProcessTileView",
        shortcutMenuItems:"/odata/ApiDashboardShortcutSet",
    }
}
export const RSS_PARSER = new Parser({customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
    ]
}});
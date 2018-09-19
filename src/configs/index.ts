import Parser from 'rss-parser';


export const SERVICES ={
    endpoints:{
        alertGroupSet:"/odata/ApiAlertGroupSet",
        alertSetDetails:"/odata/ApiAlertSet",
        newsFeed:"/api/Blog/News",
        connectToApi:"/api/Login/Connect",
        docReceivedCount:"/odata/ApiGetDocReceivedCount",
        errorLog:"/odata/ApiGetTopErrorLog",
        itemset:"/odata/ItemSet",
        itemAdd:"/api/Item/Add/",
        itemDelete:"/api/Item/Delete/",
        itemUpdate:"/api/Item/UpdateItem/",
        networkset : "/odata/NetworkSet",
        networkConfigs :"/api/ObjAdmin/NetworkConfigurations",
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

import Parser from 'rss-parser';


export const SERVICES ={
    endpoints:{
        alertGroupSet:"/odata/ApiAlertGroupSet",
        alertSetDetails:"/odata/ApiAlertSet",
        newsFeed:"/api/Blog/News",
        connectToApi:"/api/Login/Connect",
        docReceivedCount:"/odata/ApiGetDocReceivedCount",
        errorLog:"/odata/ApiGetTopErrorLog",
        freightCodeSet:"/odata/FreightCodeSet",
        itemset:"/odata/ItemSet",
        getConfigXml : "api/Utility/GetConfigXml/",
        itemAdd:"/api/Items/Add/",
        itemDelete:"/api/Items/Delete/",
        itemUpdate:"/api/Items/UpdateItem/",
        itemXrefSet:"/odata/ItemXRefSet",
        itemSacSet:"/odata/ItemSACSet",
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

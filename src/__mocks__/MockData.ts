export const AlertGroupSet = {
    "@odata.context": "http://localhost:5050/odata/$metadata#ApiAlertGroupSet",
    "value": [
        {
            "Caption": "Critical alerts",
            "GroupTile": 1,
            "quantity": 3500
        },
        {
            "Caption": "Documents on hold",
            "GroupTile": 2,
            "quantity": 793
        },
        {
            "Caption": "Documents ready",
            "GroupTile": 3,
            "quantity": 5
        },
        {
            "Caption": "Work required",
            "GroupTile": 4,
            "quantity": 26
        }
    ]
}

export const TopErrorLog = {
    "@odata.context": "http://localhost:5050/odata/$metadata#ApiGetTopErrorLog",
    "value": [
        {
            "Count": 1308,
            "LogProcess": "TranslateForm",
        },
        {
            "Count": 1192,
            "LogProcess": "AppRoleFunctionController:GetByLogin.163",
        },
        {
            "Count": 255,
            "LogProcess": "SendPOToAcct",
        },
        {
            "Count": 225,
            "LogProcess": "TranslateGrid",
        },
        {
            "Count": 171,
            "LogProcess": "trn_WhseStkXferShpmntToTP",
        }
    ]
}

export const DocReceivedCount ={
    "@odata.context": "http://localhost:5050/odata/$metadata#ApiGetDocReceivedCount",
    "value": [
        {
            "Count": 3,
            "Doc_Desc": "Purchase Order",
            "ID": "db21f084-c97b-488e-86d7-53b3688e6abd",
            "Mdate": "Oct/16",
        },
        {
            "Count": 2,
            "Doc_Desc": "Product Activity",
            "ID": "98bdacba-423e-4a69-b784-508a25f9e9a9",
            "Mdate": "Nov/16",
        },
        {
            "Count": 1,
            "Doc_Desc": "Purchase Order Acknowledgement",
            "ID": "f2cc4754-25da-4c21-85c4-e1a8ce0f3c58",
            "Mdate": "Nov/16",
        },
        {
            "Count": 23,
            "Doc_Desc": "Purchase Order",
            "ID": "13d95a5f-8af5-490e-afa6-2e7abd8b5d50",
            "Mdate": "Dec/16",
        },
        {
            "Count": 10,
            "Doc_Desc": "Purchase Order",
            "ID": "b2945c94-c5b2-452b-9ab8-b64cf85db182",
            "Mdate": "Jan/17",
        },
        {
            "Count": 4,
            "Doc_Desc": "Planning Schedule",
            "ID": "7607f1e4-c633-4d4d-84bb-6c412f365c01",
            "Mdate": "Jan/17",
        },
        {
            "Count": 2,
            "Doc_Desc": "Shipping Schedule",
            "ID": "9648b0d4-e6cb-41f7-b001-c50437199d84",
            "Mdate": "Jan/17",
        },
        {
            "Count": 7,
            "Doc_Desc": "Planning Schedule",
            "ID": "38656a94-750f-4756-a82c-de3fd65d9f99",
            "Mdate": "Feb/17",
        },
        {
            "Count": 1,
            "Doc_Desc": "Purchase Order",
            "ID": "f6d2fc8b-e19d-46a4-8464-7b0876281bfb",
            "Mdate": "Feb/17",
        }
    ]
}


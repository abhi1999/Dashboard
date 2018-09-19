export interface IAcctObjectsCurrent {
  AOID: string;
  ObjID: string;
  CompanyID: number;
  ObjDesc: string;
  ObjType: string;
  CreateSeq: number;
  Revision: number;
  RevDate: Date;
  RevDesc: string;
  SQLSelect: string;
  ExecScript: boolean;
  ExecDate: Date;
  dataarea: string;
}
export interface IAcctPackage {
  AcctPackageID: string;
  AcctDesc: string;
  ObjectsUsed: boolean;
  DisplayOrder: number;
}
export interface IAcctPackage1 {
  Acct_Package: string;
}
export interface IAckCode {
  AckID: string;
  AckDesc: string;
}
export interface IAlert {
  AlertID: string;
  AlertMessage: string;
  AlertDate: Date;
  AlertThreshold: number;
  AlertRowFont: string;
  Quantity: number;
  Caption: string;
  GroupID: number;
}
export interface IAlertGroup {
  GroupID: number;
  Caption: string;
  Direction: string;
  GroupTile: number;
}
export interface IApiAlertGroupView {
  GroupTile: number;
  Caption: string;
  quantity: number;
}
export interface IApiAlertView {
  Quantity: number;
  AlertID: string;
  GroupName: string;
  GroupDirection: string;
  Caption: string;
  AlertMessage: string;
  GroupTile: number;
}
export interface IAPIAllowedObject {
  DBObjectName: string;
}
export interface IApiAppRolePermissions {
  func_code: string;
  func_name: string;
  assigned: number;
  GVis: number;
}
export interface IApiAsnBaseView {
  Asn_ID: number;
  Bol_No: string;
  Pro_No: string;
  ShipToPeps: boolean;
  Ship_Weight: number;
  Ship_Date: string;
  Del_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  TP_PartID: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
  AckID: string;
  GCN: number;
  TCN: number;
  User3: string;
  User4: string;
  User5: string;
  SealNo: string;
  ExportDate: Date;
  CreatedDate: Date;
  PackImport: string;
  VPIDFA: number;
  TP_Name: string;
  NoteText: string;
}
export interface IApiAsnOrderP {
  Asn_ID: number;
}
export interface IApiAsnOrderView {
  Order_No: number;
  TP_PartID: string;
  TP_Name: string;
  Order_Date: string;
  Acct_Order_No: string;
  Cust_PO: string;
  Stat_Flag: string;
  status: string;
}
export interface IApiAsnView {
  rownum: number;
  Asn_ID: number;
  Bol_No: string;
  Pro_No: string;
  ShipToPeps: boolean;
  Ship_Weight: number;
  Ship_Date: string;
  Del_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  TP_PartID: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
  AckID: string;
  GCN: number;
  TCN: number;
  User3: string;
  User4: string;
  User5: string;
  SealNo: string;
  ExportDate: Date;
  CreatedDate: Date;
  PackImport: string;
  VPIDFA: number;
  TP_Name: string;
  NoteText: string;
}
export interface IApiC303v850hBaseView {
  rownum: number;
  PO_ID: number;
  TP_PartID: string;
  TP_Name: string;
  BEG_03: string;
  BEG_04: string;
  BEG_05: string;
  ImportDate: Date;
  ExportDate: Date;
  Exp_Flag: string;
  Status: string;
  Misc_ID: number;
  HoldID: number;
  Notes: string;
  ErrorID: string;
  TLE: number;
  VPIDFA: number;
}
export interface IApiC303v850hView {
  PO_ID: number;
  TP_PartID: string;
  TP_Name: string;
  BEG_03: string;
  BEG_04: string;
  BEG_05: string;
  ImportDate: Date;
  ExportDate: Date;
  Exp_Flag: string;
  Status: string;
  Misc_ID: number;
  HoldID: number;
  Notes: string;
  ErrorID: string;
  TLE: number;
  VPIDFA: number;
}
export interface IApiCarbonCopyView {
  CCID: string;
  TP_PartID: string;
  TP_Name: string;
  CC_PartQ: string;
  CC_PartID: string;
  CC_PartGID: string;
  Direction: string;
  DGID: string;
  Van_ID: string;
  FilterSegment: string;
  FilterQualElemNo: string;
  FilterQualElemValue: string;
  FilterElemNo: string;
  FilterElemValue: string;
  CC_Type: number;
  CC_SenderQ: string;
  CC_SenderID: string;
  CC_SenderGID: string;
}
export interface IApiCarton1 {
  Asn_ID: number;
  Box_ID: number;
  Pack_Level: number;
  TrackingNo: string;
  SSCC: string;
  PKG_ID: string;
  Pack_Wt: string;
}
export interface IApiCarton2 {
  Asn_ID: number;
  Box_ID: number;
  Pack_Level: number;
  TrackingNo: string;
  SSCC: string;
  PKG_ID: string;
  Pack_Wt: string;
}
export interface IApiCarton3 {
  cnt: number;
  pkgName: string;
}
export interface IApiConfigDoc {
  VPID: number;
  DGID: string;
  TP_PartID: string;
  TP_Name: string;
  Doc_Group: string;
  XMLRef: string;
  statuscode: string;
  CreatedDate: Date;
  XMLID: string;
  GCN: string;
  TCN: string;
  Misc_ID: number;
}
export interface IApiCumulativeDetail {
  cusno: string;
  shiptoid: string;
  itemid: string;
  purchaseorderno: string;
  shipdate: Date;
  reason: string;
  reference: string;
  userid: string;
  machineid: string;
  qty: number;
  cm: number;
  caid: string;
}
export interface IApiCumulativeQuantity {
  TP_PartID: string;
  cusno: string;
  TP_Name: string;
  shiptoid: string;
  ShipTo_Name: string;
  itemid: string;
  purchaseorderno: string;
  cmqty: number;
}
export interface IApiDashboardShortcut {
  ShortCutID: number;
  ShortcutOrder: number;
  Caption: string;
}
export interface IApiDataTransport {
  DTCID: string;
  TransID: string;
  TP_PartID: string;
  TP_Name: string;
  DTMethod: number;
  DTIn: string;
  DTOut: string;
  DTServer: string;
  DTDomain: string;
  DTUser: string;
  DTPass: string;
  DTWeb_ERP_Flag: boolean;
}
export interface IApiDocLoadConfig {
  DLID: string;
  DGID: string;
  DocType: string;
  TP_PartID: string;
  Doc_Group: string;
  Doc_Name: string;
  TP_Name: string;
  ProcessFlag: number;
}
export interface IApiDocsReceivedBaseView {
  Misc_ID: number;
  TP_PartID: string;
  DocType: string;
  DocRef: string;
  DateRecv: Date;
  DocStatus: string;
  ICN: string;
  GCN: string;
  ErrorID: number;
  TP_Name: string;
  TCN: string;
  Emailed: boolean;
}
export interface IApiDocsReceivedView {
  rownum: number;
  Misc_ID: number;
  TP_PartID: string;
  DocType: string;
  DocRef: string;
  DateRecv: Date;
  DocStatus: string;
  ICN: string;
  GCN: string;
  ErrorID: string;
  TP_Name: string;
  TCN: string;
  Emailed: number;
}
export interface IApiDocsSentBaseView {
  Sent_ID: number;
  TP_PartID: string;
  DocType: string;
  DocRef: string;
  DateSent: Date;
  DocStatus: string;
  ICN: string;
  GCN: string;
  ErrorID: number;
  TP_Name: string;
  TCN: string;
}
export interface IApiDocsSentView {
  rownum: number;
  Sent_ID: number;
  TP_PartID: string;
  DocType: string;
  DocRef: string;
  DateSent: Date;
  DocStatus: string;
  ICN: string;
  GCN: string;
  ErrorID: string;
  TP_Name: string;
  TCN: string;
}
export interface IApiErrorLogBaseView {
  LogRead: boolean;
  LogDate: Date;
  LogProcess: string;
  LogFunction: string;
  ErrCode: string;
  ErrDesc: string;
  DataKey: string;
  DataError: string;
  User_ID: string;
  Machine_ID: string;
  Problem: string;
  Solution: string;
  URL: string;
  AcctPackageID: string;
  PID: string;
  ELID: string;
  DataType: string;
}
export interface IApiErrorLogCodes {
  ELID: string;
  LogRead: boolean;
  LogDate: Date;
  LogProcess: string;
  LogFunction: string;
  ErrCode: string;
  ErrDesc: string;
  DataKey: string;
  DataError: string;
  User_ID: string;
  Machine_ID: string;
  Problem: string;
  Solution: string;
  URL: string;
  AcctPackageID: string;
  PID: string;
  DataType: string;
}
export interface IApiExportFedexASN {
  Asn_ID: number;
  Bol_No: string;
  Ship_Weight: number;
  Ship_Date: string;
  Box_ID: number;
  Order_No: number;
  Acct_Order_No: string;
  Line_No: number;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  Cust_PO: string;
  Int_Item_No: string;
  Item_Desc: string;
  QtyPacked: number;
  TotalCTNs: number;
}
export interface IApiExportFedexShipDate {
  Asn_ID: number;
  Bol_No: string;
  Ship_Weight: number;
  Ship_Date: string;
  Box_ID: number;
  Order_No: number;
  Acct_Order_No: string;
  Line_No: number;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  Cust_PO: string;
  Int_Item_No: string;
  Item_Desc: string;
  QtyPacked: number;
  TotalCTNs: number;
}
export interface IApiFABaseView {
  FA_ID: number;
  TP_Name: string;
  ISA08: string;
  ISA09: string;
  ISA13: string;
  Direction: string;
  AK101: string;
  AK102: string;
  Exp_Flag: string;
  status: string;
}
export interface IApiGetTempDocs {
  PSIID: string;
  VPID: number;
  tp_name: string;
  processtype: string;
  importdate: Date;
  processdate: Date;
  tp_partid: string;
  fcqual: string;
  fcqty: number;
  fcdate1: Date;
  fcdtqual: string;
  itemid: string;
  engchangelevel: string;
  purchaseorder: string;
  poline: string;
  releaseno: string;
  tp_stqual: string;
  vin: string;
  jobseqno: string;
  storageid: string;
  assembly: string;
  HoldID: number;
  shiptoid: string;
  status: string;
}
export interface IApiInvoiceView {
  ORD_ID: number;
  TP_PartID: string;
  TP_Name: string;
  BIG_02: string;
  BIG_04: string;
  Exp_Flag: string;
  ImportDate: Date;
  ExportDate: Date;
  GCN: string;
  TCN: string;
  AckDesc: string;
  Acct_CusNo: string;
}
export interface IApiItemDetail {
  PO_ID: number;
  PO1_LineNo: string;
  PO1_02: string;
  PO1_03: string;
  PO1_04: number;
  PO1_05: string;
  PO1_06: string;
  PO1_07: string;
  PO1_EDIqty: string;
  PO1_EDIline: string;
  ItemID: string;
  ItemDesc: string;
  NewQty: string;
  AcctUOM: string;
  AcctQty: string;
  AcctPrice: string;
}
export interface IApiItemOrderL {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Ship_Date: string;
  Cust_PO: string;
  Cust_Dept: string;
  Loc_ID: string;
  Ship_To_ID: string;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  ShipFr_Name: string;
  ShipFr_Addr1: string;
  ShipFr_Add2: string;
  ShipFr_City: string;
  ShipFr_St: string;
  ShipFr_Zip: string;
  ShipFr_Country: string;
  Int_Item_No: string;
  Quantity: number;
  QtyPacked: number;
  Price: number;
  UnitofMeas: string;
  Exp_Flag: string;
  Stat_Flag: string;
  Order_Wt: number;
  Acct_Line_No: number;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Ship_To_Address3: string;
  TP_PartID: string;
  Acct_Order_No: string;
  Ship_To_Country: string;
  Pick_Date: string;
  Item_Desc: string;
  Item_Alt_No: string;
}
export interface IApiItemPOAck {
  PO_ID: number;
  PO1_LineNo: string;
  PO1_02: string;
  PO1_03: string;
  PO1_04: string;
  PO1_05: string;
  PO1_06: string;
  PO1_07: string;
  PO1_EDIqty: string;
  PO1_EDIum: string;
  PO1_EDIline: string;
  CTP_02: string;
  CTP_03: string;
  CTP_04: string;
  CTP_05: string;
  CTP_06: string;
  CTP_07: string;
  PS_Type: string;
  PS_Date: string;
  Aut_LMThru: string;
  Aut_MTThru: string;
  PackSize: number;
  etline_no: number;
  docline: number;
  Loc_Override: string;
  Expr1: number;
  Expr2: string;
  Expr3: string;
  Expr4: string;
  ItemID: string;
  ItemDesc: string;
  NewQty: string;
}
export interface IAPIitemXRef {
  TP_Name: string;
  Int_Item_No: string;
  TP_PartID: string;
  Cust_Item_Qual: string;
  Cust_Item_ID: string;
  Cust_Item_UM: string;
  Cust_Item_SizeWidth: string;
  Cust_Item_Pack_Qty: number;
  Cust_Item_UMout: string;
  Cust_Item_UMfactor: number;
  Cust_Item_UMoperin: string;
  Cust_Item_UMoperout: string;
  pricecode: string;
  price: number;
  locid: string;
  ICID: string;
  GenericRef: boolean;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Loc_Override: string;
}
export interface IApiListUsersNotInRole {
  login_name: string;
  ID: number;
  roleID: number;
  roleName: string;
}
export interface IApiOrderLPagedView {
  Order_No: number;
  TP_PartID: string;
  TP_Name: string;
  Order_Date: string;
  Acct_Order_No: string;
  Cust_PO: string;
  Stat_Flag: string;
  status: string;
}
export interface IApiOsnBaseView {
  Asn_ID: number;
  TP_Name: string;
  Bol_No: string;
  Asn_Complete: string;
  Exp_Flag: string;
  GCN: number;
  TCN: number;
  AckDesc: string;
  HoldID: number;
  NoteText: string;
  ErrorID: string;
  Ship_Date: string;
  TLE: number;
  VPIDFA: number;
  TP_PartID: string;
}
export interface IApiPackageLines {
  PKG_ID: string;
  Pack_ID: number;
  Line_No: number;
  Box_ID: number;
  PackQty: number;
}
export interface IApiPackListView {
  Order_No: number;
  Acct_Order_No: string;
  TP_ID: string;
  TP_Name: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Ship_Date: Date;
  Cust_PO: string;
  Exp_Flag: string;
  Stat_Flag: string;
  Ship_To_Name: string;
  Loc_ID: string;
  ShipTo_ID: string;
  ShipTo_DC: string;
  ASN_ID: number;
  status: string;
}
export interface IApiPackSum {
  Line_No: number;
  Int_Item_No: string;
  PackingClass: string;
  Quantity: number;
  QtyPacked: number;
  PC_Pack_Qty: number;
  QtyRemainingPerPackingClass: number;
}
export interface IApiPlanSchedItm {
  PSIID: string;
  PSHID: string;
  VPID: number;
  processtype: string;
  processdate: Date;
  itmdocline: number;
  fcdocline: number;
  fcqual: string;
  fctqual: string;
  fcqty: number;
  fcdate1: string;
  fcdate2: string;
  fcdtqual: string;
  fcdtid: string;
  itemuom: string;
  importdate: Date;
  status: string;
  price: number;
  shpqtyqual: string;
  shpqty: number;
  shpdtqual: string;
  shpdate1: string;
  shpdate2: string;
  engchangelevel: string;
  Expr1: string;
  tp_partid: string;
  psdoctype: string;
  tspurposecode: string;
  pstypequal: string;
  psqtyqual: string;
  pstypecode: string;
  purchaseorder: string;
  releaseno: string;
  contractno: string;
  hrznstartdate: string;
  hrznenddate: string;
  pscreatedate: string;
  psupddate: string;
  hdrdocline: number;
  XMLID: string;
  CreatedDate: Date;
  Expr2: string;
  DGID: string;
  Config: boolean;
  URECID: string;
  Exp_Flag: string;
  ExportDate: Date;
  XMLText: string;
  Expr3: string;
  Misc_ID: number;
  XMLRef: string;
  GCN: string;
  TCN: string;
  Direction: string;
  Expr4: number;
  AckID: string;
  VPIDFA: number;
}
export interface IApiProcessTileView {
  ShortCutID: number;
  Title: string;
  GroupName: string;
  ControlID: number;
  ControlName: string;
  MethodCall: string;
  func_code: string;
  MethodParams: string;
  Type: string;
  BeginGroup: boolean;
  GroupColor: string;
  GroupOrder: number;
  ControlOrder: number;
}
export interface IApiProcessTrigger {
  trigid: number;
  procid: string;
  procname: string;
  seqno: number;
  timing: string;
  dataarea: string;
  triggertype: number;
  triggeraction: string;
  actionfocus: number;
  inactive: boolean;
  subprocid: string;
  subprocname: string;
  notetext: string;
}
export interface IApiProdSeqItm {
  PSIID: string;
  PSHID: string;
  VPID: number;
  processtype: string;
  processdate: Date;
  itmdocline: number;
  fcdocline: number;
  fcqual: string;
  fctqual: string;
  fcqty: number;
  fcdate1: string;
  fcdate2: string;
  fcdtqual: string;
  fcdtid: string;
  itemuom: string;
  importdate: Date;
  status: string;
  price: number;
  custitemno: string;
  po: string;
  poline: string;
  shipto: string;
  shipfrom: string;
  supplier: string;
  psdoctype: string;
  tp_partid: string;
  tp_id: string;
  releaseno: string;
  dlvdate: string;
  shipdate: string;
  dock: string;
  linefeed: string;
  vin: string;
  jobseqno: string;
  jobno: string;
  laborgrp: string;
  commodity: string;
  linesetno: string;
  storageid: string;
  assembly: string;
  engchg: string;
  chassissn: string;
  color: string;
  position: string;
  ctlno: string;
  producttype: string;
  kanban: string;
  custorderno: string;
  proddesc: string;
  pscreatedate: string;
  GSSenderID: string;
  Expr1: number;
  Expr2: string;
  Expr3: string;
  Expr4: string;
  tspurposecode: string;
  pstypequal: string;
  psqtyqual: string;
  pstypecode: string;
  purchaseorder: string;
  Expr5: string;
  contractno: string;
  hrznstartdate: string;
  hrznenddate: string;
  Expr6: string;
  psupddate: string;
  hdrdocline: number;
  XMLID: string;
  CreatedDate: Date;
  Expr7: string;
  DGID: string;
  Config: boolean;
  URECID: string;
  Exp_Flag: string;
  ExportDate: Date;
  XMLText: string;
  Expr8: string;
  Misc_ID: number;
  XMLRef: string;
  GCN: string;
  TCN: string;
  Direction: string;
  Expr9: number;
  AckID: string;
  VPIDFA: number;
}
export interface IApiProductionSequence {
  PSIID: string;
  VPID: number;
  tp_name: string;
  processtype: string;
  importdate: Date;
  processdate: Date;
  tp_partid: string;
  fcqual: string;
  itemid: string;
  fcqty: number;
  fcdate1: Date;
  fcdtqual: string;
  purchaseorder: string;
  releaseno: string;
  engchangelevel: string;
  tp_stqual: string;
  shiptoid: string;
  status: string;
  poline: string;
  vin: string;
  jobseqno: string;
  storageid: string;
  assembly: string;
}
export interface IApiPurchaseOrderView {
  PO_ID: number;
  TP_PartID: string;
  TP_Name: string;
  BEG_03: string;
  BEG_04: string;
  BEG_05: string;
  ImportDate: Date;
  ExportDate: Date;
  Misc_ID: number;
  HoldID: number;
  Notes: string;
  ErrorID: number;
  TLE: number;
  VPIDFA: number;
}
export interface IApiReceiveCarton {
  Order_No: string;
  TP_Name: string;
  Box_ID: string;
  Int_Item_No: string;
  PackQty: number;
  Stat_Flag: string;
  Asn_ID: number;
  TrackingNo: string;
  Lot: string;
  LotExp: string;
  PO1_LineNo: string;
}
export interface IApiReceiveOrder {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  Order_Date: Date;
  Int_Item_No: string;
  Quantity: number;
  QtyRecvd: number;
  DateLastRecvd: Date;
  Stat_Flag: string;
  TP_Name: string;
}
export interface IAPIsacXRef {
  TP_Name: string;
  SAC_Qual: string;
  Int_Item_No: string;
  TP_PartID: string;
}
export interface IApiShipDetail1 {
  Asn_ID: number;
  Bol_No: string;
  Pro_No: string;
  ShipToPeps: boolean;
  Ship_Weight: number;
  Ship_Date: string;
  Del_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  TP_PartID: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
  AckID: string;
  GCN: number;
  TCN: number;
  User3: string;
  User4: string;
  User5: string;
  SealNo: string;
  ExportDate: Date;
  CreatedDate: Date;
  PackImport: string;
  VPIDFA: number;
  TP_Name: string;
  Ship_Via_Name: string;
  Ship_Date_Full: Date;
  Del_Date_Full: Date;
  Exp: string;
  AckDesc: string;
  PackImportDesc: string;
}
export interface IApiShipDetail2 {
  MfgDateF: string;
  ExpDateF: string;
  UserDate1F: string;
  UserDate2F: string;
  Order_No: number;
  Line_No: number;
  Pack_ID: number;
  Pack_Level: number;
  Qty: number;
  SerLot_No: string;
  Box_ID: number;
  MfgDate: Date;
  ExpDate: Date;
  UserDate1: Date;
  UserDate2: Date;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
}
export interface IApiShipDetail3 {
  Loc_ID: string;
  ShipFr_Name: string;
  ShipFr_Addr1: string;
  ShipFr_Add2: string;
  ShipFr_City: string;
  ShipFr_St: string;
  ShipFr_Zip: string;
  ShipFr_Country: string;
  Cust_PO: string;
  ShipTo_Xref: string;
  Source: string;
}
export interface IApiShipDetail4 {
  ID: string;
  Name: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Country: string;
  Source: string;
}
export interface IApiShipDetail5 {
  ID: string;
  Name: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Country: string;
  Source: string;
}
export interface IApiShipDetail6 {
  ID: string;
  Name: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Country: string;
  Source: string;
}
export interface IApiShipDetail7 {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Ship_Date: string;
  Cust_PO: string;
  Cust_Dept: string;
  Loc_ID: string;
  Ship_To_ID: string;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  ShipFr_Name: string;
  ShipFr_Addr1: string;
  ShipFr_Add2: string;
  ShipFr_City: string;
  ShipFr_St: string;
  ShipFr_Zip: string;
  ShipFr_Country: string;
  Int_Item_No: string;
  Quantity: number;
  QtyPacked: number;
  Price: number;
  UnitofMeas: string;
  Exp_Flag: string;
  Stat_Flag: string;
  Order_Wt: number;
  Acct_Line_No: number;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Ship_To_Address3: string;
  TP_PartID: string;
  Acct_Order_No: string;
  Ship_To_Country: string;
  Pick_Date: string;
  QtyPackedS: string;
  QuantityS: string;
  PackQty: string;
  Box_ID: number;
  Pack_Level: number;
  SSCC: string;
  PriceC: number;
  Order_DateF: string;
}
export interface IApiShipList {
  Asn_ID: number;
  Bol_No: string;
  Pro_No: string;
  ShipToPeps: boolean;
  Ship_Weight: number;
  Ship_Date: string;
  Del_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  TP_PartID: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
  AckID: string;
  GCN: string;
  TCN: string;
  User3: string;
  User4: string;
  User5: string;
  SealNo: string;
  ExportDate: Date;
  CreatedDate: Date;
  PackImport: string;
  VPIDFA: number;
  LabelPrinted: boolean;
  TP_Name: string;
  NoteText: string;
}
export interface IApiShipment {
  Asn_ID: number;
  TP_PartID: string;
  TP_Name: string;
  TP_ID: string;
  Bol_No: string;
  Asn_Complete: string;
  Exp_Flag: string;
  GCN: string;
  TCN: string;
  AckDesc: string;
  HoldID: number;
  NoteText: string;
  ErrorID: number;
  Ship_Date: string;
  TLE: number;
  Pro_No: string;
  Ship_Via_Name: string;
  VPIDFA: number;
}
export interface IApiTaxCodeView {
  Tax_Xref: string;
  EDI_TaxQual: string;
  EDI_TaxCode: string;
  EDI_TaxDesc: string;
  TP_PartID: string;
  TP_Name: string;
}
export interface IAPITileFavorites {
  quantity: number;
  Caption: string;
  GroupTile: string;
  GroupName: string;
  ControlID: number;
  ControlName: string;
  MethodCall: string;
  ImageFile: string;
  func_code: string;
  MethodParams: string;
  Type: string;
  BeginGroup: boolean;
  GroupColor: string;
  FavGroupID: number;
  FavID: number;
  FavGroupOrder: number;
  FavOrder: number;
  ControlEnabled: boolean;
  ControlVisible: boolean;
  OrigCaption: string;
  IsFavorite: number;
}
export interface IApiTileProcess {
  quantity: number;
  caption: string;
  GroupTile: string;
  GroupName: string;
  ControlID: number;
  ControlName: string;
  MethodCall: string;
  func_code: string;
  MethodParams: string;
  Type: string;
  BeginGroup: boolean;
  GroupColor: string;
  ImageFile: string;
  GroupEnabled: boolean;
  GroupVisible: boolean;
  ControlEnabled: boolean;
  ControlVisible: boolean;
  IsFavorite: number;
}
export interface IApiTopErrorLog {
  LogProcess: string;
  Count: number;
}
export interface IApiTradeIn810h {
  In810_ID: number;
  TP_PartID: string;
  InvoiceNo: string;
  InvoiceDate: Date;
  PurchaseOrder: string;
  FreightAmt: number;
  MiscAmt: number;
  TaxAmt: number;
  InvoiceAmt: number;
  Exp_Flag: string;
  TP_Name: string;
}
export interface IApiTradeMapExcludeView {
  TP_PartID: string;
  TP_Name: string;
  Invoice: boolean;
  Asn: boolean;
}
export interface IApiTradeOrderDetails {
  Order_No: number;
  Acct_Order_No: string;
  TP_ID: string;
  TP_Name: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Ship_Date: Date;
  Cust_PO: string;
  Exp_Flag: string;
  Stat_Flag: string;
  Ship_To_Name: string;
  Loc_ID: string;
  ShipTo_ID: string;
  ShipTo_DC: string;
  ASN_ID: number;
  status: string;
}
export interface IApiTradeOrderLin {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  Order_Date: Date;
  Int_Item_No: string;
  Quantity: number;
  QtyRecvd: number;
  POPrice: number;
  DateLastRecvd: Date;
  QtyInv: number;
  DateLastInv: Date;
  Stat_Flag: string;
  Inv_Stat_Flag: string;
  Loc_ID: string;
  TP_Name: string;
}
export interface IApiTradeOrderPins {
  Order_No: string;
  TP_Name: string;
  Box_ID: string;
  Int_Item_No: string;
  PackQty: number;
  Stat_Flag: string;
  Asn_ID: number;
  TrackingNo: string;
  Lot: string;
  LotExp: string;
  PO1_LineNo: string;
}
export interface IApiTradeOrders {
  Order_No: number;
  Acct_Order_No: string;
}
export interface IApiTradeTransObject {
  TP_PartID: string;
  TP_Name: string;
}
export interface IApiTransObject {
  TOID: string;
  DGID: string;
  TransID: string;
  TP_PartID: string;
  TDocName: string;
  FilenameLayout: string;
  PackageSeparately: boolean;
  UseControlNums: boolean;
  TransIDImportDate: Date;
  TransIDObj_Date: Date;
  TDocNameImportDate: Date;
  TDocNameObj_Date: Date;
}
export interface IApiXmlDocForm {
  RowNum: number;
  VPID: number;
  CreatedDate: Date;
  Doc_Group: string;
  TP_Name: string;
  Config: boolean;
  ExportDate: Date;
  XMLRef: string;
  statuscode: string;
  Status: string;
  directioncode: string;
  Direction: string;
  TP_PartID: string;
  XMLID: string;
  GCN: string;
  TCN: string;
  misc_id: number;
  DGID: string;
  ackdesc: string;
  HoldID: number;
  NoteText: string;
  ErrorID: string;
  VPIDFA: number;
  TLE: number;
  TLEJump: string;
}
export interface IAppFavorite {
  FavID: number;
  FavUser: string;
  FavControlID: number;
  FavOrder: number;
  FavGroupID: number;
  FavOverrideCaption: string;
  CreatedDate: Date;
}
export interface IAppFavoritesGrp {
  FavGroupID: number;
  FavUser: string;
  FavGroup: string;
  FavGroupOrder: number;
  FavGroupColor: string;
  CreatedDate: Date;
  FavDefGroup: boolean;
}
export interface IAppFunction {
  func_code: string;
  func_name: string;
  menu_name: string;
}
export interface IAppRight {
  login_name: string;
  func_code: string;
}
export interface IAppRole {
  id: number;
  roleName: string;
  roleCreated: Date;
}
export interface IAppRoleFunction {
  id: number;
  RoleID: number;
  RoleCode: string;
}
export interface IAppRoleMap {
  id: number;
  roleID: number;
  loginID: number;
}
export interface IAppUser {
  login_name: string;
  login_password: string;
  eLogin_Password: string;
  id: number;
}
export interface IAppUserRole {
  login_name: string;
  id: number;
  roleID: number;
  roleName: string;
}
export interface IAsn {
  Asn_ID: number;
  Bol_No: string;
  Pro_No: string;
  ShipToPeps: boolean;
  Ship_Weight: number;
  Ship_Date: string;
  Del_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  TP_PartID: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
  AckID: string;
  GCN: string;
  TCN: string;
  User3: string;
  User4: string;
  User5: string;
  SealNo: string;
  ExportDate: Date;
  CreatedDate: Date;
  PackImport: string;
  VPIDFA: number;
}
export interface IAsnComp {
  CntrID: number;
  Asn_ID: number;
  Ship_Weight: number;
  Ship_Date: string;
  Ship_Via_ID: string;
  Asn_Complete: string;
  Exp_Flag: string;
  Order_No: number;
  Cust_Dept: string;
  Order_Wt: number;
  Pack_ID: number;
  PackQty: number;
  Pack_Wt: number;
  Box_ID: number;
  Line_No: number;
  Int_Item_No: string;
  Stat_Flag: string;
  TP_ID: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Cust_PO: string;
  Ship_To_ID: string;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  Quantity: number;
  QtyPacked: number;
  Price: number;
  Del_Date: string;
  UnitofMeas: string;
  ShipToPeps: boolean;
  Bol_No: string;
  Pro_No: string;
  User1: string;
  User2: string;
  Trailer: string;
  Collect: boolean;
}
export interface IAsnIn {
  Asn_ID: number;
  TP_PartID: string;
  Bol_No: string;
  Pro_No: string;
  Ship_Date: Date;
  Ship_Via_ID: string;
}
export interface IBoxSeq {
  Box_ID: number;
}
export interface IC303v800e {
  Tablename: string;
  Acct_RecID: string;
  Seq_No: number;
  ORD_ID: number;
  Order_No: number;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  User6: string;
  User7: string;
  User8: string;
  User9: string;
  User10: string;
  ShipInstr1: string;
  ShipInstr2: string;
  Comment1: string;
  Comment2: string;
  Comment3: string;
  ReqDate: Date;
  ShipDate: Date;
  PromDate: Date;
  DelDate: Date;
  Cust_Item_ID: string;
  OrigQtyOrd: number;
}
export interface IC303v810d {
  ORD_ID: number;
  DTM_01: string;
  DTM_02: string;
}
export interface IC303v810f {
  Ord_ID: number;
  SAC_Qual: string;
  Amount: number;
  Line_No: string;
  Acct_RecID: string;
  Mast_RecID: string;
  URECID: string;
}
export interface IC303v810h {
  ORD_ID: number;
  TP_PartID: string;
  BIG_01: string;
  BIG_02: string;
  BIG_03: string;
  BIG_04: string;
  MISC_Charge: string;
  FRT_Charge: string;
  Sls_Tax: string;
  Ship_Via_ID: string;
  TDS_01: string;
  CTT_01: string;
  Exp_Flag: string;
  TotCartons: number;
  Bol_No: string;
  TotWeight: number;
  ImportDate: Date;
  ExportDate: Date;
  AcctInvTotal: number;
  CUR_02: string;
  AckID: string;
  GCN: string;
  TCN: string;
  TaxableAmt: number;
  FrtTaxAmt: number;
  Acct_RecID: string;
  Acct_CusNo: string;
}
export interface IC303v810hBaseView {
  ORD_ID: number;
  TP_PartID: string;
  TP_Name: string;
  BIG_02: string;
  BIG_04: string;
  Exp_Flag: string;
  status: string;
  ImportDate: Date;
  ExportDate: Date;
  GCN: number;
  TCN: number;
  AckDesc: string;
  Acct_CusNo: string;
}
export interface IC303v810l {
  ORD_ID: number;
  IT1_01: string;
  IT1_02: string;
  IT1_03: string;
  IT1_04: string;
  IT1_05: string;
  IT1_06: string;
  IT1_07: string;
  Tax_Xref: string;
  ItemDesc: string;
  User1: string;
  TaxFlag: boolean;
  TaxAmt: number;
  TaxRate: number;
  LineAmt: number;
  Acct_RecID: string;
}
export interface IC303v810n {
  Ord_ID: number;
  N1_01: string;
  N1_02: string;
  N1_03: string;
  N1_04: string;
  N2_01: string;
  N2_02: string;
  N3_01: string;
  N3_02: string;
  N4_01: string;
  N4_02: string;
  N4_03: string;
  N4_04: string;
}
export interface IC303v810r {
  ORD_ID: number;
  REF_01: string;
  REF_02: string;
}
export interface IC303v810t {
  Ord_ID: number;
  TrackingNo: string;
}
export interface IC303v810x {
  ORD_ID: number;
  TermsDesc: string;
  DscPct: number;
  DscDays: number;
  DueDays: number;
}
export interface IC303v850b {
  PO_ID: number;
  PO1_LineNo: string;
  POB_LineNo: number;
  POB_01: string;
  POB_02: string;
}
export interface IC303v850c {
  PO_ID: number;
  PO1_LineNo: string;
  Seq_No: number;
  Msg: string;
}
export interface IC303v850d {
  PO_ID: number;
  PO1_LineNo: string;
  DTM_01: string;
  DTM_02: string;
  SCH_QTY: string;
  SCH_UOM: string;
}
export interface IC303v850f {
  PO_ID: number;
  PO1_LineNo: string;
  SAC_Ind: string;
  SAC_Code: string;
  Agency_Qual: string;
  Agency_SAC_Code: string;
  Amt: number;
  SAC_Pct_Qual: string;
  Pct: number;
  Rate: number;
  Uom: string;
  Qty_1: number;
  Qty_2: number;
  SAC_Handling_Meth: string;
  Ref_ID: string;
  Opt_No: string;
  Desc: string;
  Qty_Used: number;
  URECID: string;
}
export interface IC303v850h {
  PO_ID: number;
  TP_PartID: string;
  BEG_01: string;
  BEG_02: string;
  BEG_03: string;
  BEG_04: string;
  BEG_05: string;
  BEG_06: string;
  CTT_01: string;
  Exp_Flag: string;
  Int_OrdID: number;
  SDQ_Flag: string;
  CUR_02: string;
  ImportDate: Date;
  ExportDate: Date;
  Misc_ID: number;
  URECID: string;
  UDID: string;
  Revision: number;
  Cust_Ship_Via_ID: string;
  Cust_Terms_ID: string;
  FrtPayMeth: string;
  VPIDFA: number;
}
export interface IC303v850l {
  PO_ID: number;
  PO1_LineNo: string;
  PO1_02: string;
  PO1_03: string;
  PO1_04: string;
  PO1_05: string;
  PO1_06: string;
  PO1_07: string;
  PO1_EDIqty: string;
  PO1_EDIum: string;
  PO1_EDIline: string;
  CTP_02: string;
  CTP_03: string;
  CTP_04: string;
  CTP_05: string;
  CTP_06: string;
  CTP_07: string;
  PS_Type: string;
  PS_Date: string;
  Aut_LMThru: string;
  Aut_MTThru: string;
  PackSize: number;
  etline_no: number;
  docline: number;
  Loc_Override: string;
}
export interface IC303v850lb {
  PO_ID: number;
  PO1_LineNo: string;
  PO1_06: string;
  PO1_07: string;
}
export interface IC303v850n {
  PO_ID: number;
  PO1_LineNo: string;
  N1_01: string;
  N1_02: string;
  N1_03: string;
  N1_04: string;
  N2_01: string;
  N2_02: string;
  N3_01: string;
  N3_02: string;
  N4_01: string;
  N4_02: string;
  N4_03: string;
  N4_04: string;
  N4_05: string;
  N4_06: string;
}
export interface IC303v850r {
  PO_ID: number;
  PO1_LineNo: string;
  REF_01: string;
  REF_02: string;
  REF_03: string;
}
export interface IC303v850s {
  PO_ID: number;
  PO1_LineNo: string;
  SDQ_LineNo: number;
  SDQ_01: string;
  SDQ_02: string;
  SDQ_11: string;
  SDQ_12: string;
}
export interface ICache {
  Obj_ID: string;
  Obj_Name: string;
  Obj_Type: string;
  Obj_Date: Date;
  Obj_Data: number[];
  Obj_Size: number;
  ImportDate: Date;
  User_ID: string;
  Machine_ID: string;
}
export interface ICarbonCopy {
  CCID: string;
  TP_PartID: string;
  CC_PartQ: string;
  CC_PartID: string;
  CC_PartGID: string;
  Direction: string;
  DGID: string;
  Van_ID: string;
  FilterSegment: string;
  FilterQualElemNo: string;
  FilterQualElemValue: string;
  FilterElemNo: string;
  FilterElemValue: string;
  CC_Type: number;
  CC_SenderQ: string;
  CC_SenderID: string;
  CC_SenderGID: string;
}
export interface ICMAdjustment {
  tp_partid: string;
  shipto_id: string;
  int_item_no: string;
  purchaseorder: string;
  reason: string;
  reference: string;
  cmadjustdate: Date;
  cmadjustqty: number;
  user1: string;
  user2: string;
  user3: string;
  user4: string;
  user5: string;
  userid: string;
  machineid: string;
  CAID: string;
  VPID: number;
}
export interface ICMShipped {
  cusno: string;
  shiptoid: string;
  itemid: string;
  purchaseorderno: string;
  shipdate: string;
  reason: string;
  reference: string;
  userid: string;
  machineid: string;
  qty: number;
  vpid: number;
}
export interface ICode {
  functional: string;
  code1: string;
  description: string;
}
export interface IControlNum {
  SendQual: string;
  SendID: string;
  RecvQual: string;
  RecvID: string;
  CtrlNum: number;
  CNID: string;
  Prefix: string;
  Padding: number;
  Suffix: string;
  EdifactCtrlNum: string;
}
export interface IDataTransport {
  TransID: string;
  TP_PartID: string;
  DTMethod: number;
  DTIn: string;
  DTOut: string;
  DTServer: string;
  DTDomain: string;
  DTUser: string;
  DTPass: string;
  DTCID: string;
  DTWeb_ERP_Flag: boolean;
}
export interface IDelimiter {
  DLID: string;
  TP_PartID: string;
  DGID: string;
  TransID: string;
  ElemSep: number;
  SubElemSep: number;
  SegTerm: number;
  RepSep: number;
}
export interface IDocControl {
  tp_partid: string;
  dgid: string;
  controlno: number;
}
export interface IDocLoadConfig {
  DLID: string;
  DGID: string;
  DocType: string;
  TP_PartID: string;
  ProcessFlag: number;
}
export interface IDocStaging {
  DGID: string;
  direction: string;
  docno: string;
  docnoint: number;
  recid: number;
  docdate: Date;
  acctno: string;
  acctname: string;
  docamount: number;
  docref1: string;
  docref2: string;
  docref3: string;
  docref4: string;
  docref5: string;
  exclude: boolean;
  DSID: number;
}
export interface IDocTransport {
  TransDate: Date;
  TP_PartID: string;
  SendQual: string;
  SendID: string;
  SendGroupID: string;
  RecvQual: string;
  RecvID: string;
  RecvGroupID: string;
  DocID: string;
  DGID: string;
  TransID: string;
  PkgFile: string;
  SegCount: number;
  DataKey: string;
  VanExt: string;
  Machinename: string;
  Username: string;
  Status: string;
  DocData: number[];
  PID: string;
  DTID: string;
  Xml_Flag: boolean;
}
export interface IEDIDocDataField {
  UDID: string;
  Group_ID: string;
  Group_Count: number;
  Seg_ID: string;
  Seg_Count: number;
  Elem_No: number;
  Line_No: number;
  UEDID: string;
  PUEDID: string;
}
export interface IEDIDocDataValue {
  UEDID: string;
  Rev_Count: number;
  Rev_Date: Date;
  Elem_value: string;
  User_ID: string;
  Machine_ID: string;
  UVDID: string;
}
export interface IEDIDocGroup {
  DGID: string;
  Doc_Group: string;
  Doc_Desc: string;
}
export interface IEDIDocId {
  TPID: string;
  ICN: string;
  GCN: string;
  TCN: string;
  Doc_ID: string;
  Doc_Count: number;
  UDID: string;
  ImportDate: Date;
  Seperator: string;
  SDID: string;
}
export interface IEDIDocLog {
  UDID: string;
  Status: string;
  Status_Date: Date;
  User_ID: string;
  Machine_ID: string;
}
export interface IEDIDocStatu {
  UDID: string;
  Direction: string;
  Status: string;
}
export interface IEDIInventoryFeed {
  recid: string;
  inventoryinqdate: string;
  cusno: string;
  transpurposecode: string;
  shipfrid: string;
  shipfrname: string;
  shipfradd1: string;
  shipfradd2: string;
  shipfrcity: string;
  shipfrstate: string;
  shipfrzip: string;
  shipfrcountry: string;
  shipfrcontact: string;
  shipfrphone: string;
  shipfrfax: string;
  shipfremail: string;
  shipfruser1: string;
  shipfruser2: string;
  shipfruser3: string;
  shipfruser4: string;
  shipfruser5: string;
  itemid: string;
  itemactivitycode: string;
  itemdesc: string;
  itemdesc2: string;
  price: number;
  qtyavailable: number;
  qtyonorder: number;
  qtyonorderavaildate: string;
  uom: string;
  engchangelevel: string;
  itmuser1: string;
  itmuser2: string;
  itmuser3: string;
  itmuser4: string;
  itmuser5: string;
  invenuser1: string;
  invenuser2: string;
  invenuser3: string;
  invenuser4: string;
  invenuser5: string;
  EDILastQuantity: number;
  EDILastDateSent: Date;
  EDILastGrouping: boolean;
  ShowInImport: boolean;
}
export interface IEDIOutboundInvoice {
  TP_PartID: string;
  VPID: number;
  DGID: string;
  XMLRef: string;
  ExportDate: Date;
  CreatedDate: Date;
  Exp_Flag: string;
  AckID: string;
  XMLText: string;
  XMLId: string;
  invoiceno: string;
  invoicedate: string;
  cusno: string;
  purchaseorderno: string;
  orderno: string;
  lineno: string;
  itemid: string;
  itemdesc: string;
  itemdesc2: string;
  cusitemid: string;
  price: number;
  extendedprice: number;
  uom: string;
  qtyord: number;
  qtytoship: number;
  requestdate: string;
  promisedate: string;
}
export interface IEDIRptFilterASN {
  VPID: number;
  Misc_ID: number;
  DGID: string;
  TP_PartID: string;
  TP_Name: string;
  DocType: string;
  DateRecv: Date;
  DocRef: string;
  PO_NO: string;
  EmailTo: string;
  ReportName: string;
}
export interface IEDIRptFilterPOAck {
  VPID: number;
  Misc_ID: number;
  DGID: string;
  TP_PartID: string;
  TP_Name: string;
  DocType: string;
  DateRecv: Date;
  DocRef: string;
  EmailTo: string;
  ReportName: string;
}
export interface IEDIStdCode {
  Std_ID: string;
  Rel_No: string;
  Elem_ID: string;
  Code_Value: string;
  Code_Desc: string;
  SCID: string;
}
export interface IEDIStdDoc {
  Std_ID: string;
  Rel_No: string;
  Doc_ID: string;
  DGID: string;
  SDID: string;
}
export interface IEDIStdElement {
  Std_ID: string;
  Rel_No: string;
  Seg_ID: string;
  Elem_No: string;
  Elem_Desc: string;
  Elem_ID: string;
  Elem_Type: string;
  Group_ID: string;
  SEID: string;
}
export interface IEDIStdGroup {
  STDID: string;
  DGID: string;
  Func_Group: string;
}
export interface IEDIStdSchema {
  SDID: string;
  Loop_ID: string;
  Seg_ID: string;
  Seg_Name: string;
  HL_No: number;
  Seq_No: number;
  Status: string;
  Repeat: number;
  Loop_Repeat: number;
  SSID: string;
}
export interface IEDIStdSchemaElem {
  SSID: string;
  Elem_No: number;
  Qual_Elem_No: number;
  Qual_Elem_Value: string;
  Elem_Desc: string;
  Token_Name: string;
  Token_Format: string;
  SSEID: string;
}
export interface IEDITokenMaster {
  TID: string;
  Token_Name: string;
  Seq_No: number;
  Pkey: string;
}
export interface IEmailLog {
  PID: string;
  VPID: number;
  TransID: string;
  DistList: string;
  DateSent: Date;
}
export interface IErrorCode {
  ErrCode: string;
  ErrDesc: string;
  Problem: string;
  Solution: string;
  URL: string;
  AcctPackageID: string;
}
export interface IErrorLog {
  LogDate: Date;
  LogProcess: string;
  LogFunction: string;
  ErrCode: string;
  LogErrDesc: string;
  DataKey: string;
  DataError: string;
  User_ID: string;
  Machine_ID: string;
  ELID: string;
  LogRead: boolean;
  LogSent: boolean;
  PID: string;
  DataType: string;
}
export interface IFa {
  FA_ID: number;
  Direction: string;
  ISA01: string;
  ISA02: string;
  ISA03: string;
  ISA04: string;
  ISA05: string;
  ISA06: string;
  ISA07: string;
  ISA08: string;
  ISA09: string;
  ISA10: string;
  ISA11: string;
  ISA12: string;
  ISA13: string;
  ISA14: string;
  ISA15: string;
  ISA16: string;
  GS01: string;
  GS02: string;
  GS03: string;
  GS04: string;
  GS05: string;
  GS06: string;
  GS07: string;
  GS08: string;
  ST01: string;
  ST02: string;
  AK101: string;
  AK102: string;
  AK901: string;
  AK902: string;
  AK903: string;
  AK904: string;
  SE01: string;
  SE02: string;
  GE01: string;
  GE02: string;
  IEA01: string;
  IEA02: string;
  Exp_Flag: string;
}
export interface IFaDetail {
  FA_ID: number;
  AK201: string;
  AK202: string;
  AK501: string;
}
export interface IFreightCode {
  Frt_Code: string;
  Description: string;
  NMFC: string;
  Class: string;
  HazMat: boolean;
  Sub: string;
}
export interface IGetItemChunkResult {
  LOCATION_IN_RECORD_SET: number;
  PAGE_NUMBER: number;
  Int_Item_No: string;
  Item_Desc: string;
  UPC: string;
  Def_Pack_Qty: number;
  Item_Wt: number;
  Item_Um: string;
  Item_UOM: string;
  EDI_UOM: string;
  RetailPrice: number;
  SellingPrice: number;
  SAC_Flag: boolean;
  SAC_Qual: string;
  Cube_Length: number;
  Cube_Width: number;
  Cube_Height: number;
  Cube_Qty: number;
  Cube_UOM: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Item_rfid: boolean;
  locid: string;
  PackingClass: string;
  Item_Alt_No: string;
  Item_Config: string;
  Item_Size: string;
  Item_Color: string;
  Frt_Code: string;
  GTIN: string;
  EAN: string;
}
export interface IGetPackageLabelsResult {
  pkg_id: string;
  tp_partid: string;
  label_id: string;
}
export interface IGetTradeChunkResult {
  LOCATION_IN_RECORD_SET: number;
  PAGE_NUMBER: number;
  TP_PartID: string;
  TP_PartQ: string;
  TP_ID: string;
  TP_Name: string;
  TP_GroupID: string;
  TP_Asn: string;
  TP_ItemCode: string;
  TP_UseN1BY: string;
  TP_UseDept: string;
  TP_UseN1ST: string;
  TP_STQUAL: string;
  TP_In850: string;
  TP_In810: string;
  TP_Out850: string;
  TP_Out810: string;
  TP_864ID: string;
  TP_ShipDateQual: string;
  TP_CancelDateQual: string;
  Std_ID: string;
  Term_Days: string;
  Disc_Perc: string;
  Disc_Days: string;
  TP_VendID: string;
  TP_MapIn_850: string;
  TP_UCC128: string;
  TP_BarcodeType: string;
  TP_User1: string;
  TP_User2: string;
  TP_User3: string;
  TP_User4: string;
  TP_User5: string;
  TP_User6: string;
  TP_User7: string;
  TP_User8: string;
  TP_User9: string;
  TP_ItemCode2: string;
  TP_STformat: number;
  TP_SendQ: string;
  TP_SendID: string;
  TP_SendGID: string;
  TP_EleSep: number;
  TP_SubEleSep: number;
  TP_SegTerm: number;
  CreateFA: boolean;
  Create856: boolean;
  Van: string;
  UseAltAdr: boolean;
  ISA14Y: boolean;
  Exp_Date: Date;
  CipherKey: string;
  TP_Out753: boolean;
  CalcLineTax: boolean;
  UseCurrency: boolean;
  PrcMethod: number;
  SerLotFlag: boolean;
  TP_ShipDateQual1: string;
  TP_ShipDateQual2: string;
  TP_CancelDateQual1: string;
  TP_CancelDateQual2: string;
  PostSAC: boolean;
  Pseudo_ID: string;
  Pseudo_Segname: string;
  Pseudo_Qual_Elem_No: number;
  Pseudo_Qual_Elem_Value: string;
  Pseudo_Vendor_Elem_No: number;
  Pseudo_Vendor_Elem_Value: string;
  Pseudo_TPPartID: string;
  ForceSerLot: boolean;
  PO_Exclude_Types: string;
  PKG_ID: string;
  KitTypeID: number;
  PackSizeLookupSeq: string;
  TP_RepSep: number;
  TP_QuoteOrder: boolean;
  PSPOMethod: number;
  TP_STQUAL2: string;
  PostCommentsToAcct: boolean;
  CreditMemoAsInvoice: boolean;
  AddlAdrQual1: string;
  AddlAdrQual2: string;
  UsePackingClass: boolean;
  TransitDays: number;
  FrozenDays: number;
  ShipDlvPattern: string;
  TP_GS1Prefix: string;
  TP_UseGS1Prefix: boolean;
  Loc_Override: string;
  TP_Status: string;
}
export interface IGetTransObjectsWithCacheResult {
  DGID: string;
  TransID: string;
  TP_PartID: string;
  TDocName: string;
  FilenameLayout: string;
  PackageSeparately: boolean;
  UseControlNums: boolean;
  TransIDImportDate: Date;
  TransIDObj_Date: Date;
  TDocNameImportDate: Date;
  TDocNameObj_Date: Date;
}
export interface IIn810h {
  In810_ID: number;
  TP_PartID: string;
  InvoiceNo: string;
  InvoiceDate: Date;
  PurchaseOrder: string;
  FreightAmt: number;
  MiscAmt: number;
  TaxAmt: number;
  InvoiceAmt: number;
  Exp_Flag: string;
}
export interface IIn810l {
  In810_ID: number;
  Line_No: number;
  Int_Item_No: string;
  UPC: string;
  QtyInv: number;
  Price: number;
}
export interface IInboundALL {
  TP_PartID: string;
  Cust_PO: string;
  ReleaseNo: string;
  PO_Date: string;
  CTT_01: string;
  Exp_Flag: string;
  PO_ID: number;
  Cust_Ship_To: string;
  PO1_LineNo: string;
  Item_Qual: string;
  Item_No: string;
  Item_Qty: string;
  Item_Price: string;
  Item_UM: string;
  SAC_Flag: boolean;
  ID: number;
  vp_LineNo: string;
  docline: number;
  etline_no: number;
  sch_ship_date: string;
  Out850PID: string;
}
export interface IItem {
  Int_Item_No: string;
  Item_Desc: string;
  UPC: string;
  Def_Pack_Qty: number;
  Item_Wt: number;
  Item_Um: string;
  Item_UOM: string;
  EDI_UOM: string;
  RetailPrice: number;
  SellingPrice: number;
  SAC_Flag: boolean;
  SAC_Qual: string;
  Cube_Length: number;
  Cube_Width: number;
  Cube_Height: number;
  Cube_Qty: number;
  Cube_UOM: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Item_rfid: boolean;
  locid: string;
  PackingClass: string;
  Item_Alt_No: string;
  Item_Config: string;
  Item_Size: string;
  Item_Color: string;
  Frt_Code: string;
  GTIN: string;
  EAN: string;
}
export interface IItemCount {
  Count: number;
}
export interface IItemCustSAC {
  TP_PartID: string;
  Int_Item_No: string;
  SAC_Qual: string;
}
export interface IItemCust {
  Int_Item_No: string;
  TP_PartID: string;
  Cust_Item_Qual: string;
  Cust_Item_ID: string;
  Cust_Item_UM: string;
  Cust_Item_SizeWidth: string;
  Cust_Item_Pack_Qty: number;
  Cust_Item_UMout: string;
  Cust_Item_UMfactor: number;
  Cust_Item_UMoperin: string;
  Cust_Item_UMoperout: string;
  pricecode: string;
  price: number;
  locid: string;
  ICID: string;
  GenericRef: boolean;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Loc_Override: string;
}
export interface IItemCustAll {
  Int_Item_No: string;
  TP_PartID: string;
  Cust_Item_Qual: string;
  Cust_Item_ID: string;
  Cust_Item_UM: string;
  Cust_Item_SizeWidth: string;
  Cust_Item_Pack_Qty: number;
  Cust_Item_UMout: string;
  Cust_Item_UMfactor: number;
  Cust_Item_UMoperin: string;
  Cust_Item_UMoperout: string;
  pricecode: string;
  price: number;
  locid: string;
  ICID: string;
  GenericRef: boolean;
}
export interface IItemCustAllBackup {
  Int_Item_No: string;
  TP_PartID: string;
  Cust_Item_Qual: string;
  Cust_Item_ID: string;
  Cust_Item_UM: string;
  Cust_Item_SizeWidth: string;
  Cust_Item_Pack_Qty: number;
  Cust_Item_UMout: string;
  Cust_Item_UMfactor: number;
  Cust_Item_UMoperin: string;
  Cust_Item_UMoperout: string;
  pricecode: string;
  price: number;
  locid: string;
  ICID: string;
  GenericRef: boolean;
}
export interface IKitType {
  KitTypeID: number;
  KitTypeDesc: string;
}
export interface ILabel {
  Label_ID: string;
  Object_ID: number;
  ObjType: string;
  ObjName: string;
  ObjValue: string;
  ObjFontName: string;
  ObjFontSize: number;
  ObjFontBold: boolean;
  ObjLeft: number;
  ObjTop: number;
  ObjWidth: number;
  ObjHeight: number;
  bcObjName: string;
  bcCaption: string;
  bcType: number;
  bcHasText: boolean;
  bcPadding: string;
  bcPrepend: string;
  bcShowPrepend: boolean;
  bcRotation: number;
}
export interface ILabelSave {
  Label_ID: string;
  Object_ID: number;
  ObjType: string;
  ObjName: string;
  ObjValue: string;
  ObjFontName: string;
  ObjFontSize: number;
  ObjFontBold: boolean;
  ObjLeft: number;
  ObjTop: number;
  ObjWidth: number;
  ObjHeight: number;
  bcObjName: string;
  bcCaption: string;
  bcType: number;
  bcHasText: boolean;
  bcPadding: string;
  bcPrepend: string;
  bcShowPrepend: boolean;
  bcRotation: number;
}
export interface ILanguage {
  LanguageNo: number;
  LanguageCode: string;
  LanguageName: string;
  LanguageNameTranslated: string;
}
export interface ILanguageTerms {
  TermID: number;
  LanguageCode: string;
  Caption: string;
  Custom: string;
}
export interface ILastNum {
  All_Keys: number;
  Last_850: number;
  Last_810: number;
  Last_856: number;
  Last_UCC: number;
  Last_FA: number;
  Last_PC: number;
  Last_BOL: number;
  Last_RRC: number;
  Last_RRC_Ctrl_No: number;
  Last_Order_No: number;
}
export interface ILocation {
  locid: string;
  locname: string;
  locadd1: string;
  locadd2: string;
  locadd3: string;
  loccity: string;
  locstate: string;
  loczip: string;
  loccountry: string;
  locphone: string;
  locfax: string;
  locemail: string;
  loccontact: string;
  locediid: string;
  locrfid: boolean;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  TimeZoneId: number;
}
export interface IMailConfig {
  Mail_ID: number;
  Mail_SMTP_Server: string;
  Mail_SMTP_Port: number;
  Mail_SMTP_AuthReq: boolean;
  Mail_SMTP_User: string;
  Mail_SMTP_Pass: string;
  Mail_To: string;
  Mail_Cc: string;
  Mail_Bcc: string;
  Mail_From: string;
  Mail_Notify_Start: Date;
  Mail_Notify_Stop: Date;
  Mail_EnableSSL: boolean;
}
export interface IMap {
  eMap: string;
  eSeq: number;
  eName: string;
  eDate: Date;
  eDesc: string;
  eDocument: string;
  eDocID: string;
  eSegment: string;
  eHL: string;
  eArg1: string;
  eArg2: string;
  eArg3: string;
  eArg4: string;
  eArg5: string;
  eElement1: string;
  eElement2: string;
  eElement3: string;
  eElement4: string;
  eElement5: string;
  eElement6: string;
  eElement7: string;
  eElement8: string;
  eElement9: string;
  eElement10: string;
  eElement11: string;
  eElement12: string;
  eElement13: string;
  eElement14: string;
  eElement15: string;
}
export interface IMisc {
  Misc_ID: number;
  Seg_ID: number;
  TP_PartID: string;
  ICN: string;
  GCN: string;
  TCN: string;
  DocType: string;
  Segment: string;
  DateRecv: Date;
  DocStatus: string;
  DocRef: string;
}
export interface INetwork {
  Van_ID: string;
  VanExt: string;
  VanFTPsite: string;
  VanMailbox: string;
  VanPass: string;
  VanPassive: boolean;
  VanBinary: boolean;
  VanSdown: string;
  VanAppendCRLF: number;
  VanSdir: string;
  VanSup: string;
  VanType: number;
  UploadFilePattern: string;
  VanConfig: string;
}
export interface INote {
  NoteID: number;
  NoteLine: number;
  NoteText: string;
  DataKey: string;
  DataType: string;
}
export interface IOrderL {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  ShipTo_Xref: string;
  Order_Date: string;
  Ship_Date: string;
  Cust_PO: string;
  Cust_Dept: string;
  Loc_ID: string;
  Ship_To_ID: string;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  ShipFr_Name: string;
  ShipFr_Addr1: string;
  ShipFr_Add2: string;
  ShipFr_City: string;
  ShipFr_St: string;
  ShipFr_Zip: string;
  ShipFr_Country: string;
  Int_Item_No: string;
  Quantity: number;
  QtyPacked: number;
  Price: number;
  UnitofMeas: string;
  Exp_Flag: string;
  Stat_Flag: string;
  Order_Wt: number;
  Acct_Line_No: number;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  Ship_To_Address3: string;
  TP_PartID: string;
  Acct_Order_No: string;
  Ship_To_Country: string;
  Pick_Date: string;
}
export interface IOrderLIn {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  Order_Date: Date;
  Int_Item_No: string;
  Quantity: number;
  QtyRecvd: number;
  POPrice: number;
  DateLastRecvd: Date;
  QtyInv: number;
  DateLastInv: Date;
  Stat_Flag: string;
  Inv_Stat_Flag: string;
  Loc_ID: string;
}
export interface IOrderP {
  Order_No: number;
  Line_No: number;
  Pack_ID: number;
  Pack_Level: number;
  PackQty: number;
  Asn_ID: number;
  Box_ID: number;
  Pack_Wt: number;
  Mixed: string;
  TrackingNo: string;
  SSCC: string;
  PKG_ID: string;
  RFID: string;
}
export interface IOrderPIn {
  Order_No: string;
  Box_ID: string;
  PO1_LineNo: string;
  Lot: string;
  Int_Item_No: string;
  UPC: string;
  PackQty: number;
  Asn_ID: number;
  TrackingNo: string;
  Stat_Flag: string;
  LotExp: string;
}
export interface IOrderS {
  Order_No: number;
  Line_No: number;
  Pack_ID: number;
  Pack_Level: number;
  Qty: number;
  SerLot_No: string;
  Box_ID: number;
  MfgDate: Date;
  ExpDate: Date;
  UserDate1: Date;
  UserDate2: Date;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
}
export interface IOrderS2 {
  Order_No: number;
  Line_No: number;
  Box_ID: number;
  Qty: number;
  SerLot_No: string;
}
export interface IOrderX {
  Order_No: number;
  Line_No: number;
  TP_ID: string;
  Order_Date: string;
  Ship_Date: string;
  Cust_PO: string;
  Loc_ID: string;
  Ship_Via_ID: string;
  ShipInstr_1: string;
  ShipInstr_2: string;
  CustRating: string;
  Ship_To_Name: string;
  Ship_To_Address1: string;
  Ship_To_Address2: string;
  Ship_To_City: string;
  Ship_To_St: string;
  Ship_To_Zip: string;
  Ship_To_Country: string;
  Int_Item_No: string;
  Quantity: number;
  UnitofMeas: string;
  Exp_Flag: string;
  Stat_Flag: string;
}
export interface IOut850 {
  ID: number;
  TP_ID: string;
  PO_NO: string;
  PO_Date: string;
  PO_ID: string;
  ShipTo_Xref: string;
  ShipToContact: string;
  ShipToName: string;
  ShipToName2: string;
  ShipToAddress: string;
  ShipToAddress2: string;
  ShipToCity: string;
  ShipToState: string;
  ShipToZip: string;
  Cust_Dept_Code: string;
  Ship_Date: string;
  Cancel_Date: string;
  Int_Item_No: string;
  Item_Qty: string;
  Item_UM: string;
  Item_Price: string;
  PostStatus: string;
  ShipMethod: string;
  ShipToCountry: string;
  PO1_LineNo: string;
  vp_LineNo: string;
  docline: number;
  etline_no: number;
  ShipTo_DC_Xref: string;
  Loc_Override: string;
  Status: string;
  BatchID: string;
}
export interface IOut850Old {
  ID: number;
  TP_ID: string;
  PO_NO: string;
  PO_Date: string;
  PO_ID: string;
  ShipTo_Xref: string;
  ShipToContact: string;
  ShipToName: string;
  ShipToName2: string;
  ShipToAddress: string;
  ShipToAddress2: string;
  ShipToCity: string;
  ShipToState: string;
  ShipToZip: string;
  Cust_Dept_Code: string;
  Ship_Date: string;
  Cancel_Date: string;
  Int_Item_No: string;
  Item_Qty: string;
  Item_UM: string;
  Item_Price: string;
  PostStatus: string;
  ShipMethod: string;
  ShipToCountry: string;
  PO1_LineNo: string;
  vp_LineNo: string;
  docline: number;
  etline_no: number;
  ShipTo_DC_Xref: string;
}
export interface IPackage {
  PKG_ID: string;
  PKG_Desc: string;
  PKG_EDI_Qual: string;
  PKG_Cube_Uom: string;
  PKG_Length: number;
  PKG_Width: number;
  PKG_Height: number;
  PKG_Tare_Wt: number;
  PKG_Tare_Wt_Uom: string;
  PKG_Units_Per_Parent: number;
  Def_Pack_Level: number;
  PKG_Returnable: boolean;
  PKG_Price: number;
  PKG_Type: number;
  PKG_AppIdentifier: string;
  PKG_ExtDigit: number;
  Label_ID: string;
}
export interface IPackageLabel {
  PKG_ID: string;
  TP_PartID: string;
  Label_ID: string;
  PLID: string;
}
export interface IPartner {
  TP_PartID: string;
  DGID: string;
  PartnerQual: string;
  PartnerID: string;
  GroupID: string;
  Van_ID: string;
  TestProdInd: string;
  CipherKey: string;
}
export interface IPartnerDocGroup {
  Doc_Group: string;
  TP_PartID: string;
  DGID: string;
  PartnerQual: string;
  PartnerID: string;
  GroupID: string;
  Van_ID: string;
  TestProdInd: string;
  CipherKey: string;
}
export interface IPartnerSave {
  TP_PartID: string;
  DGID: string;
  PartnerQual: string;
  PartnerID: string;
  GroupID: string;
  Van_ID: string;
  MapIn: string;
  MapOut: string;
  TestProdInd: string;
  CipherKey: string;
  FilenameLayout: string;
}
export interface IPhraseCustomization {
  ID: number;
  Keyword: string;
  Culture: string;
  Phrase: string;
}
export interface IPlanSchedAdd {
  PSAID: string;
  PSGID: string;
  locname: string;
  locadd1: string;
  locadd2: string;
  locadd3: string;
  loccity: string;
  locstate: string;
  loczip: string;
  loccountry: string;
}
export interface IPlanSchedExt {
  PSEID: string;
  PSGID: string;
  ext1: string;
  ext2: string;
  ext3: string;
  ext4: string;
  ext5: string;
  ext6: string;
  ext7: string;
  ext8: string;
  ext9: string;
  ext10: string;
}
export interface IPlanSchedFlt {
  PSFID: string;
  PSIID: string;
  dtstamp: Date;
  userid: string;
  machineid: string;
  PID: string;
}
export interface IPlanSchedGrp {
  PSGID: string;
  PSIID: string;
  psglevel: number;
  psgtype: string;
  psgdocline: number;
  pardocline: number;
  psgqual: string;
  psgtext: string;
}
export interface IPlanSchedHdr {
  PSHID: string;
  tp_partid: string;
  psdoctype: string;
  tspurposecode: string;
  pstypequal: string;
  psqtyqual: string;
  pstypecode: string;
  purchaseorder: string;
  releaseno: string;
  contractno: string;
  hrznstartdate: string;
  hrznenddate: string;
  pscreatedate: string;
  psupddate: string;
  hdrdocline: number;
  XMLID: string;
}
export interface IPlanSchedItm {
  PSIID: string;
  PSHID: string;
  VPID: number;
  processtype: string;
  processdate: Date;
  itmdocline: number;
  fcdocline: number;
  fcqual: string;
  fctqual: string;
  fcqty: number;
  fcdate1: string;
  fcdate2: string;
  fcdtqual: string;
  fcdtid: string;
  itemuom: string;
  importdate: Date;
  status: string;
  price: number;
  shpqtyqual: string;
  shpqty: number;
  shpdtqual: string;
  shpdate1: string;
  shpdate2: string;
  engchangelevel: string;
}
export interface IPlanSchedPO {
  tp_partid: string;
  beg_01: string;
  beg_02: string;
  beg_03: string;
  beg_04: string;
  beg_05: string;
  beg_06: string;
  ctt_01: string;
  exp_flag: string;
  sdq_flag: string;
  cur_02: number;
  importdate: Date;
  exportdate: number;
  misc_id: number;
  shiptoid: string;
  VPID: number;
  po1_02: number;
  po1_03: string;
  po1_04: number;
  po1_05: string;
  po1_06: string;
  po1_07: string;
  po1_ediqty: number;
  po1_edium: string;
  po1_ediline: string;
  docline: number;
  packsize: number;
  etline_no: number;
  fcdate1: string;
  fcdate2: string;
  PSHID: string;
  PSIID: string;
}
export interface IPOChangeLog {
  PO_ID: number;
  PO1_LineNo: string;
  ShipTo_ID: string;
  PID: string;
  LogDate: Date;
  DataArea: string;
  DataAction: string;
  DataValue: string;
  POCID: string;
}
export interface IProcess {
  procid: string;
  procname: string;
}
export interface IProcessName {
  trigid: number;
  procid: string;
  seqno: number;
  timing: string;
  dataarea: string;
  triggertype: number;
  triggeraction: string;
  actionfocus: number;
  inactive: boolean;
  subprocid: string;
  Expr1: string;
  procname: string;
  Expr2: string;
  Expr3: string;
  subprocname: string;
}
export interface IProcessSub {
  procid: string;
  subprocid: string;
  subprocname: string;
}
export interface IProcessTrigger {
  trigid: number;
  procid: string;
  seqno: number;
  timing: string;
  dataarea: string;
  triggertype: number;
  triggeraction: string;
  actionfocus: number;
  inactive: boolean;
  subprocid: string;
}
export interface IProdActivity {
  PA_ID: number;
  TP_PartID: string;
  N102: string;
  N104: string;
  ItemID: string;
  sDate: Date;
  eDate: Date;
  ItemQual: string;
  CreateDate: Date;
  VPID: number;
  Misc_ID: number;
}
export interface IProdActivityCode {
  ZA01: string;
  ZADesc: string;
}
export interface IProdActivityDetail {
  PA_ID: number;
  PAD_ID: number;
  ZA01: string;
  Loc: string;
  Qty: number;
  Uom: string;
  Price: number;
  Type: string;
}
export interface IProdSeqGrp {
  PSGID: string;
  PSIID: string;
  PSHID: string;
  psglevel: number;
  psgtype: string;
  psgdocline: number;
  pardocline: number;
  psgqual: string;
  psgtext: string;
}
export interface IProdSeqHdr {
  VPID: number;
  PSHID: string;
  tp_partid: string;
  psdoctype: string;
  tspurposecode: string;
  pstypequal: string;
  psqtyqual: string;
  pstypecode: string;
  purchaseorder: string;
  releaseno: string;
  contractno: string;
  hrznstartdate: string;
  hrznenddate: string;
  pscreatedate: string;
  psupddate: string;
  hdrdocline: number;
  XMLID: string;
}
export interface IProdSeqItm {
  PSIID: string;
  PSHID: string;
  VPID: number;
  processtype: string;
  processdate: Date;
  itmdocline: number;
  fcdocline: number;
  fcqual: string;
  fctqual: string;
  fcqty: number;
  fcdate1: string;
  fcdate2: string;
  fcdtqual: string;
  fcdtid: string;
  itemuom: string;
  importdate: Date;
  status: string;
  price: number;
  custitemno: string;
  po: string;
  poline: string;
  shipto: string;
  shipfrom: string;
  supplier: string;
  psdoctype: string;
  tp_partid: string;
  tp_id: string;
  releaseno: string;
  dlvdate: string;
  shipdate: string;
  dock: string;
  linefeed: string;
  vin: string;
  jobseqno: string;
  jobno: string;
  laborgrp: string;
  commodity: string;
  linesetno: string;
  storageid: string;
  assembly: string;
  engchg: string;
  chassissn: string;
  color: string;
  position: string;
  ctlno: string;
  producttype: string;
  kanban: string;
  custorderno: string;
  proddesc: string;
  pscreatedate: string;
  GSSenderID: string;
}
export interface IProdSeqPO {
  tp_partid: string;
  beg_01: string;
  beg_02: string;
  beg_03: string;
  beg_04: string;
  beg_05: string;
  beg_06: string;
  ctt_01: string;
  exp_flag: string;
  sdq_flag: string;
  cur_02: number;
  importdate: Date;
  exportdate: number;
  misc_id: number;
  shiptoid: string;
  shipfromid: string;
  supplierid: string;
  dock: string;
  po: string;
  poline: string;
  linefeed: string;
  vin: string;
  jobseqno: string;
  jobno: string;
  laborgrp: string;
  commodity: string;
  linesetno: string;
  storageid: string;
  assembly: string;
  engchg: string;
  chassissn: string;
  color: string;
  position: string;
  ctlno: string;
  producttype: string;
  kanban: string;
  custorderno: string;
  proddesc: string;
  VPID: number;
  po1_02: number;
  po1_03: string;
  po1_04: number;
  po1_05: string;
  po1_06: string;
  po1_07: string;
  po1_ediqty: number;
  po1_edium: string;
  po1_ediline: string;
  docline: number;
  packsize: number;
  etline_no: number;
  fcdate1: string;
  fcdate2: string;
  PSHID: string;
  PSIID: string;
}
export interface IProductActivity {
  ProductActID: number;
  EdiID: string;
  RptFromCompany: string;
  RptFromIDCode: string;
  RptFromStoreName: string;
  RptFromAddress1: string;
  RptFromAddress2: string;
  RptFromCity: string;
  RptFromState: string;
  RptFromZip: string;
  RptFromCountry: string;
  DestIDCode: string;
  DestCompany: string;
  DestStoreName: string;
  DestAddress1: string;
  DestAddress2: string;
  DestCity: string;
  DestState: string;
  DestZip: string;
  DestCountry: string;
  StartDate: Date;
  EndDate: Date;
  ItemQual: string;
  TPItemNumber: string;
  ItemNumber: string;
  ItemDesc: string;
  ActivityCode: string;
  ActivityDesc: string;
  Uom: string;
  AccountingUOM: string;
  Qty: number;
  Factor: number;
  NetQty: number;
  UnitCostPrice: number;
}
export interface IRibbonControl {
  ControlID: number;
  GroupID: number;
  ParentControlID: number;
  Caption: string;
  ControlOrder: number;
  Type: string;
  MethodCall: string;
  MethodParams: string;
  DescriptionText: string;
  ImageFile: string;
  Visible: boolean;
  Enabled: boolean;
  KeyboardTip: string;
  TooltipText: string;
  Category: string;
  BeginGroup: boolean;
  Checked: boolean;
  Width: number;
  Height: number;
  ShortCut: string;
  func_code: string;
}
export interface IRibbonControlUser {
  ID: number;
  ControlID: number;
  managedID: number;
  UserEnabled: boolean;
  UserVisible: boolean;
}
export interface IRibbonGroup {
  GroupID: number;
  TabID: number;
  Caption: string;
  GroupOrder: number;
  IconID: number;
  Visible: boolean;
  AllowReduce: boolean;
  ControlsGrouping: boolean;
  imageFile: string;
  GroupColor: string;
}
export interface IRibbonGroupUser {
  ID: number;
  GroupID: number;
  managedID: number;
  UserEnabled: boolean;
  UserVisible: boolean;
}
export interface IRibbonShortcut {
  ShortCutID: number;
  TabID: number;
  ShortcutOrder: number;
  Caption: string;
  ImageFile: string;
  Visible: boolean;
  Enabled: boolean;
}
export interface IRibbonShortcutUser {
  ID: number;
  TabID: number;
  managedID: number;
  UserEnabled: boolean;
  UserVisible: boolean;
}
export interface IRibbonTab {
  TabID: number;
  FormName: string;
  Caption: string;
  TabOrder: number;
  Visible: boolean;
  Enabled: boolean;
  KeyboardTip: string;
  FriendlyName: string;
}
export interface IRibbonTab1 {
  TabID: number;
  FormName: string;
  Caption: string;
  TabOrder: number;
  Visible: boolean;
  Enabled: boolean;
  KeyboardTip: string;
  FriendlyName: string;
  UserEnabled: boolean;
  UserVisible: boolean;
}
export interface IRibbonTabUser {
  ID: number;
  TabID: number;
  managedID: number;
  UserEnabled: boolean;
  UserVisible: boolean;
}
export interface IRouteInstr {
  RI_ID: number;
  Seq_No: number;
  Ref_ID: string;
  FullRRC_Ctrl_No: string;
  Cust_PO: string;
  PU_Appt: string;
  PU_Date: Date;
  SCAC: string;
  Resp_RRC: string;
  Trans_Lvl_Req: string;
  Multi_Stop: string;
  Stop_Seq: string;
  ShipTo_ID: string;
  Asn_ID: number;
  Misc_ID: number;
}
export interface IRRC {
  RRC_ID: number;
  TP_PartID: string;
  Rts_Date: Date;
  Stat_Flag: string;
  Exp_Flag: string;
  AckID: string;
  GCN: string;
  TCN: string;
  VPIDFA: number;
}
export interface IRRCDetail {
  RRC_ID: number;
  Order_No: number;
  RRC_Ctrl_No: number;
  FullRRC_Ctrl_No: string;
}
export interface ISent {
  Sent_ID: number;
  Seg_ID: number;
  TP_PartID: string;
  ICN: string;
  GCN: string;
  TCN: string;
  DocType: string;
  Segment: string;
  DateSent: Date;
  DocStatus: string;
  DocRef: string;
  GCNUnpadded: string;
  TCNUnpadded: string;
}
export interface IShippedTo {
  TP_PartID: string;
  cusno: string;
  TP_Name: string;
  shiptoid: string;
  ShipTo_Name: string;
  itemid: string;
  purchaseorderno: string;
  cmqty: number;
}
export interface IShippedToName {
  TP_PartID: string;
  cusno: string;
  TP_Name: string;
  shiptoid: string;
  ShipTo_Name: string;
  itemid: string;
  purchaseorderno: string;
  cmqty: number;
}
export interface IShippedToTrade {
  TP_PartID: string;
  TP_Name: string;
  cusno: string;
  shiptoid: string;
  itemid: string;
  purchaseorderno: string;
  shipdate: string;
  reason: string;
  reference: string;
  userid: string;
  machineid: string;
  qty: number;
  cm: number;
}
export interface IShippedToTradeName {
  TP_PartID: string;
  TP_Name: string;
  cusno: string;
  shiptoid: string;
  itemid: string;
  purchaseorderno: string;
  shipdate: string;
  reason: string;
  reference: string;
  userid: string;
  machineid: string;
  qty: number;
  cm: number;
}
export interface IShipTo {
  TP_PartID: string;
  ShipTo_ID: string;
  ShipTo_Xref: string;
  ShipTo_Name: string;
  ShipTo_Address: string;
  ShipTo_Address2: string;
  ShipTo_City: string;
  ShipTo_State: string;
  ShipTo_Zip: string;
  ShipTo_Country: string;
  ShipTo_CustID: string;
  ShipTo_DC: string;
  ShipTo_ShipDateQual: string;
  ShipTo_StoreName: string;
  ShipTo_Carrier: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
  ShipTo_rfid: boolean;
  ShipTo_GroupID: string;
  TransitDays: number;
  FrozenDays: number;
  ShipDlvPattern: string;
  Loc_Override: string;
}
export interface IShipVia {
  Ship_Via_ID: string;
  Ship_Via_Name: string;
  SCAC: string;
  Ship_Via_Type: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
}
export interface IShipViaCust {
  Ship_Via_ID: string;
  TP_PartID: string;
  Cust_Ship_Via_ID: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
}
export interface IShipViaCustTrade {
  TP_Name: string;
  Ship_Via_ID: string;
  TP_PartID: string;
  Cust_Ship_Via_ID: string;
  User1: string;
  User2: string;
  User3: string;
  User4: string;
  User5: string;
}
export interface IStandard {
  Std_ID: string;
  Std_Pos10: string;
  Std_Pos19: string;
  Std_Pos24: string;
  Std_Pos25: string;
  Std_Pos26: string;
  Std_Pos305: string;
  Std_Pos303: string;
}
export interface IStdPosition {
  Std_ID: string;
  Doc_ID: string;
  Seg_ID: string;
  Ele_No: number;
  Ele_Pos: number;
}
export interface ITax {
  TaxCode: string;
  TaxRate: number;
  Tax_Xref: string;
  EDICode: string;
}
export interface ITaxCode {
  Tax_Xref: string;
  TP_PartID: string;
  EDI_TaxQual: string;
  EDI_TaxCode: string;
  EDI_TaxDesc: string;
}
export interface Itemp850 {
  ID: number;
  TP_ID: string;
  PO_NO: string;
  PO_Date: string;
  PO_ID: string;
  ShipTo_Xref: string;
  ShipToContact: string;
  ShipToName: string;
  ShipToName2: string;
  ShipToAddress: string;
  ShipToAddress2: string;
  ShipToCity: string;
  ShipToState: string;
  ShipToZip: string;
  Cust_Dept_Code: string;
  Ship_Date: string;
  Cancel_Date: string;
  Int_Item_No: string;
  Item_Qty: string;
  Item_UM: string;
  Item_Price: string;
  PostStatus: string;
  ShipMethod: string;
  ShipToCountry: string;
  PO1_LineNo: string;
  vp_LineNo: string;
  docline: number;
  etline_no: number;
  ShipTo_DC_Xref: string;
}
export interface ITempAsnToHold {
  machinename: string;
  username: string;
  LogDate: Date;
  ASN_ID: number;
}
export interface ITempDocsToHold {
  machinename: string;
  username: string;
  LogDate: Date;
  VPID: number;
  TransID: string;
  DGID: string;
}
export interface ITempFilesToTable {
  rowid: number;
  procID: string;
  queryID: string;
  filepath: string;
  filename: string;
}
export interface ITempOrdersToHold {
  machinename: string;
  username: string;
  LogDate: Date;
  PO_ID: number;
}
export interface ITerm {
  Terms_ID: string;
  TP_PartID: string;
  Cust_Terms_ID: string;
  TermsDesc: string;
}
export interface ITimeZone {
  Id: number;
  TimeCodeStd: string;
  TimeCodeDst: string;
  TimeZone1: string;
  TimeAbr: string;
  GMTOffset: number;
  DST: boolean;
}
export interface ITLECode {
  CDID: string;
  Name: string;
}
export interface ITLEFlow {
  TLEFID: number;
  FlowDesc: string;
  FlowOrder: number;
  Active: boolean;
  Restricted: boolean;
}
export interface ITLEGen {
  TLEGID: number;
  GenParDataType: string;
  GenParDirection: string;
  GenChildDataType: string;
  GenChildDirection: string;
  GenStoredProc: string;
  Active: boolean;
  Restricted: boolean;
}
export interface ITLEGrp {
  TLEGRIP: number;
  GrpDataType: string;
  GrpDirection: string;
  GrpTLEFID: number;
  GrpName: string;
  GrpFlowOrder: number;
  Active: boolean;
  Restricted: boolean;
}
export interface ITLEIndex {
  VPID: number;
  DGID: string;
  Direction: string;
  XPathIndex: number;
  Value: string;
}
export interface ITLELink {
  TLELID: number;
  ParDataType: string;
  ParDataKey: string;
  ParDirection: string;
  ChildDataType: string;
  ChildDataKey: string;
  ChildDirection: string;
  CreatedDate: Date;
  ParentID: string;
  ChildID: string;
}
export interface ITLELog {
  TLELGID: number;
  DataType: string;
  DataKey: string;
  Direction: string;
  RelDataType: string;
  RelDirection: string;
  CreatedDate: Date;
}
export interface ITLEMaster {
  DTID: number;
  DKID: number;
  DGID: string;
  Direction: string;
  DValue: string;
  PValue: string;
  TP_PartID: string;
  TLEID: number;
}
export interface ITLEStructure {
  CDID: string;
  Position: number;
  DGID: string;
  Direction: string;
  STRID: number;
}
export interface ITLETable {
  DTID: number;
  Name: string;
}
export interface ITLEXml {
  TLEXID: number;
  TP_PartID: string;
  DataType: string;
  Direction: string;
  RelDataType: string;
  RelDirection: string;
  XPathIndex: number;
  XPath: string;
  Active: boolean;
  Restricted: boolean;
}
export interface ITrade {
  TP_PartID: string;
  TP_PartQ: string;
  TP_ID: string;
  TP_Name: string;
  TP_GroupID: string;
  TP_Asn: string;
  TP_ItemCode: string;
  TP_UseN1BY: string;
  TP_UseDept: string;
  TP_UseN1ST: string;
  TP_STQUAL: string;
  TP_In850: string;
  TP_In810: string;
  TP_Out850: string;
  TP_Out810: string;
  TP_864ID: string;
  TP_ShipDateQual: string;
  TP_CancelDateQual: string;
  Std_ID: string;
  Term_Days: string;
  Disc_Perc: string;
  Disc_Days: string;
  TP_VendID: string;
  TP_MapIn_850: string;
  TP_UCC128: string;
  TP_BarcodeType: string;
  TP_User1: string;
  TP_User2: string;
  TP_User3: string;
  TP_User4: string;
  TP_User5: string;
  TP_User6: string;
  TP_User7: string;
  TP_User8: string;
  TP_User9: string;
  TP_ItemCode2: string;
  TP_STformat: number;
  TP_SendQ: string;
  TP_SendID: string;
  TP_SendGID: string;
  TP_EleSep: number;
  TP_SubEleSep: number;
  TP_SegTerm: number;
  CreateFA: boolean;
  Create856: boolean;
  Van: string;
  UseAltAdr: boolean;
  ISA14Y: boolean;
  Exp_Date: Date;
  CipherKey: string;
  TP_Out753: boolean;
  CalcLineTax: boolean;
  UseCurrency: boolean;
  PrcMethod: number;
  SerLotFlag: boolean;
  TP_ShipDateQual1: string;
  TP_ShipDateQual2: string;
  TP_CancelDateQual1: string;
  TP_CancelDateQual2: string;
  PostSAC: boolean;
  Pseudo_ID: string;
  Pseudo_Segname: string;
  Pseudo_Qual_Elem_No: number;
  Pseudo_Qual_Elem_Value: string;
  Pseudo_Vendor_Elem_No: number;
  Pseudo_Vendor_Elem_Value: string;
  Pseudo_TPPartID: string;
  ForceSerLot: boolean;
  PO_Exclude_Types: string;
  PKG_ID: string;
  KitTypeID: number;
  PackSizeLookupSeq: string;
  TP_RepSep: number;
  TP_QuoteOrder: boolean;
  PSPOMethod: number;
  TP_STQUAL2: string;
  PostCommentsToAcct: boolean;
  CreditMemoAsInvoice: boolean;
  AddlAdrQual1: string;
  AddlAdrQual2: string;
  UsePackingClass: boolean;
  TransitDays: number;
  FrozenDays: number;
  ShipDlvPattern: string;
  TP_GS1Prefix: string;
  TP_UseGS1Prefix: boolean;
  Loc_Override: string;
  TP_Status: string;
}
export interface ITradeKit {
  TP_Name: string;
  TP_PartQ: string;
  TP_PartID: string;
  TP_GroupID: string;
  TP_ID: string;
  KitTypeID: number;
  KitTypeDesc: string;
  TP_In850: string;
  TP_Out850: string;
  TP_Asn: string;
  description: string;
}
export interface ITradeMapExclude {
  TP_PartID: string;
  Invoice: boolean;
  Asn: boolean;
}
export interface ITransDef {
  TransID: string;
  TransDesc: string;
  UseTempTable: boolean;
  TempLocation: string;
}
export interface ITransObject {
  TOID: string;
  DGID: string;
  TransID: string;
  TP_PartID: string;
  TDocName: string;
  FilenameLayout: string;
  PackageSeparately: boolean;
  UseControlNums: boolean;
}
export interface ITransObjectDocGroup {
  Doc_Group: string;
  TOID: string;
  DGID: string;
  TransID: string;
  TP_PartID: string;
  TDocName: string;
  FilenameLayout: string;
  PackageSeparately: boolean;
  UseControlNums: boolean;
}
export interface IUploadLog {
  UploadDate: Date;
  UploadFile: string;
  FileLength: number;
  UploadLength: number;
  HashCode: string;
  UploadStatus: number;
  PID: string;
  ULID: string;
}
export interface IUserToTP {
  id: number;
  TP_PartID: string;
  AppUserId: number;
}
export interface IVPMethodsToTask {
  ID: number;
  MethodCall: string;
  MethodParams: string;
  Descr1: string;
  Descr2: string;
  Descr3: string;
  TaskName: string;
  UseScheduler: boolean;
}
export interface IXMLDoc {
  CreatedDate: Date;
  TP_PartID: string;
  DGID: string;
  Config: boolean;
  URECID: string;
  Exp_Flag: string;
  ExportDate: Date;
  XMLText: string;
  XMLID: string;
  Misc_ID: number;
  XMLRef: string;
  GCN: string;
  TCN: string;
  Direction: string;
  VPID: number;
  AckID: string;
  VPIDFA: number;
}
export interface IXMLDocDirection {
  XMLID: string;
  XMLText: string;
  Direction: string;
  Misc_ID: number;
  Config: boolean;
  TP_PartID: string;
  TP_Name: string;
  DGID: string;
  Doc_Group: string;
  XMLRef: string;
}
export interface IXMLDocEmailView {
  ID: number;
  Partner: string;
  Document_Group: string;
  Reference: string;
  Status: string;
  Direction: string;
  Export_Date: Date;
  GCN: string;
}
export interface IXMLDocView {
  ID: number;
  Partner: string;
  Document_Group: string;
  Reference: string;
  Status: string;
  Direction: string;
  Export_Date: Date;
  GCN: string;
}
export interface ICompanySet {
  Company_ID: number;
  YourCompany_Name: string;
  YourCompany_DispName: string;
  YourCompany_Qual: string;
  YourCompany_ID: string;
  YourCompany_Duns: number;
  YourCompany_Add1: string;
  YourCompany_Add2: string;
  YourCompany_City: string;
  YourCompany_State: string;
  YourCompany_Zip: string;
  YourCompany_Country: string;
  YourCompany_BillName: string;
  YourCompany_BillAdd1: string;
  YourCompany_BillAdd2: string;
  YourCompany_BillCity: string;
  YourCompany_BillState: string;
  YourCompany_BillZip: string;
  YourCompany_BillCountry: string;
  YourCompany_Contact: string;
  YourCompany_Phone: string;
  YourCompany_Email: string;
  YourMan_ID: string;
  YourContType: string;
  Acct_Package: string;
  CO_UseGroupID: boolean;
  CO_Multi: boolean;
  ACCTdirect: string;
  EDIdirect: string;
  vpEDIdirect: string;
  vpSharedirect: string;
  Exp_Date: Date;
  SupExp: Date;
  AcctVer: string;
  vpEDIver: string;
  dbVer: number;
  DecSize: number;
  AcctCompID: string;
  ODBClogin: string;
  ODBCpass: string;
  DatabaseName: string;
  vpEDIDatabaseName: string;
  ServerIP: string;
  vpEDIServerIP: string;
  ServerPort: number;
  UseISA: boolean;
  UpdateASN: boolean;
  VerifyAcctInvTotal: boolean;
  UseOldMenu: boolean;
  Licenses: number;
  LinkDelDate: boolean;
  OEM_Layout: string;
  CanGstTax_ID: string;
  FedTax_ID: string;
  EurTax_ID: string;
  Lang_ID: string;
  Axa_UsePackingList: boolean;
  PostItemSeq: number;
  MapServer: boolean;
  Primary_MapServer: string;
  Backup_MapServer: string;
  MacBarcodeInterface: boolean;
  SecurityEnabled: boolean;
  mod850: boolean;
  mod852: boolean;
  mod856: boolean;
  mod940: boolean;
  mod830: boolean;
  mod862: boolean;
  mod820: boolean;
  mod870: boolean;
  mod810i: boolean;
  mod856i: boolean;
  mod855: boolean;
  mod753: boolean;
  AxaptaExpandedPO: number;
  AxaptaSalesTypes: string;
  mWriteToUserFlds: boolean;
  AuthType: number;
  ConnString: string;
  AcctPackageID: string;
  TestServer: boolean;
  AcctSqlObjOwnr: string;
  AutoHoldDoc: boolean;
  DocCaching: boolean;
  WMSImportType: number;
  wfUser: string;
  eODBCpass: string;
  PurgePass: string;
  YourCompany_EDIContact: string;
  YourCompany_EDIPhone: string;
  YourCompany_EDIEmail: string;
  WSAuthority: string;
  WSResource: string;
  WSEndpoint: string;
  WSClientID: string;
  WSLogin: string;
  WSPassword: string;
}

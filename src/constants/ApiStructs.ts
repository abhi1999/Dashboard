export enum enumImportConfigAction {Insert,Delete,Override};
export enum enumTransformationType {Map,Loop,Token};
export enum enumTransformationUpdateStatus {Newer,Same,NotFound}
export enum enumDBAuthenticationTypes {Integrated,OLEDB,TCPIP,ODBC,ConnStr};

export interface ICompanyResponse {DbServer:string,TimeoutSeconds:number};
export interface IPhraseCustomizationResponse {Keyword:string,Phrase:string};
export interface IFactoryParameters {HostName:string,VirtualHost:string,NetworkRecoveryInterval:number,UserName:string,Password:string};
export interface IImportConfigResults {Added:number,Updated:number,Deleted:number};
export interface IImportConfigParameters {Action:enumImportConfigAction,TP_PartID:string,XMLIDList:string[]};
export interface IReportHTMLParameters {ReportTitle:string,ReportHeader:string,ReportSubHeader:string,ReportQuery:string,SqlParameters:any[]};
export interface IReportResult {Status:number,Report:string};
export interface ISSRSReportResult {ReportName:string,ReportFile:string,DocType:string,SSRSUrl:string,SSRSDirectory:string,ReportMode:string,EDIConnectionString:string};
export interface IMapSettings {Type:enumTransformationType,Status:enumTransformationUpdateStatus,MapName:string};
export interface IVb6InteroptValues {UserName:string,HostName:string,ItemImportSQL:string,YourAcctPackage:string,YourCompany_AcctCompID:string,CompanyID:number,YourCompany_ID:string,YourCompany_Qual:string,YourCompany_Name:string,AxaptaExpandedPO:number,EDIConnectionStringVB6:string,EDIDatabaseName:string,ERPSqlObjectOwner:string,ERPServerIP:string,ERPDatabaseName:string,ERPConnectionStringVB6:string,ERPConnectionString:string,ERPPackageID:string,EDIConnectionString:string,CompanyConnectionString:string,CompanyConnectionStringVB6:string,EDIDirectory:string,ERPFTPDirectory:string,EDISharedDirectory:string,PrimaryMapServer:string,BackupMapServer:string,Mod852:boolean,MapServer:boolean,WFUser:string,WFConnectionStringVB6:string,WFConnectionString:string,ProcessID:string,AutoHoldDoc:boolean,DecSize:number};
export interface ILanguageAndStatus {LanguageNo:number,LanguageCode:string,LanguageName:string,LanguageNameTranslated:string,Installed:number,DisplayedName:string,IsChecked:boolean};
export interface IJsonTuple {Item1:string,Item2:string,Item3:string};
export interface ISetupDBParameters {ServerIP:string,ServerPort:number,DatabaseName:string,AuthenticationType:enumDBAuthenticationTypes,Username:string,EncodedPassword:string,TrustServerCertificate:boolean,Company_ID:number};
export interface IKnownStandardsInformation {IsChecked:boolean,StandardID:string,ReleaseNumber:string,FileName:string,FileSize:number,Downloaded:Date,Installed:boolean,IsInstalling:boolean,IsDownloading:boolean,JobStatus:any};
export interface IKSIReturn {Data:IKnownStandardsInformation[],Count:number};
export interface IKnownStandardsStatusReturn {ProcessID:number,PID:string,IsInstalling:boolean,IsDownloading:boolean};
export interface ISSRSReportSetup {ID:number,KeyField:string,TP_PartID:string,DocType:string,DGID:string};
export interface ISSRSReportParameters {ReportFile:string,SubReportFile:string,Parameters:any[],ReportName:string,ReportServer:string};
export interface ICloneTradingPartner {ISA:string,Qual:string,Name:string,DestAcct:string,GS:string};
export interface IUserDefinedFields {Caption:string,Default:string};
export interface ITLEGetFALinkReturn {VPID:number,linkType:string};
export interface IRMQEntry {QueueSentFrom:string,Message:string};
export interface IOPDReturn {Order_No:number,Acct_Order_No:string,Order_Date:string,Cust_PO:string};
export interface IAppRolePermissionReturn {Func_Code:string,Func_Name:string,Assigned:number,GVis:number};
export interface IApiListUsersNotInRoleReturn {Login_Name:string,ID:number,RoleID:number,RoleName:string};
export interface IUserPasswordRole {user:string,password:string,role:number};
export interface IstandardsList {Name:string,RelNo:string,Count:number};
export interface IDomainLoginParameters {User:string,Password:string,Domain:string};
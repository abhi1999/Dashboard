import { IApiDocsReceivedBaseView } from '../edidb'
export class CApiDocsReceivedBaseView implements IApiDocsReceivedBaseView {
    public Misc_ID:number = 0;
    public TP_PartID:string = '';
    public DocType:string = '';
    public DocRef:string = '';
    public DateRecv:Date;
    public DocStatus:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public ErrorID:number = 0;
    public TP_Name:string = '';
    public TCN:string = '';
    public Emailed:boolean;
    public constructor(init?:Partial<CApiDocsReceivedBaseView>) { Object.assign(this, init); }
}
export const IApiDocsReceivedBaseView_TP_PartID_length = 30;
export const IApiDocsReceivedBaseView_DocType_length = 10;
export const IApiDocsReceivedBaseView_DocRef_length = 50;
export const IApiDocsReceivedBaseView_DocStatus_length = 1;
export const IApiDocsReceivedBaseView_ICN_length = 20;
export const IApiDocsReceivedBaseView_GCN_length = 20;
export const IApiDocsReceivedBaseView_TP_Name_length = 30;
export const IApiDocsReceivedBaseView_TCN_length = 20;

export const kApiDocsReceivedBaseView_Misc_ID="Misc_ID";
export const kApiDocsReceivedBaseView_TP_PartID="TP_PartID";
export const kApiDocsReceivedBaseView_DocType="DocType";
export const kApiDocsReceivedBaseView_DocRef="DocRef";
export const kApiDocsReceivedBaseView_DateRecv="DateRecv";
export const kApiDocsReceivedBaseView_DocStatus="DocStatus";
export const kApiDocsReceivedBaseView_ICN="ICN";
export const kApiDocsReceivedBaseView_GCN="GCN";
export const kApiDocsReceivedBaseView_ErrorID="ErrorID";
export const kApiDocsReceivedBaseView_TP_Name="TP_Name";
export const kApiDocsReceivedBaseView_TCN="TCN";
export const kApiDocsReceivedBaseView_Emailed="Emailed";

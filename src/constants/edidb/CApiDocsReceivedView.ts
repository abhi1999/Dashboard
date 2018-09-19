import { IApiDocsReceivedView } from '../edidb'
export class CApiDocsReceivedView implements IApiDocsReceivedView {
    public rownum:number = 0;
    public Misc_ID:number = 0;
    public TP_PartID:string = '';
    public DocType:string = '';
    public DocRef:string = '';
    public DateRecv:Date;
    public DocStatus:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public ErrorID:string = '';
    public TP_Name:string = '';
    public TCN:string = '';
    public Emailed:number = 0;
    public constructor(init?:Partial<CApiDocsReceivedView>) { Object.assign(this, init); }
}
export const IApiDocsReceivedView_TP_PartID_length = 30;
export const IApiDocsReceivedView_DocType_length = 10;
export const IApiDocsReceivedView_DocRef_length = 50;
export const IApiDocsReceivedView_DocStatus_length = 1;
export const IApiDocsReceivedView_ICN_length = 20;
export const IApiDocsReceivedView_GCN_length = 20;
export const IApiDocsReceivedView_ErrorID_length = 50;
export const IApiDocsReceivedView_TP_Name_length = 30;
export const IApiDocsReceivedView_TCN_length = 20;

export const kApiDocsReceivedView_rownum="rownum";
export const kApiDocsReceivedView_Misc_ID="Misc_ID";
export const kApiDocsReceivedView_TP_PartID="TP_PartID";
export const kApiDocsReceivedView_DocType="DocType";
export const kApiDocsReceivedView_DocRef="DocRef";
export const kApiDocsReceivedView_DateRecv="DateRecv";
export const kApiDocsReceivedView_DocStatus="DocStatus";
export const kApiDocsReceivedView_ICN="ICN";
export const kApiDocsReceivedView_GCN="GCN";
export const kApiDocsReceivedView_ErrorID="ErrorID";
export const kApiDocsReceivedView_TP_Name="TP_Name";
export const kApiDocsReceivedView_TCN="TCN";
export const kApiDocsReceivedView_Emailed="Emailed";

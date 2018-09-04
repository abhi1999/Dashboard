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

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

import { IApiDocsSentBaseView } from '../edidb'
export class CApiDocsSentBaseView implements IApiDocsSentBaseView {
    public Sent_ID:number = 0;
    public TP_PartID:string = '';
    public DocType:string = '';
    public DocRef:string = '';
    public DateSent:Date;
    public DocStatus:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public ErrorID:number = 0;
    public TP_Name:string = '';
    public TCN:string = '';
    public constructor(init?:Partial<CApiDocsSentBaseView>) { Object.assign(this, init); }
}
export const IApiDocsSentBaseView_TP_PartID_length = 30;
export const IApiDocsSentBaseView_DocType_length = 10;
export const IApiDocsSentBaseView_DocRef_length = 50;
export const IApiDocsSentBaseView_DocStatus_length = 1;
export const IApiDocsSentBaseView_ICN_length = 20;
export const IApiDocsSentBaseView_GCN_length = 20;
export const IApiDocsSentBaseView_TP_Name_length = 30;
export const IApiDocsSentBaseView_TCN_length = 20;

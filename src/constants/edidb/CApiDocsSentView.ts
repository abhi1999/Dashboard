import { IApiDocsSentView } from '../edidb'
export class CApiDocsSentView implements IApiDocsSentView {
    public rownum:number = 0;
    public Sent_ID:number = 0;
    public TP_PartID:string = '';
    public DocType:string = '';
    public DocRef:string = '';
    public DateSent:Date;
    public DocStatus:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public ErrorID:string = '';
    public TP_Name:string = '';
    public TCN:string = '';
    public constructor(init?:Partial<CApiDocsSentView>) { Object.assign(this, init); }
}
export const IApiDocsSentView_TP_PartID_length = 30;
export const IApiDocsSentView_DocType_length = 3;
export const IApiDocsSentView_DocRef_length = 50;
export const IApiDocsSentView_DocStatus_length = 1;
export const IApiDocsSentView_ICN_length = 20;
export const IApiDocsSentView_GCN_length = 20;
export const IApiDocsSentView_ErrorID_length = 50;
export const IApiDocsSentView_TP_Name_length = 30;
export const IApiDocsSentView_TCN_length = 20;

export const kApiDocsSentView_rownum="rownum";
export const kApiDocsSentView_Sent_ID="Sent_ID";
export const kApiDocsSentView_TP_PartID="TP_PartID";
export const kApiDocsSentView_DocType="DocType";
export const kApiDocsSentView_DocRef="DocRef";
export const kApiDocsSentView_DateSent="DateSent";
export const kApiDocsSentView_DocStatus="DocStatus";
export const kApiDocsSentView_ICN="ICN";
export const kApiDocsSentView_GCN="GCN";
export const kApiDocsSentView_ErrorID="ErrorID";
export const kApiDocsSentView_TP_Name="TP_Name";
export const kApiDocsSentView_TCN="TCN";

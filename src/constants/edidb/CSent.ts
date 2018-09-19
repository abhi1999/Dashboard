import { ISent } from '../edidb'
export class CSent implements ISent {
    public Sent_ID:number = 0;
    public Seg_ID:number = 0;
    public TP_PartID:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public DocType:string = '';
    public Segment:string = '';
    public DateSent:Date;
    public DocStatus:string = '';
    public DocRef:string = '';
    public GCNUnpadded:string = '';
    public TCNUnpadded:string = '';
    public constructor(init?:Partial<CSent>) { Object.assign(this, init); }
}
export const ISent_TP_PartID_length = 30;
export const ISent_ICN_length = 20;
export const ISent_GCN_length = 20;
export const ISent_TCN_length = 20;
export const ISent_DocType_length = 3;
export const ISent_DocStatus_length = 1;
export const ISent_DocRef_length = 50;
export const ISent_GCNUnpadded_length = 20;
export const ISent_TCNUnpadded_length = 20;

export const kSent_Sent_ID="Sent_ID";
export const kSent_Seg_ID="Seg_ID";
export const kSent_TP_PartID="TP_PartID";
export const kSent_ICN="ICN";
export const kSent_GCN="GCN";
export const kSent_TCN="TCN";
export const kSent_DocType="DocType";
export const kSent_Segment="Segment";
export const kSent_DateSent="DateSent";
export const kSent_DocStatus="DocStatus";
export const kSent_DocRef="DocRef";
export const kSent_GCNUnpadded="GCNUnpadded";
export const kSent_TCNUnpadded="TCNUnpadded";

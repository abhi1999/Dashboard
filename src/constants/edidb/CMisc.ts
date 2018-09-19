import { IMisc } from '../edidb'
export class CMisc implements IMisc {
    public Misc_ID:number = 0;
    public Seg_ID:number = 0;
    public TP_PartID:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public DocType:string = '';
    public Segment:string = '';
    public DateRecv:Date;
    public DocStatus:string = '';
    public DocRef:string = '';
    public constructor(init?:Partial<CMisc>) { Object.assign(this, init); }
}
export const IMisc_TP_PartID_length = 30;
export const IMisc_ICN_length = 20;
export const IMisc_GCN_length = 20;
export const IMisc_TCN_length = 20;
export const IMisc_DocType_length = 10;
export const IMisc_DocStatus_length = 1;
export const IMisc_DocRef_length = 50;

export const kMisc_Misc_ID="Misc_ID";
export const kMisc_Seg_ID="Seg_ID";
export const kMisc_TP_PartID="TP_PartID";
export const kMisc_ICN="ICN";
export const kMisc_GCN="GCN";
export const kMisc_TCN="TCN";
export const kMisc_DocType="DocType";
export const kMisc_Segment="Segment";
export const kMisc_DateRecv="DateRecv";
export const kMisc_DocStatus="DocStatus";
export const kMisc_DocRef="DocRef";

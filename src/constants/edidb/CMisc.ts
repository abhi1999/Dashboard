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

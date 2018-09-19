import { IRRC } from '../edidb'
export class CRRC implements IRRC {
    public RRC_ID:number = 0;
    public TP_PartID:string = '';
    public Rts_Date:Date;
    public Stat_Flag:string = '';
    public Exp_Flag:string = '';
    public AckID:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CRRC>) { Object.assign(this, init); }
}
export const IRRC_TP_PartID_length = 30;
export const IRRC_Stat_Flag_length = 1;
export const IRRC_Exp_Flag_length = 1;
export const IRRC_AckID_length = 1;

export const kRRC_RRC_ID="RRC_ID";
export const kRRC_TP_PartID="TP_PartID";
export const kRRC_Rts_Date="Rts_Date";
export const kRRC_Stat_Flag="Stat_Flag";
export const kRRC_Exp_Flag="Exp_Flag";
export const kRRC_AckID="AckID";
export const kRRC_GCN="GCN";
export const kRRC_TCN="TCN";
export const kRRC_VPIDFA="VPIDFA";

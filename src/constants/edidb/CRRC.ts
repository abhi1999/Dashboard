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

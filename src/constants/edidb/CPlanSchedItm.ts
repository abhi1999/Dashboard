import { IPlanSchedItm } from '../edidb'
export class CPlanSchedItm implements IPlanSchedItm {
    public PSIID:string = '';
    public PSHID:string = '';
    public VPID:number = 0;
    public processtype:string = '';
    public processdate:Date;
    public itmdocline:number = 0;
    public fcdocline:number = 0;
    public fcqual:string = '';
    public fctqual:string = '';
    public fcqty:number = 0;
    public fcdate1:string = '';
    public fcdate2:string = '';
    public fcdtqual:string = '';
    public fcdtid:string = '';
    public itemuom:string = '';
    public importdate:Date;
    public status:string = '';
    public price:number = 0;
    public shpqtyqual:string = '';
    public shpqty:number = 0;
    public shpdtqual:string = '';
    public shpdate1:string = '';
    public shpdate2:string = '';
    public engchangelevel:string = '';
    public constructor(init?:Partial<CPlanSchedItm>) { Object.assign(this, init); }
}
export const IPlanSchedItm_processtype_length = 2;
export const IPlanSchedItm_fcqual_length = 2;
export const IPlanSchedItm_fctqual_length = 1;
export const IPlanSchedItm_fcdate1_length = 8;
export const IPlanSchedItm_fcdate2_length = 8;
export const IPlanSchedItm_fcdtqual_length = 3;
export const IPlanSchedItm_fcdtid_length = 8;
export const IPlanSchedItm_itemuom_length = 10;
export const IPlanSchedItm_status_length = 1;
export const IPlanSchedItm_shpqtyqual_length = 2;
export const IPlanSchedItm_shpdtqual_length = 3;
export const IPlanSchedItm_shpdate1_length = 8;
export const IPlanSchedItm_shpdate2_length = 8;
export const IPlanSchedItm_engchangelevel_length = 80;

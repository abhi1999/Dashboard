import { IApiPlanSchedItm } from '../edidb'
export class CApiPlanSchedItm implements IApiPlanSchedItm {
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
    public Expr1:string = '';
    public tp_partid:string = '';
    public psdoctype:string = '';
    public tspurposecode:string = '';
    public pstypequal:string = '';
    public psqtyqual:string = '';
    public pstypecode:string = '';
    public purchaseorder:string = '';
    public releaseno:string = '';
    public contractno:string = '';
    public hrznstartdate:string = '';
    public hrznenddate:string = '';
    public pscreatedate:string = '';
    public psupddate:string = '';
    public hdrdocline:number = 0;
    public XMLID:string = '';
    public CreatedDate:Date;
    public Expr2:string = '';
    public DGID:string = '';
    public Config:boolean;
    public URECID:string = '';
    public Exp_Flag:string = '';
    public ExportDate:Date;
    public XMLText:string = '';
    public Expr3:string = '';
    public Misc_ID:number = 0;
    public XMLRef:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public Direction:string = '';
    public Expr4:number = 0;
    public AckID:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CApiPlanSchedItm>) { Object.assign(this, init); }
}
export const IApiPlanSchedItm_processtype_length = 2;
export const IApiPlanSchedItm_fcqual_length = 2;
export const IApiPlanSchedItm_fctqual_length = 1;
export const IApiPlanSchedItm_fcdate1_length = 8;
export const IApiPlanSchedItm_fcdate2_length = 8;
export const IApiPlanSchedItm_fcdtqual_length = 3;
export const IApiPlanSchedItm_fcdtid_length = 8;
export const IApiPlanSchedItm_itemuom_length = 10;
export const IApiPlanSchedItm_status_length = 1;
export const IApiPlanSchedItm_shpqtyqual_length = 2;
export const IApiPlanSchedItm_shpdtqual_length = 3;
export const IApiPlanSchedItm_shpdate1_length = 8;
export const IApiPlanSchedItm_shpdate2_length = 8;
export const IApiPlanSchedItm_engchangelevel_length = 80;
export const IApiPlanSchedItm_tp_partid_length = 30;
export const IApiPlanSchedItm_psdoctype_length = 2;
export const IApiPlanSchedItm_tspurposecode_length = 2;
export const IApiPlanSchedItm_pstypequal_length = 2;
export const IApiPlanSchedItm_psqtyqual_length = 1;
export const IApiPlanSchedItm_pstypecode_length = 2;
export const IApiPlanSchedItm_purchaseorder_length = 30;
export const IApiPlanSchedItm_releaseno_length = 30;
export const IApiPlanSchedItm_contractno_length = 30;
export const IApiPlanSchedItm_hrznstartdate_length = 8;
export const IApiPlanSchedItm_hrznenddate_length = 8;
export const IApiPlanSchedItm_pscreatedate_length = 8;
export const IApiPlanSchedItm_psupddate_length = 8;
export const IApiPlanSchedItm_Expr2_length = 30;
export const IApiPlanSchedItm_DGID_length = 5;
export const IApiPlanSchedItm_Exp_Flag_length = 1;
export const IApiPlanSchedItm_XMLText_length = 1073741823;
export const IApiPlanSchedItm_XMLRef_length = 1000;
export const IApiPlanSchedItm_GCN_length = 50;
export const IApiPlanSchedItm_TCN_length = 50;
export const IApiPlanSchedItm_Direction_length = 1;
export const IApiPlanSchedItm_AckID_length = 10;
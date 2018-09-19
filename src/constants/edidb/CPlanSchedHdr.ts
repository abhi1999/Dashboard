import { IPlanSchedHdr } from '../edidb'
export class CPlanSchedHdr implements IPlanSchedHdr {
    public PSHID:string = '';
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
    public constructor(init?:Partial<CPlanSchedHdr>) { Object.assign(this, init); }
}
export const IPlanSchedHdr_tp_partid_length = 30;
export const IPlanSchedHdr_psdoctype_length = 2;
export const IPlanSchedHdr_tspurposecode_length = 2;
export const IPlanSchedHdr_pstypequal_length = 2;
export const IPlanSchedHdr_psqtyqual_length = 1;
export const IPlanSchedHdr_pstypecode_length = 2;
export const IPlanSchedHdr_purchaseorder_length = 30;
export const IPlanSchedHdr_releaseno_length = 30;
export const IPlanSchedHdr_contractno_length = 30;
export const IPlanSchedHdr_hrznstartdate_length = 8;
export const IPlanSchedHdr_hrznenddate_length = 8;
export const IPlanSchedHdr_pscreatedate_length = 8;
export const IPlanSchedHdr_psupddate_length = 8;

export const kPlanSchedHdr_PSHID="PSHID";
export const kPlanSchedHdr_tp_partid="tp_partid";
export const kPlanSchedHdr_psdoctype="psdoctype";
export const kPlanSchedHdr_tspurposecode="tspurposecode";
export const kPlanSchedHdr_pstypequal="pstypequal";
export const kPlanSchedHdr_psqtyqual="psqtyqual";
export const kPlanSchedHdr_pstypecode="pstypecode";
export const kPlanSchedHdr_purchaseorder="purchaseorder";
export const kPlanSchedHdr_releaseno="releaseno";
export const kPlanSchedHdr_contractno="contractno";
export const kPlanSchedHdr_hrznstartdate="hrznstartdate";
export const kPlanSchedHdr_hrznenddate="hrznenddate";
export const kPlanSchedHdr_pscreatedate="pscreatedate";
export const kPlanSchedHdr_psupddate="psupddate";
export const kPlanSchedHdr_hdrdocline="hdrdocline";
export const kPlanSchedHdr_XMLID="XMLID";

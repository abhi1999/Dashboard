import { IPlanSchedGrp } from '../edidb'
export class CPlanSchedGrp implements IPlanSchedGrp {
    public PSGID:string = '';
    public PSIID:string = '';
    public psglevel:number = 0;
    public psgtype:string = '';
    public psgdocline:number = 0;
    public pardocline:number = 0;
    public psgqual:string = '';
    public psgtext:string = '';
    public constructor(init?:Partial<CPlanSchedGrp>) { Object.assign(this, init); }
}
export const IPlanSchedGrp_psgtype_length = 1;
export const IPlanSchedGrp_psgqual_length = 10;
export const IPlanSchedGrp_psgtext_length = 80;

import { IPlanSchedFlt } from '../edidb'
export class CPlanSchedFlt implements IPlanSchedFlt {
    public PSFID:string = '';
    public PSIID:string = '';
    public dtstamp:Date;
    public userid:string = '';
    public machineid:string = '';
    public PID:string = '';
    public constructor(init?:Partial<CPlanSchedFlt>) { Object.assign(this, init); }
}
export const IPlanSchedFlt_userid_length = 50;
export const IPlanSchedFlt_machineid_length = 50;

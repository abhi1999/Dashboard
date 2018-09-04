import { IProcessTrigger } from '../edidb'
export class CProcessTrigger implements IProcessTrigger {
    public trigid:number = 0;
    public procid:string = '';
    public seqno:number = 0;
    public timing:string = '';
    public dataarea:string = '';
    public triggertype:number = 0;
    public triggeraction:string = '';
    public actionfocus:number = 0;
    public inactive:boolean;
    public subprocid:string = '';
    public constructor(init?:Partial<CProcessTrigger>) { Object.assign(this, init); }
}
export const IProcessTrigger_procid_length = 20;
export const IProcessTrigger_timing_length = 6;
export const IProcessTrigger_dataarea_length = 4;
export const IProcessTrigger_triggeraction_length = 1000;
export const IProcessTrigger_subprocid_length = 20;

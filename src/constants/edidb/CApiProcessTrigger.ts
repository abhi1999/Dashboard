import { IApiProcessTrigger } from '../edidb'
export class CApiProcessTrigger implements IApiProcessTrigger {
    public trigid:number = 0;
    public procid:string = '';
    public procname:string = '';
    public seqno:number = 0;
    public timing:string = '';
    public dataarea:string = '';
    public triggertype:number = 0;
    public triggeraction:string = '';
    public actionfocus:number = 0;
    public inactive:boolean;
    public subprocid:string = '';
    public subprocname:string = '';
    public notetext:string = '';
    public constructor(init?:Partial<CApiProcessTrigger>) { Object.assign(this, init); }
}
export const IApiProcessTrigger_procid_length = 20;
export const IApiProcessTrigger_procname_length = 50;
export const IApiProcessTrigger_timing_length = 6;
export const IApiProcessTrigger_dataarea_length = 4;
export const IApiProcessTrigger_triggeraction_length = 1000;
export const IApiProcessTrigger_subprocid_length = 20;
export const IApiProcessTrigger_subprocname_length = 50;
export const IApiProcessTrigger_notetext_length = 2000;

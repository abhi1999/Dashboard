import { IProcessName } from '../edidb'
export class CProcessName implements IProcessName {
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
    public Expr1:string = '';
    public procname:string = '';
    public Expr2:string = '';
    public Expr3:string = '';
    public subprocname:string = '';
    public constructor(init?:Partial<CProcessName>) { Object.assign(this, init); }
}
export const IProcessName_procid_length = 20;
export const IProcessName_timing_length = 6;
export const IProcessName_dataarea_length = 4;
export const IProcessName_triggeraction_length = 1000;
export const IProcessName_subprocid_length = 20;
export const IProcessName_Expr1_length = 20;
export const IProcessName_procname_length = 50;
export const IProcessName_Expr2_length = 20;
export const IProcessName_Expr3_length = 20;
export const IProcessName_subprocname_length = 50;

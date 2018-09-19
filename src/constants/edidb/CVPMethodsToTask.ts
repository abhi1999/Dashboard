import { IVPMethodsToTask } from '../edidb'
export class CVPMethodsToTask implements IVPMethodsToTask {
    public ID:number = 0;
    public MethodCall:string = '';
    public MethodParams:string = '';
    public Descr1:string = '';
    public Descr2:string = '';
    public Descr3:string = '';
    public TaskName:string = '';
    public UseScheduler:boolean;
    public constructor(init?:Partial<CVPMethodsToTask>) { Object.assign(this, init); }
}
export const IVPMethodsToTask_MethodCall_length = 500;
export const IVPMethodsToTask_MethodParams_length = 500;
export const IVPMethodsToTask_Descr1_length = 50;
export const IVPMethodsToTask_Descr2_length = 50;
export const IVPMethodsToTask_Descr3_length = 50;
export const IVPMethodsToTask_TaskName_length = 50;

export const kVPMethodsToTask_ID="ID";
export const kVPMethodsToTask_MethodCall="MethodCall";
export const kVPMethodsToTask_MethodParams="MethodParams";
export const kVPMethodsToTask_Descr1="Descr1";
export const kVPMethodsToTask_Descr2="Descr2";
export const kVPMethodsToTask_Descr3="Descr3";
export const kVPMethodsToTask_TaskName="TaskName";
export const kVPMethodsToTask_UseScheduler="UseScheduler";

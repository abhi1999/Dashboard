import { IProcessSub } from '../edidb'
export class CProcessSub implements IProcessSub {
    public procid:string = '';
    public subprocid:string = '';
    public subprocname:string = '';
    public constructor(init?:Partial<CProcessSub>) { Object.assign(this, init); }
}
export const IProcessSub_procid_length = 20;
export const IProcessSub_subprocid_length = 20;
export const IProcessSub_subprocname_length = 50;

import { IProcess } from '../edidb'
export class CProcess implements IProcess {
    public procid:string = '';
    public procname:string = '';
    public constructor(init?:Partial<CProcess>) { Object.assign(this, init); }
}
export const IProcess_procid_length = 20;
export const IProcess_procname_length = 50;

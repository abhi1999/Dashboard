import { ITempDocsToHold } from '../edidb'
export class CTempDocsToHold implements ITempDocsToHold {
    public machinename:string = '';
    public username:string = '';
    public LogDate:Date;
    public VPID:number = 0;
    public TransID:string = '';
    public DGID:string = '';
    public constructor(init?:Partial<CTempDocsToHold>) { Object.assign(this, init); }
}
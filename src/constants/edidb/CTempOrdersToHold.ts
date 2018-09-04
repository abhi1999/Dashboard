import { ITempOrdersToHold } from '../edidb'
export class CTempOrdersToHold implements ITempOrdersToHold {
    public machinename:string = '';
    public username:string = '';
    public LogDate:Date;
    public PO_ID:number = 0;
    public constructor(init?:Partial<CTempOrdersToHold>) { Object.assign(this, init); }
}
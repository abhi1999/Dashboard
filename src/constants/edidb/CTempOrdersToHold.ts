import { ITempOrdersToHold } from '../edidb'
export class CTempOrdersToHold implements ITempOrdersToHold {
    public machinename:string = '';
    public username:string = '';
    public LogDate:Date;
    public PO_ID:number = 0;
    public constructor(init?:Partial<CTempOrdersToHold>) { Object.assign(this, init); }
}
export const kTempOrdersToHold_machinename="machinename";
export const kTempOrdersToHold_username="username";
export const kTempOrdersToHold_LogDate="LogDate";
export const kTempOrdersToHold_PO_ID="PO_ID";

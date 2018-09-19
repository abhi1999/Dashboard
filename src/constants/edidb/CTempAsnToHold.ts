import { ITempAsnToHold } from '../edidb'
export class CTempAsnToHold implements ITempAsnToHold {
    public machinename:string = '';
    public username:string = '';
    public LogDate:Date;
    public ASN_ID:number = 0;
    public constructor(init?:Partial<CTempAsnToHold>) { Object.assign(this, init); }
}
export const ITempAsnToHold_machinename_length = 80;
export const ITempAsnToHold_username_length = 80;

export const kTempAsnToHold_machinename="machinename";
export const kTempAsnToHold_username="username";
export const kTempAsnToHold_LogDate="LogDate";
export const kTempAsnToHold_ASN_ID="ASN_ID";

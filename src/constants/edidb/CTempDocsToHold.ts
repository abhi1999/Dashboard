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
export const kTempDocsToHold_machinename="machinename";
export const kTempDocsToHold_username="username";
export const kTempDocsToHold_LogDate="LogDate";
export const kTempDocsToHold_VPID="VPID";
export const kTempDocsToHold_TransID="TransID";
export const kTempDocsToHold_DGID="DGID";

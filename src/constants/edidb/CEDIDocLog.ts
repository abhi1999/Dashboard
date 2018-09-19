import { IEDIDocLog } from '../edidb'
export class CEDIDocLog implements IEDIDocLog {
    public UDID:string = '';
    public Status:string = '';
    public Status_Date:Date;
    public User_ID:string = '';
    public Machine_ID:string = '';
    public constructor(init?:Partial<CEDIDocLog>) { Object.assign(this, init); }
}
export const IEDIDocLog_Status_length = 1;
export const IEDIDocLog_User_ID_length = 50;
export const IEDIDocLog_Machine_ID_length = 50;

export const kEDIDocLog_UDID="UDID";
export const kEDIDocLog_Status="Status";
export const kEDIDocLog_Status_Date="Status_Date";
export const kEDIDocLog_User_ID="User_ID";
export const kEDIDocLog_Machine_ID="Machine_ID";

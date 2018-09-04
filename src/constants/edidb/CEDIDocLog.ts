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

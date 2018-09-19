import { IEmailLog } from '../edidb'
export class CEmailLog implements IEmailLog {
    public PID:string = '';
    public VPID:number = 0;
    public TransID:string = '';
    public DistList:string = '';
    public DateSent:Date;
    public constructor(init?:Partial<CEmailLog>) { Object.assign(this, init); }
}
export const IEmailLog_TransID_length = 80;
export const IEmailLog_DistList_length = 200;

export const kEmailLog_PID="PID";
export const kEmailLog_VPID="VPID";
export const kEmailLog_TransID="TransID";
export const kEmailLog_DistList="DistList";
export const kEmailLog_DateSent="DateSent";

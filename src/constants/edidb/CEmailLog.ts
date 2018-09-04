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

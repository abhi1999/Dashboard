import { IErrorLog } from '../edidb'
export class CErrorLog implements IErrorLog {
    public LogDate:Date;
    public LogProcess:string = '';
    public LogFunction:string = '';
    public ErrCode:string = '';
    public LogErrDesc:string = '';
    public DataKey:string = '';
    public DataError:string = '';
    public User_ID:string = '';
    public Machine_ID:string = '';
    public ELID:string = '';
    public LogRead:boolean;
    public LogSent:boolean;
    public PID:string = '';
    public DataType:string = '';
    public constructor(init?:Partial<CErrorLog>) { Object.assign(this, init); }
}
export const IErrorLog_LogProcess_length = 50;
export const IErrorLog_LogFunction_length = 50;
export const IErrorLog_ErrCode_length = 50;
export const IErrorLog_LogErrDesc_length = 2000;
export const IErrorLog_DataKey_length = 50;
export const IErrorLog_DataError_length = 200;
export const IErrorLog_User_ID_length = 50;
export const IErrorLog_Machine_ID_length = 50;
export const IErrorLog_DataType_length = 20;

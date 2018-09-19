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

export const kErrorLog_LogDate="LogDate";
export const kErrorLog_LogProcess="LogProcess";
export const kErrorLog_LogFunction="LogFunction";
export const kErrorLog_ErrCode="ErrCode";
export const kErrorLog_LogErrDesc="LogErrDesc";
export const kErrorLog_DataKey="DataKey";
export const kErrorLog_DataError="DataError";
export const kErrorLog_User_ID="User_ID";
export const kErrorLog_Machine_ID="Machine_ID";
export const kErrorLog_ELID="ELID";
export const kErrorLog_LogRead="LogRead";
export const kErrorLog_LogSent="LogSent";
export const kErrorLog_PID="PID";
export const kErrorLog_DataType="DataType";

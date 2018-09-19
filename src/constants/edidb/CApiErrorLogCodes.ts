import { IApiErrorLogCodes } from '../edidb'
export class CApiErrorLogCodes implements IApiErrorLogCodes {
    public ELID:string = '';
    public LogRead:boolean;
    public LogDate:Date;
    public LogProcess:string = '';
    public LogFunction:string = '';
    public ErrCode:string = '';
    public ErrDesc:string = '';
    public DataKey:string = '';
    public DataError:string = '';
    public User_ID:string = '';
    public Machine_ID:string = '';
    public Problem:string = '';
    public Solution:string = '';
    public URL:string = '';
    public AcctPackageID:string = '';
    public PID:string = '';
    public DataType:string = '';
    public constructor(init?:Partial<CApiErrorLogCodes>) { Object.assign(this, init); }
}
export const IApiErrorLogCodes_LogProcess_length = 50;
export const IApiErrorLogCodes_LogFunction_length = 50;
export const IApiErrorLogCodes_ErrCode_length = 50;
export const IApiErrorLogCodes_ErrDesc_length = 2000;
export const IApiErrorLogCodes_DataKey_length = 50;
export const IApiErrorLogCodes_DataError_length = 200;
export const IApiErrorLogCodes_User_ID_length = 50;
export const IApiErrorLogCodes_Machine_ID_length = 50;
export const IApiErrorLogCodes_Problem_length = 500;
export const IApiErrorLogCodes_Solution_length = 1000;
export const IApiErrorLogCodes_URL_length = 100;
export const IApiErrorLogCodes_AcctPackageID_length = 10;
export const IApiErrorLogCodes_DataType_length = 20;

export const kApiErrorLogCodes_ELID="ELID";
export const kApiErrorLogCodes_LogRead="LogRead";
export const kApiErrorLogCodes_LogDate="LogDate";
export const kApiErrorLogCodes_LogProcess="LogProcess";
export const kApiErrorLogCodes_LogFunction="LogFunction";
export const kApiErrorLogCodes_ErrCode="ErrCode";
export const kApiErrorLogCodes_ErrDesc="ErrDesc";
export const kApiErrorLogCodes_DataKey="DataKey";
export const kApiErrorLogCodes_DataError="DataError";
export const kApiErrorLogCodes_User_ID="User_ID";
export const kApiErrorLogCodes_Machine_ID="Machine_ID";
export const kApiErrorLogCodes_Problem="Problem";
export const kApiErrorLogCodes_Solution="Solution";
export const kApiErrorLogCodes_URL="URL";
export const kApiErrorLogCodes_AcctPackageID="AcctPackageID";
export const kApiErrorLogCodes_PID="PID";
export const kApiErrorLogCodes_DataType="DataType";

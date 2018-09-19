import { IApiErrorLogBaseView } from '../edidb'
export class CApiErrorLogBaseView implements IApiErrorLogBaseView {
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
    public ELID:string = '';
    public DataType:string = '';
    public constructor(init?:Partial<CApiErrorLogBaseView>) { Object.assign(this, init); }
}
export const IApiErrorLogBaseView_LogProcess_length = 50;
export const IApiErrorLogBaseView_LogFunction_length = 50;
export const IApiErrorLogBaseView_ErrCode_length = 50;
export const IApiErrorLogBaseView_ErrDesc_length = 2000;
export const IApiErrorLogBaseView_DataKey_length = 50;
export const IApiErrorLogBaseView_DataError_length = 200;
export const IApiErrorLogBaseView_User_ID_length = 50;
export const IApiErrorLogBaseView_Machine_ID_length = 50;
export const IApiErrorLogBaseView_Problem_length = 500;
export const IApiErrorLogBaseView_Solution_length = 1000;
export const IApiErrorLogBaseView_URL_length = 100;
export const IApiErrorLogBaseView_AcctPackageID_length = 10;
export const IApiErrorLogBaseView_DataType_length = 20;

export const kApiErrorLogBaseView_LogRead="LogRead";
export const kApiErrorLogBaseView_LogDate="LogDate";
export const kApiErrorLogBaseView_LogProcess="LogProcess";
export const kApiErrorLogBaseView_LogFunction="LogFunction";
export const kApiErrorLogBaseView_ErrCode="ErrCode";
export const kApiErrorLogBaseView_ErrDesc="ErrDesc";
export const kApiErrorLogBaseView_DataKey="DataKey";
export const kApiErrorLogBaseView_DataError="DataError";
export const kApiErrorLogBaseView_User_ID="User_ID";
export const kApiErrorLogBaseView_Machine_ID="Machine_ID";
export const kApiErrorLogBaseView_Problem="Problem";
export const kApiErrorLogBaseView_Solution="Solution";
export const kApiErrorLogBaseView_URL="URL";
export const kApiErrorLogBaseView_AcctPackageID="AcctPackageID";
export const kApiErrorLogBaseView_PID="PID";
export const kApiErrorLogBaseView_ELID="ELID";
export const kApiErrorLogBaseView_DataType="DataType";

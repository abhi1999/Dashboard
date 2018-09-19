import { IErrorCode } from '../edidb'
export class CErrorCode implements IErrorCode {
    public ErrCode:string = '';
    public ErrDesc:string = '';
    public Problem:string = '';
    public Solution:string = '';
    public URL:string = '';
    public AcctPackageID:string = '';
    public constructor(init?:Partial<CErrorCode>) { Object.assign(this, init); }
}
export const IErrorCode_ErrCode_length = 50;
export const IErrorCode_ErrDesc_length = 500;
export const IErrorCode_Problem_length = 500;
export const IErrorCode_Solution_length = 1000;
export const IErrorCode_URL_length = 100;
export const IErrorCode_AcctPackageID_length = 10;

export const kErrorCode_ErrCode="ErrCode";
export const kErrorCode_ErrDesc="ErrDesc";
export const kErrorCode_Problem="Problem";
export const kErrorCode_Solution="Solution";
export const kErrorCode_URL="URL";
export const kErrorCode_AcctPackageID="AcctPackageID";

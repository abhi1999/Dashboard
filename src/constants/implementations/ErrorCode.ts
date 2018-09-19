import { IErrorCode } from '../edidb';
import uuid from 'uuid-v4';

export default class ErrorCode implements IErrorCode {
    public Id: string = uuid();
    public ErrCode: string = "";
    public ErrDesc: string = "";
    public Problem: string = "";
    public Solution: string = "";
    public URL: string = "";
    public AcctPackageID: string = "";

    public constructor(init?:Partial<ErrorCode>) {
        Object.assign(this, init);
    }
}
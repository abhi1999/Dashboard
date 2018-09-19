import { IAppRight } from '../edidb'
export class CAppRight implements IAppRight {
    public login_name:string = '';
    public func_code:string = '';
    public constructor(init?:Partial<CAppRight>) { Object.assign(this, init); }
}
export const IAppRight_login_name_length = 50;
export const IAppRight_func_code_length = 3;

export const kAppRight_login_name="login_name";
export const kAppRight_func_code="func_code";

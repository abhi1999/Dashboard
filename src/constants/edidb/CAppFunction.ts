import { IAppFunction } from '../edidb'
export class CAppFunction implements IAppFunction {
    public func_code:string = '';
    public func_name:string = '';
    public menu_name:string = '';
    public constructor(init?:Partial<CAppFunction>) { Object.assign(this, init); }
}
export const IAppFunction_func_code_length = 3;
export const IAppFunction_func_name_length = 100;
export const IAppFunction_menu_name_length = 32;

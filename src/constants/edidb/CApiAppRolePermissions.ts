import { IApiAppRolePermissions } from '../edidb'
export class CApiAppRolePermissions implements IApiAppRolePermissions {
    public func_code:string = '';
    public func_name:string = '';
    public assigned:number = 0;
    public GVis:number = 0;
    public constructor(init?:Partial<CApiAppRolePermissions>) { Object.assign(this, init); }
}
export const IApiAppRolePermissions_func_code_length = 3;
export const IApiAppRolePermissions_func_name_length = 100;

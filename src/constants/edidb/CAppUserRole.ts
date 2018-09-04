import { IAppUserRole } from '../edidb'
export class CAppUserRole implements IAppUserRole {
    public login_name:string = '';
    public id:number = 0;
    public roleID:number = 0;
    public roleName:string = '';
    public constructor(init?:Partial<CAppUserRole>) { Object.assign(this, init); }
}
export const IAppUserRole_login_name_length = 50;
export const IAppUserRole_roleName_length = 50;

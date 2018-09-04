import { IApiListUsersNotInRole } from '../edidb'
export class CApiListUsersNotInRole implements IApiListUsersNotInRole {
    public login_name:string = '';
    public ID:number = 0;
    public roleID:number = 0;
    public roleName:string = '';
    public constructor(init?:Partial<CApiListUsersNotInRole>) { Object.assign(this, init); }
}
export const IApiListUsersNotInRole_login_name_length = 50;
export const IApiListUsersNotInRole_roleName_length = 50;

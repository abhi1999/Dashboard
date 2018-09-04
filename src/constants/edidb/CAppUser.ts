import { IAppUser } from '../edidb'
export class CAppUser implements IAppUser {
    public login_name:string = '';
    public login_password:string = '';
    public eLogin_Password:string = '';
    public id:number = 0;
    public constructor(init?:Partial<CAppUser>) { Object.assign(this, init); }
}
export const IAppUser_login_name_length = 50;
export const IAppUser_login_password_length = 50;
export const IAppUser_eLogin_Password_length = 100;

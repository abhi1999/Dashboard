import { IAppRole } from '../edidb'
export class CAppRole implements IAppRole {
    public id:number = 0;
    public roleName:string = '';
    public roleCreated:Date;
    public constructor(init?:Partial<CAppRole>) { Object.assign(this, init); }
}
export const IAppRole_roleName_length = 50;

export const kAppRole_id="id";
export const kAppRole_roleName="roleName";
export const kAppRole_roleCreated="roleCreated";

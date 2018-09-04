import { IAppRoleFunction } from '../edidb'
export class CAppRoleFunction implements IAppRoleFunction {
    public id:number = 0;
    public RoleID:number = 0;
    public RoleCode:string = '';
    public constructor(init?:Partial<CAppRoleFunction>) { Object.assign(this, init); }
}
export const IAppRoleFunction_RoleCode_length = 3;
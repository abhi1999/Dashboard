import { IAppRoleMap } from '../edidb'
export class CAppRoleMap implements IAppRoleMap {
    public id:number = 0;
    public roleID:number = 0;
    public loginID:number = 0;
    public constructor(init?:Partial<CAppRoleMap>) { Object.assign(this, init); }
}
import { IUserToTP } from '../edidb'
export class CUserToTP implements IUserToTP {
    public id:number = 0;
    public TP_PartID:string = '';
    public AppUserId:number = 0;
    public constructor(init?:Partial<CUserToTP>) { Object.assign(this, init); }
}
export const IUserToTP_TP_PartID_length = 30;

import { IRibbonGroupUser } from '../edidb'
export class CRibbonGroupUser implements IRibbonGroupUser {
    public ID:number = 0;
    public GroupID:number = 0;
    public managedID:number = 0;
    public UserEnabled:boolean;
    public UserVisible:boolean;
    public constructor(init?:Partial<CRibbonGroupUser>) { Object.assign(this, init); }
}
export const kRibbonGroupUser_ID="ID";
export const kRibbonGroupUser_GroupID="GroupID";
export const kRibbonGroupUser_managedID="managedID";
export const kRibbonGroupUser_UserEnabled="UserEnabled";
export const kRibbonGroupUser_UserVisible="UserVisible";

import { IRibbonControlUser } from '../edidb'
export class CRibbonControlUser implements IRibbonControlUser {
    public ID:number = 0;
    public ControlID:number = 0;
    public managedID:number = 0;
    public UserEnabled:boolean;
    public UserVisible:boolean;
    public constructor(init?:Partial<CRibbonControlUser>) { Object.assign(this, init); }
}
export const kRibbonControlUser_ID="ID";
export const kRibbonControlUser_ControlID="ControlID";
export const kRibbonControlUser_managedID="managedID";
export const kRibbonControlUser_UserEnabled="UserEnabled";
export const kRibbonControlUser_UserVisible="UserVisible";

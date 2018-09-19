import { IRibbonTabUser } from '../edidb'
export class CRibbonTabUser implements IRibbonTabUser {
    public ID:number = 0;
    public TabID:number = 0;
    public managedID:number = 0;
    public UserEnabled:boolean;
    public UserVisible:boolean;
    public constructor(init?:Partial<CRibbonTabUser>) { Object.assign(this, init); }
}
export const kRibbonTabUser_ID="ID";
export const kRibbonTabUser_TabID="TabID";
export const kRibbonTabUser_managedID="managedID";
export const kRibbonTabUser_UserEnabled="UserEnabled";
export const kRibbonTabUser_UserVisible="UserVisible";

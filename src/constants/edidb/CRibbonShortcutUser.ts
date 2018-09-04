import { IRibbonShortcutUser } from '../edidb'
export class CRibbonShortcutUser implements IRibbonShortcutUser {
    public ID:number = 0;
    public TabID:number = 0;
    public managedID:number = 0;
    public UserEnabled:boolean;
    public UserVisible:boolean;
    public constructor(init?:Partial<CRibbonShortcutUser>) { Object.assign(this, init); }
}
import { IRibbonTab } from '../edidb'
export class CRibbonTab implements IRibbonTab {
    public TabID:number = 0;
    public FormName:string = '';
    public Caption:string = '';
    public TabOrder:number = 0;
    public Visible:boolean;
    public Enabled:boolean;
    public KeyboardTip:string = '';
    public FriendlyName:string = '';
    public constructor(init?:Partial<CRibbonTab>) { Object.assign(this, init); }
}
export const IRibbonTab_FormName_length = 200;
export const IRibbonTab_Caption_length = 200;
export const IRibbonTab_KeyboardTip_length = 500;

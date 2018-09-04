import { IRibbonTab1 } from '../edidb'
export class CRibbonTab1 implements IRibbonTab1 {
    public TabID:number = 0;
    public FormName:string = '';
    public Caption:string = '';
    public TabOrder:number = 0;
    public Visible:boolean;
    public Enabled:boolean;
    public KeyboardTip:string = '';
    public FriendlyName:string = '';
    public UserEnabled:boolean;
    public UserVisible:boolean;
    public constructor(init?:Partial<CRibbonTab1>) { Object.assign(this, init); }
}
export const IRibbonTab1_FormName_length = 200;
export const IRibbonTab1_Caption_length = 200;
export const IRibbonTab1_KeyboardTip_length = 500;
export const IRibbonTab1_FriendlyName_length = 200;

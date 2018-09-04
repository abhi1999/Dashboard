import { IRibbonControl } from '../edidb'
export class CRibbonControl implements IRibbonControl {
    public ControlID:number = 0;
    public GroupID:number = 0;
    public ParentControlID:number = 0;
    public Caption:string = '';
    public ControlOrder:number = 0;
    public Type:string = '';
    public MethodCall:string = '';
    public MethodParams:string = '';
    public DescriptionText:string = '';
    public ImageFile:string = '';
    public Visible:boolean;
    public Enabled:boolean;
    public KeyboardTip:string = '';
    public TooltipText:string = '';
    public Category:string = '';
    public BeginGroup:boolean;
    public Checked:boolean;
    public Width:number = 0;
    public Height:number = 0;
    public ShortCut:string = '';
    public func_code:string = '';
    public constructor(init?:Partial<CRibbonControl>) { Object.assign(this, init); }
}
export const IRibbonControl_Caption_length = 200;
export const IRibbonControl_Type_length = 50;
export const IRibbonControl_MethodCall_length = 500;
export const IRibbonControl_MethodParams_length = 1000;
export const IRibbonControl_DescriptionText_length = 500;
export const IRibbonControl_ImageFile_length = 500;
export const IRibbonControl_KeyboardTip_length = 200;
export const IRibbonControl_TooltipText_length = 500;
export const IRibbonControl_Category_length = 50;
export const IRibbonControl_ShortCut_length = 20;
export const IRibbonControl_func_code_length = 3;

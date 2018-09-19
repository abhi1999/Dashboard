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

export const kRibbonControl_ControlID="ControlID";
export const kRibbonControl_GroupID="GroupID";
export const kRibbonControl_ParentControlID="ParentControlID";
export const kRibbonControl_Caption="Caption";
export const kRibbonControl_ControlOrder="ControlOrder";
export const kRibbonControl_Type="Type";
export const kRibbonControl_MethodCall="MethodCall";
export const kRibbonControl_MethodParams="MethodParams";
export const kRibbonControl_DescriptionText="DescriptionText";
export const kRibbonControl_ImageFile="ImageFile";
export const kRibbonControl_Visible="Visible";
export const kRibbonControl_Enabled="Enabled";
export const kRibbonControl_KeyboardTip="KeyboardTip";
export const kRibbonControl_TooltipText="TooltipText";
export const kRibbonControl_Category="Category";
export const kRibbonControl_BeginGroup="BeginGroup";
export const kRibbonControl_Checked="Checked";
export const kRibbonControl_Width="Width";
export const kRibbonControl_Height="Height";
export const kRibbonControl_ShortCut="ShortCut";
export const kRibbonControl_func_code="func_code";

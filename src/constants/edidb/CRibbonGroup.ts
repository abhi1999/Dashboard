import { IRibbonGroup } from '../edidb'
export class CRibbonGroup implements IRibbonGroup {
    public GroupID:number = 0;
    public TabID:number = 0;
    public Caption:string = '';
    public GroupOrder:number = 0;
    public IconID:number = 0;
    public Visible:boolean;
    public AllowReduce:boolean;
    public ControlsGrouping:boolean;
    public imageFile:string = '';
    public GroupColor:string = '';
    public constructor(init?:Partial<CRibbonGroup>) { Object.assign(this, init); }
}
export const IRibbonGroup_Caption_length = 200;
export const IRibbonGroup_imageFile_length = 500;
export const IRibbonGroup_GroupColor_length = 50;

export const kRibbonGroup_GroupID="GroupID";
export const kRibbonGroup_TabID="TabID";
export const kRibbonGroup_Caption="Caption";
export const kRibbonGroup_GroupOrder="GroupOrder";
export const kRibbonGroup_IconID="IconID";
export const kRibbonGroup_Visible="Visible";
export const kRibbonGroup_AllowReduce="AllowReduce";
export const kRibbonGroup_ControlsGrouping="ControlsGrouping";
export const kRibbonGroup_imageFile="imageFile";
export const kRibbonGroup_GroupColor="GroupColor";

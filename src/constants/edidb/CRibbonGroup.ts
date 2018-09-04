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

import { IRibbonShortcut } from '../edidb'
export class CRibbonShortcut implements IRibbonShortcut {
    public ShortCutID:number = 0;
    public TabID:number = 0;
    public ShortcutOrder:number = 0;
    public Caption:string = '';
    public ImageFile:string = '';
    public Visible:boolean;
    public Enabled:boolean;
    public constructor(init?:Partial<CRibbonShortcut>) { Object.assign(this, init); }
}
export const IRibbonShortcut_Caption_length = 200;
export const IRibbonShortcut_ImageFile_length = 500;

export const kRibbonShortcut_ShortCutID="ShortCutID";
export const kRibbonShortcut_TabID="TabID";
export const kRibbonShortcut_ShortcutOrder="ShortcutOrder";
export const kRibbonShortcut_Caption="Caption";
export const kRibbonShortcut_ImageFile="ImageFile";
export const kRibbonShortcut_Visible="Visible";
export const kRibbonShortcut_Enabled="Enabled";

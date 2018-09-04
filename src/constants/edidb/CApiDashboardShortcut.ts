import { IApiDashboardShortcut } from '../edidb'
export class CApiDashboardShortcut implements IApiDashboardShortcut {
    public ShortCutID:number = 0;
    public ShortcutOrder:number = 0;
    public Caption:string = '';
    public constructor(init?:Partial<CApiDashboardShortcut>) { Object.assign(this, init); }
}
export const IApiDashboardShortcut_Caption_length = 200;

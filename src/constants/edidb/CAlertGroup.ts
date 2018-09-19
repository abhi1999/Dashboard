import { IAlertGroup } from '../edidb'
export class CAlertGroup implements IAlertGroup {
    public GroupID:number = 0;
    public Caption:string = '';
    public Direction:string = '';
    public GroupTile:number = 0;
    public constructor(init?:Partial<CAlertGroup>) { Object.assign(this, init); }
}
export const IAlertGroup_Caption_length = 100;
export const IAlertGroup_Direction_length = 100;

export const kAlertGroup_GroupID="GroupID";
export const kAlertGroup_Caption="Caption";
export const kAlertGroup_Direction="Direction";
export const kAlertGroup_GroupTile="GroupTile";

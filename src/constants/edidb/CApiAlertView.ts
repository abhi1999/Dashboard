import { IApiAlertView } from '../edidb'
export class CApiAlertView implements IApiAlertView {
    public Quantity:number = 0;
    public AlertID:string = '';
    public GroupName:string = '';
    public GroupDirection:string = '';
    public Caption:string = '';
    public AlertMessage:string = '';
    public GroupTile:number = 0;
    public constructor(init?:Partial<CApiAlertView>) { Object.assign(this, init); }
}
export const IApiAlertView_AlertID_length = 30;
export const IApiAlertView_GroupName_length = 100;
export const IApiAlertView_GroupDirection_length = 100;
export const IApiAlertView_Caption_length = 100;
export const IApiAlertView_AlertMessage_length = 80;

export const kApiAlertView_Quantity="Quantity";
export const kApiAlertView_AlertID="AlertID";
export const kApiAlertView_GroupName="GroupName";
export const kApiAlertView_GroupDirection="GroupDirection";
export const kApiAlertView_Caption="Caption";
export const kApiAlertView_AlertMessage="AlertMessage";
export const kApiAlertView_GroupTile="GroupTile";

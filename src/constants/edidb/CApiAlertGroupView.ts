import { IApiAlertGroupView } from '../edidb'
export class CApiAlertGroupView implements IApiAlertGroupView {
    public GroupTile:number = 0;
    public Caption:string = '';
    public quantity:number = 0;
    public constructor(init?:Partial<CApiAlertGroupView>) { Object.assign(this, init); }
}
export const IApiAlertGroupView_Caption_length = 100;

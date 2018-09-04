import { IEDIDocGroup } from '../edidb'
export class CEDIDocGroup implements IEDIDocGroup {
    public DGID:string = '';
    public Doc_Group:string = '';
    public Doc_Desc:string = '';
    public constructor(init?:Partial<CEDIDocGroup>) { Object.assign(this, init); }
}
export const IEDIDocGroup_DGID_length = 5;
export const IEDIDocGroup_Doc_Group_length = 50;
export const IEDIDocGroup_Doc_Desc_length = 50;

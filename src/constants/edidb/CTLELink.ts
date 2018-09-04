import { ITLELink } from '../edidb'
export class CTLELink implements ITLELink {
    public TLELID:number = 0;
    public ParDataType:string = '';
    public ParDataKey:string = '';
    public ParDirection:string = '';
    public ChildDataType:string = '';
    public ChildDataKey:string = '';
    public ChildDirection:string = '';
    public CreatedDate:Date;
    public ParentID:string = '';
    public ChildID:string = '';
    public constructor(init?:Partial<CTLELink>) { Object.assign(this, init); }
}
export const ITLELink_ParDataType_length = 50;
export const ITLELink_ParDataKey_length = 50;
export const ITLELink_ParDirection_length = 1;
export const ITLELink_ChildDataType_length = 50;
export const ITLELink_ChildDataKey_length = 50;
export const ITLELink_ChildDirection_length = 1;
export const ITLELink_ParentID_length = 105;
export const ITLELink_ChildID_length = 105;

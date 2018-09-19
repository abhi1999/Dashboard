import { IEDIDocDataField } from '../edidb'
export class CEDIDocDataField implements IEDIDocDataField {
    public UDID:string = '';
    public Group_ID:string = '';
    public Group_Count:number = 0;
    public Seg_ID:string = '';
    public Seg_Count:number = 0;
    public Elem_No:number = 0;
    public Line_No:number = 0;
    public UEDID:string = '';
    public PUEDID:string = '';
    public constructor(init?:Partial<CEDIDocDataField>) { Object.assign(this, init); }
}
export const IEDIDocDataField_Group_ID_length = 50;
export const IEDIDocDataField_Seg_ID_length = 50;

export const kEDIDocDataField_UDID="UDID";
export const kEDIDocDataField_Group_ID="Group_ID";
export const kEDIDocDataField_Group_Count="Group_Count";
export const kEDIDocDataField_Seg_ID="Seg_ID";
export const kEDIDocDataField_Seg_Count="Seg_Count";
export const kEDIDocDataField_Elem_No="Elem_No";
export const kEDIDocDataField_Line_No="Line_No";
export const kEDIDocDataField_UEDID="UEDID";
export const kEDIDocDataField_PUEDID="PUEDID";

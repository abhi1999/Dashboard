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

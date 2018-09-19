import { IEDIStdElement } from '../edidb'
export class CEDIStdElement implements IEDIStdElement {
    public Std_ID:string = '';
    public Rel_No:string = '';
    public Seg_ID:string = '';
    public Elem_No:string = '';
    public Elem_Desc:string = '';
    public Elem_ID:string = '';
    public Elem_Type:string = '';
    public Group_ID:string = '';
    public SEID:string = '';
    public constructor(init?:Partial<CEDIStdElement>) { Object.assign(this, init); }
}
export const IEDIStdElement_Std_ID_length = 20;
export const IEDIStdElement_Rel_No_length = 20;
export const IEDIStdElement_Seg_ID_length = 20;
export const IEDIStdElement_Elem_No_length = 5;
export const IEDIStdElement_Elem_Desc_length = 65;
export const IEDIStdElement_Elem_ID_length = 5;
export const IEDIStdElement_Elem_Type_length = 2;
export const IEDIStdElement_Group_ID_length = 5;

export const kEDIStdElement_Std_ID="Std_ID";
export const kEDIStdElement_Rel_No="Rel_No";
export const kEDIStdElement_Seg_ID="Seg_ID";
export const kEDIStdElement_Elem_No="Elem_No";
export const kEDIStdElement_Elem_Desc="Elem_Desc";
export const kEDIStdElement_Elem_ID="Elem_ID";
export const kEDIStdElement_Elem_Type="Elem_Type";
export const kEDIStdElement_Group_ID="Group_ID";
export const kEDIStdElement_SEID="SEID";

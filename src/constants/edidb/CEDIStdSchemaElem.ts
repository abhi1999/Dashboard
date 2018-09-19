import { IEDIStdSchemaElem } from '../edidb'
export class CEDIStdSchemaElem implements IEDIStdSchemaElem {
    public SSID:string = '';
    public Elem_No:number = 0;
    public Qual_Elem_No:number = 0;
    public Qual_Elem_Value:string = '';
    public Elem_Desc:string = '';
    public Token_Name:string = '';
    public Token_Format:string = '';
    public SSEID:string = '';
    public constructor(init?:Partial<CEDIStdSchemaElem>) { Object.assign(this, init); }
}
export const IEDIStdSchemaElem_Qual_Elem_Value_length = 50;
export const IEDIStdSchemaElem_Elem_Desc_length = 100;
export const IEDIStdSchemaElem_Token_Name_length = 50;
export const IEDIStdSchemaElem_Token_Format_length = 200;

export const kEDIStdSchemaElem_SSID="SSID";
export const kEDIStdSchemaElem_Elem_No="Elem_No";
export const kEDIStdSchemaElem_Qual_Elem_No="Qual_Elem_No";
export const kEDIStdSchemaElem_Qual_Elem_Value="Qual_Elem_Value";
export const kEDIStdSchemaElem_Elem_Desc="Elem_Desc";
export const kEDIStdSchemaElem_Token_Name="Token_Name";
export const kEDIStdSchemaElem_Token_Format="Token_Format";
export const kEDIStdSchemaElem_SSEID="SSEID";

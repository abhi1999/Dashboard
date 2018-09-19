import { IAcctObjectsCurrent } from '../edidb'
export class CAcctObjectsCurrent implements IAcctObjectsCurrent {
    public AOID:string = '';
    public ObjID:string = '';
    public CompanyID:number = 0;
    public ObjDesc:string = '';
    public ObjType:string = '';
    public CreateSeq:number = 0;
    public Revision:number = 0;
    public RevDate:Date;
    public RevDesc:string = '';
    public SQLSelect:string = '';
    public ExecScript:boolean;
    public ExecDate:Date;
    public dataarea:string = '';
    public constructor(init?:Partial<CAcctObjectsCurrent>) { Object.assign(this, init); }
}
export const IAcctObjectsCurrent_ObjID_length = 80;
export const IAcctObjectsCurrent_ObjDesc_length = 200;
export const IAcctObjectsCurrent_ObjType_length = 1;
export const IAcctObjectsCurrent_RevDesc_length = 200;
export const IAcctObjectsCurrent_dataarea_length = 4;

export const kAcctObjectsCurrent_AOID="AOID";
export const kAcctObjectsCurrent_ObjID="ObjID";
export const kAcctObjectsCurrent_CompanyID="CompanyID";
export const kAcctObjectsCurrent_ObjDesc="ObjDesc";
export const kAcctObjectsCurrent_ObjType="ObjType";
export const kAcctObjectsCurrent_CreateSeq="CreateSeq";
export const kAcctObjectsCurrent_Revision="Revision";
export const kAcctObjectsCurrent_RevDate="RevDate";
export const kAcctObjectsCurrent_RevDesc="RevDesc";
export const kAcctObjectsCurrent_SQLSelect="SQLSelect";
export const kAcctObjectsCurrent_ExecScript="ExecScript";
export const kAcctObjectsCurrent_ExecDate="ExecDate";
export const kAcctObjectsCurrent_dataarea="dataarea";

import { IApiXmlDocForm } from '../edidb'
export class CApiXmlDocForm implements IApiXmlDocForm {
    public RowNum:number = 0;
    public VPID:number = 0;
    public CreatedDate:Date;
    public Doc_Group:string = '';
    public TP_Name:string = '';
    public Config:boolean;
    public ExportDate:Date;
    public XMLRef:string = '';
    public statuscode:string = '';
    public Status:string = '';
    public directioncode:string = '';
    public Direction:string = '';
    public TP_PartID:string = '';
    public XMLID:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public misc_id:number = 0;
    public DGID:string = '';
    public ackdesc:string = '';
    public HoldID:number = 0;
    public NoteText:string = '';
    public ErrorID:string = '';
    public VPIDFA:number = 0;
    public TLE:number = 0;
    public TLEJump:string = '';
    public constructor(init?:Partial<CApiXmlDocForm>) { Object.assign(this, init); }
}
export const IApiXmlDocForm_Doc_Group_length = 50;
export const IApiXmlDocForm_TP_Name_length = 30;
export const IApiXmlDocForm_XMLRef_length = 1000;
export const IApiXmlDocForm_statuscode_length = 1;
export const IApiXmlDocForm_Status_length = 500;
export const IApiXmlDocForm_directioncode_length = 1;
export const IApiXmlDocForm_Direction_length = 500;
export const IApiXmlDocForm_TP_PartID_length = 30;
export const IApiXmlDocForm_GCN_length = 50;
export const IApiXmlDocForm_TCN_length = 50;
export const IApiXmlDocForm_DGID_length = 5;
export const IApiXmlDocForm_ackdesc_length = 10;
export const IApiXmlDocForm_NoteText_length = 2000;
export const IApiXmlDocForm_ErrorID_length = 50;
export const IApiXmlDocForm_TLEJump_length = 68;

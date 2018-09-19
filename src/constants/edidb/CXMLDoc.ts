import { IXMLDoc } from '../edidb'
export class CXMLDoc implements IXMLDoc {
    public CreatedDate:Date;
    public TP_PartID:string = '';
    public DGID:string = '';
    public Config:boolean;
    public URECID:string = '';
    public Exp_Flag:string = '';
    public ExportDate:Date;
    public XMLText:string = '';
    public XMLID:string = '';
    public Misc_ID:number = 0;
    public XMLRef:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public Direction:string = '';
    public VPID:number = 0;
    public AckID:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CXMLDoc>) { Object.assign(this, init); }
}
export const IXMLDoc_TP_PartID_length = 30;
export const IXMLDoc_DGID_length = 5;
export const IXMLDoc_Exp_Flag_length = 1;
export const IXMLDoc_XMLRef_length = 1000;
export const IXMLDoc_GCN_length = 50;
export const IXMLDoc_TCN_length = 50;
export const IXMLDoc_Direction_length = 1;
export const IXMLDoc_AckID_length = 10;

export const kXMLDoc_CreatedDate="CreatedDate";
export const kXMLDoc_TP_PartID="TP_PartID";
export const kXMLDoc_DGID="DGID";
export const kXMLDoc_Config="Config";
export const kXMLDoc_URECID="URECID";
export const kXMLDoc_Exp_Flag="Exp_Flag";
export const kXMLDoc_ExportDate="ExportDate";
export const kXMLDoc_XMLText="XMLText";
export const kXMLDoc_XMLID="XMLID";
export const kXMLDoc_Misc_ID="Misc_ID";
export const kXMLDoc_XMLRef="XMLRef";
export const kXMLDoc_GCN="GCN";
export const kXMLDoc_TCN="TCN";
export const kXMLDoc_Direction="Direction";
export const kXMLDoc_VPID="VPID";
export const kXMLDoc_AckID="AckID";
export const kXMLDoc_VPIDFA="VPIDFA";

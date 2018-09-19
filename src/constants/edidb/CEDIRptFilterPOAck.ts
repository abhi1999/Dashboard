import { IEDIRptFilterPOAck } from '../edidb'
export class CEDIRptFilterPOAck implements IEDIRptFilterPOAck {
    public VPID:number = 0;
    public Misc_ID:number = 0;
    public DGID:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public DocType:string = '';
    public DateRecv:Date;
    public DocRef:string = '';
    public EmailTo:string = '';
    public ReportName:string = '';
    public constructor(init?:Partial<CEDIRptFilterPOAck>) { Object.assign(this, init); }
}
export const IEDIRptFilterPOAck_DGID_length = 5;
export const IEDIRptFilterPOAck_TP_PartID_length = 30;
export const IEDIRptFilterPOAck_TP_Name_length = 30;
export const IEDIRptFilterPOAck_DocType_length = 10;
export const IEDIRptFilterPOAck_DocRef_length = 50;
export const IEDIRptFilterPOAck_EmailTo_length = 4000;
export const IEDIRptFilterPOAck_ReportName_length = 24;

export const kEDIRptFilterPOAck_VPID="VPID";
export const kEDIRptFilterPOAck_Misc_ID="Misc_ID";
export const kEDIRptFilterPOAck_DGID="DGID";
export const kEDIRptFilterPOAck_TP_PartID="TP_PartID";
export const kEDIRptFilterPOAck_TP_Name="TP_Name";
export const kEDIRptFilterPOAck_DocType="DocType";
export const kEDIRptFilterPOAck_DateRecv="DateRecv";
export const kEDIRptFilterPOAck_DocRef="DocRef";
export const kEDIRptFilterPOAck_EmailTo="EmailTo";
export const kEDIRptFilterPOAck_ReportName="ReportName";

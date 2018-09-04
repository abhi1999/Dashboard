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

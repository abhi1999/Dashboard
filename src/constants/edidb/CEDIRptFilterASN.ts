import { IEDIRptFilterASN } from '../edidb'
export class CEDIRptFilterASN implements IEDIRptFilterASN {
    public VPID:number = 0;
    public Misc_ID:number = 0;
    public DGID:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public DocType:string = '';
    public DateRecv:Date;
    public DocRef:string = '';
    public PO_NO:string = '';
    public EmailTo:string = '';
    public ReportName:string = '';
    public constructor(init?:Partial<CEDIRptFilterASN>) { Object.assign(this, init); }
}
export const IEDIRptFilterASN_DGID_length = 5;
export const IEDIRptFilterASN_TP_PartID_length = 30;
export const IEDIRptFilterASN_TP_Name_length = 30;
export const IEDIRptFilterASN_DocType_length = 10;
export const IEDIRptFilterASN_DocRef_length = 50;
export const IEDIRptFilterASN_PO_NO_length = 4000;
export const IEDIRptFilterASN_EmailTo_length = 4000;
export const IEDIRptFilterASN_ReportName_length = 18;

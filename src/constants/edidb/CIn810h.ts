import { IIn810h } from '../edidb'
export class CIn810h implements IIn810h {
    public In810_ID:number = 0;
    public TP_PartID:string = '';
    public InvoiceNo:string = '';
    public InvoiceDate:Date;
    public PurchaseOrder:string = '';
    public FreightAmt:number = 0;
    public MiscAmt:number = 0;
    public TaxAmt:number = 0;
    public InvoiceAmt:number = 0;
    public Exp_Flag:string = '';
    public constructor(init?:Partial<CIn810h>) { Object.assign(this, init); }
}
export const IIn810h_TP_PartID_length = 30;
export const IIn810h_InvoiceNo_length = 20;
export const IIn810h_PurchaseOrder_length = 30;
export const IIn810h_Exp_Flag_length = 1;

export const kIn810h_In810_ID="In810_ID";
export const kIn810h_TP_PartID="TP_PartID";
export const kIn810h_InvoiceNo="InvoiceNo";
export const kIn810h_InvoiceDate="InvoiceDate";
export const kIn810h_PurchaseOrder="PurchaseOrder";
export const kIn810h_FreightAmt="FreightAmt";
export const kIn810h_MiscAmt="MiscAmt";
export const kIn810h_TaxAmt="TaxAmt";
export const kIn810h_InvoiceAmt="InvoiceAmt";
export const kIn810h_Exp_Flag="Exp_Flag";

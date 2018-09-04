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

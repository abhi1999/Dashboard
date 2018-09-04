import { IEDIOutboundInvoice } from '../edidb'
export class CEDIOutboundInvoice implements IEDIOutboundInvoice {
    public TP_PartID:string = '';
    public VPID:number = 0;
    public DGID:string = '';
    public XMLRef:string = '';
    public ExportDate:Date;
    public CreatedDate:Date;
    public Exp_Flag:string = '';
    public AckID:string = '';
    public XMLText:string = '';
    public XMLId:string = '';
    public invoiceno:string = '';
    public invoicedate:string = '';
    public cusno:string = '';
    public purchaseorderno:string = '';
    public orderno:string = '';
    public lineno:string = '';
    public itemid:string = '';
    public itemdesc:string = '';
    public itemdesc2:string = '';
    public cusitemid:string = '';
    public price:number = 0;
    public extendedprice:number = 0;
    public uom:string = '';
    public qtyord:number = 0;
    public qtytoship:number = 0;
    public requestdate:string = '';
    public promisedate:string = '';
    public constructor(init?:Partial<CEDIOutboundInvoice>) { Object.assign(this, init); }
}
export const IEDIOutboundInvoice_TP_PartID_length = 30;
export const IEDIOutboundInvoice_DGID_length = 5;
export const IEDIOutboundInvoice_XMLRef_length = 1000;
export const IEDIOutboundInvoice_Exp_Flag_length = 1;
export const IEDIOutboundInvoice_AckID_length = 10;
export const IEDIOutboundInvoice_invoiceno_length = 50;
export const IEDIOutboundInvoice_invoicedate_length = 20;
export const IEDIOutboundInvoice_cusno_length = 80;
export const IEDIOutboundInvoice_purchaseorderno_length = 200;
export const IEDIOutboundInvoice_orderno_length = 50;
export const IEDIOutboundInvoice_lineno_length = 20;
export const IEDIOutboundInvoice_itemid_length = 200;
export const IEDIOutboundInvoice_itemdesc_length = 500;
export const IEDIOutboundInvoice_itemdesc2_length = 500;
export const IEDIOutboundInvoice_cusitemid_length = 200;
export const IEDIOutboundInvoice_uom_length = 20;
export const IEDIOutboundInvoice_requestdate_length = 20;
export const IEDIOutboundInvoice_promisedate_length = 20;

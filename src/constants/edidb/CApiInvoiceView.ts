import { IApiInvoiceView } from '../edidb'
export class CApiInvoiceView implements IApiInvoiceView {
    public ORD_ID:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public BIG_02:string = '';
    public BIG_04:string = '';
    public Exp_Flag:string = '';
    public ImportDate:Date;
    public ExportDate:Date;
    public GCN:string = '';
    public TCN:string = '';
    public AckDesc:string = '';
    public Acct_CusNo:string = '';
    public constructor(init?:Partial<CApiInvoiceView>) { Object.assign(this, init); }
}
export const IApiInvoiceView_TP_PartID_length = 30;
export const IApiInvoiceView_TP_Name_length = 30;
export const IApiInvoiceView_BIG_02_length = 22;
export const IApiInvoiceView_BIG_04_length = 22;
export const IApiInvoiceView_Exp_Flag_length = 1;
export const IApiInvoiceView_GCN_length = 20;
export const IApiInvoiceView_TCN_length = 20;
export const IApiInvoiceView_AckDesc_length = 10;
export const IApiInvoiceView_Acct_CusNo_length = 50;

export const kApiInvoiceView_ORD_ID="ORD_ID";
export const kApiInvoiceView_TP_PartID="TP_PartID";
export const kApiInvoiceView_TP_Name="TP_Name";
export const kApiInvoiceView_BIG_02="BIG_02";
export const kApiInvoiceView_BIG_04="BIG_04";
export const kApiInvoiceView_Exp_Flag="Exp_Flag";
export const kApiInvoiceView_ImportDate="ImportDate";
export const kApiInvoiceView_ExportDate="ExportDate";
export const kApiInvoiceView_GCN="GCN";
export const kApiInvoiceView_TCN="TCN";
export const kApiInvoiceView_AckDesc="AckDesc";
export const kApiInvoiceView_Acct_CusNo="Acct_CusNo";

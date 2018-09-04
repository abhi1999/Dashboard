import { IApiPurchaseOrderView } from '../edidb'
export class CApiPurchaseOrderView implements IApiPurchaseOrderView {
    public PO_ID:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public BEG_03:string = '';
    public BEG_04:string = '';
    public BEG_05:string = '';
    public ImportDate:Date;
    public ExportDate:Date;
    public Misc_ID:number = 0;
    public HoldID:number = 0;
    public Notes:string = '';
    public ErrorID:number = 0;
    public TLE:number = 0;
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CApiPurchaseOrderView>) { Object.assign(this, init); }
}
export const IApiPurchaseOrderView_TP_PartID_length = 30;
export const IApiPurchaseOrderView_TP_Name_length = 30;
export const IApiPurchaseOrderView_BEG_03_length = 22;
export const IApiPurchaseOrderView_BEG_04_length = 30;
export const IApiPurchaseOrderView_BEG_05_length = 8;
export const IApiPurchaseOrderView_Notes_length = 60;

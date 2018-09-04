import { IC303v850h } from '../edidb'
export class CC303v850h implements IC303v850h {
    public PO_ID:number = 0;
    public TP_PartID:string = '';
    public BEG_01:string = '';
    public BEG_02:string = '';
    public BEG_03:string = '';
    public BEG_04:string = '';
    public BEG_05:string = '';
    public BEG_06:string = '';
    public CTT_01:string = '';
    public Exp_Flag:string = '';
    public Int_OrdID:number = 0;
    public SDQ_Flag:string = '';
    public CUR_02:string = '';
    public ImportDate:Date;
    public ExportDate:Date;
    public Misc_ID:number = 0;
    public URECID:string = '';
    public UDID:string = '';
    public Revision:number = 0;
    public Cust_Ship_Via_ID:string = '';
    public Cust_Terms_ID:string = '';
    public FrtPayMeth:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CC303v850h>) { Object.assign(this, init); }
}
export const IC303v850h_TP_PartID_length = 30;
export const IC303v850h_BEG_01_length = 2;
export const IC303v850h_BEG_02_length = 3;
export const IC303v850h_BEG_03_length = 22;
export const IC303v850h_BEG_04_length = 30;
export const IC303v850h_BEG_05_length = 8;
export const IC303v850h_BEG_06_length = 30;
export const IC303v850h_CTT_01_length = 7;
export const IC303v850h_Exp_Flag_length = 1;
export const IC303v850h_SDQ_Flag_length = 1;
export const IC303v850h_CUR_02_length = 3;
export const IC303v850h_Cust_Ship_Via_ID_length = 50;
export const IC303v850h_Cust_Terms_ID_length = 50;
export const IC303v850h_FrtPayMeth_length = 3;

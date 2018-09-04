import { IC303v810h } from '../edidb'
export class CC303v810h implements IC303v810h {
    public ORD_ID:number = 0;
    public TP_PartID:string = '';
    public BIG_01:string = '';
    public BIG_02:string = '';
    public BIG_03:string = '';
    public BIG_04:string = '';
    public MISC_Charge:string = '';
    public FRT_Charge:string = '';
    public Sls_Tax:string = '';
    public Ship_Via_ID:string = '';
    public TDS_01:string = '';
    public CTT_01:string = '';
    public Exp_Flag:string = '';
    public TotCartons:number = 0;
    public Bol_No:string = '';
    public TotWeight:number = 0;
    public ImportDate:Date;
    public ExportDate:Date;
    public AcctInvTotal:number = 0;
    public CUR_02:string = '';
    public AckID:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public TaxableAmt:number = 0;
    public FrtTaxAmt:number = 0;
    public Acct_RecID:string = '';
    public Acct_CusNo:string = '';
    public constructor(init?:Partial<CC303v810h>) { Object.assign(this, init); }
}
export const IC303v810h_TP_PartID_length = 30;
export const IC303v810h_BIG_01_length = 8;
export const IC303v810h_BIG_02_length = 22;
export const IC303v810h_BIG_03_length = 8;
export const IC303v810h_BIG_04_length = 22;
export const IC303v810h_MISC_Charge_length = 10;
export const IC303v810h_FRT_Charge_length = 10;
export const IC303v810h_Sls_Tax_length = 10;
export const IC303v810h_Ship_Via_ID_length = 30;
export const IC303v810h_TDS_01_length = 11;
export const IC303v810h_CTT_01_length = 6;
export const IC303v810h_Exp_Flag_length = 1;
export const IC303v810h_Bol_No_length = 30;
export const IC303v810h_CUR_02_length = 3;
export const IC303v810h_AckID_length = 1;
export const IC303v810h_Acct_RecID_length = 30;
export const IC303v810h_Acct_CusNo_length = 50;

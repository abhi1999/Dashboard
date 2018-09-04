import { IC303v810hBaseView } from '../edidb'
export class CC303v810hBaseView implements IC303v810hBaseView {
    public ORD_ID:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public BIG_02:string = '';
    public BIG_04:string = '';
    public Exp_Flag:string = '';
    public status:string = '';
    public ImportDate:Date;
    public ExportDate:Date;
    public GCN:number = 0;
    public TCN:number = 0;
    public AckDesc:string = '';
    public Acct_CusNo:string = '';
    public constructor(init?:Partial<CC303v810hBaseView>) { Object.assign(this, init); }
}
export const IC303v810hBaseView_TP_PartID_length = 30;
export const IC303v810hBaseView_TP_Name_length = 30;
export const IC303v810hBaseView_BIG_02_length = 22;
export const IC303v810hBaseView_BIG_04_length = 22;
export const IC303v810hBaseView_Exp_Flag_length = 1;
export const IC303v810hBaseView_status_length = 500;
export const IC303v810hBaseView_AckDesc_length = 10;
export const IC303v810hBaseView_Acct_CusNo_length = 50;

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

export const kC303v810hBaseView_ORD_ID="ORD_ID";
export const kC303v810hBaseView_TP_PartID="TP_PartID";
export const kC303v810hBaseView_TP_Name="TP_Name";
export const kC303v810hBaseView_BIG_02="BIG_02";
export const kC303v810hBaseView_BIG_04="BIG_04";
export const kC303v810hBaseView_Exp_Flag="Exp_Flag";
export const kC303v810hBaseView_status="status";
export const kC303v810hBaseView_ImportDate="ImportDate";
export const kC303v810hBaseView_ExportDate="ExportDate";
export const kC303v810hBaseView_GCN="GCN";
export const kC303v810hBaseView_TCN="TCN";
export const kC303v810hBaseView_AckDesc="AckDesc";
export const kC303v810hBaseView_Acct_CusNo="Acct_CusNo";

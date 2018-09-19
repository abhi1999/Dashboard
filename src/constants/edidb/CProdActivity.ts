import { IProdActivity } from '../edidb'
export class CProdActivity implements IProdActivity {
    public PA_ID:number = 0;
    public TP_PartID:string = '';
    public N102:string = '';
    public N104:string = '';
    public ItemID:string = '';
    public sDate:Date;
    public eDate:Date;
    public ItemQual:string = '';
    public CreateDate:Date;
    public VPID:number = 0;
    public Misc_ID:number = 0;
    public constructor(init?:Partial<CProdActivity>) { Object.assign(this, init); }
}
export const IProdActivity_TP_PartID_length = 30;
export const IProdActivity_N102_length = 80;
export const IProdActivity_N104_length = 30;
export const IProdActivity_ItemID_length = 500;
export const IProdActivity_ItemQual_length = 2;

export const kProdActivity_PA_ID="PA_ID";
export const kProdActivity_TP_PartID="TP_PartID";
export const kProdActivity_N102="N102";
export const kProdActivity_N104="N104";
export const kProdActivity_ItemID="ItemID";
export const kProdActivity_sDate="sDate";
export const kProdActivity_eDate="eDate";
export const kProdActivity_ItemQual="ItemQual";
export const kProdActivity_CreateDate="CreateDate";
export const kProdActivity_VPID="VPID";
export const kProdActivity_Misc_ID="Misc_ID";

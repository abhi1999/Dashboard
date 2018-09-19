import { IItemCustAllBackup } from '../edidb'
export class CItemCustAllBackup implements IItemCustAllBackup {
    public Int_Item_No:string = '';
    public TP_PartID:string = '';
    public Cust_Item_Qual:string = '';
    public Cust_Item_ID:string = '';
    public Cust_Item_UM:string = '';
    public Cust_Item_SizeWidth:string = '';
    public Cust_Item_Pack_Qty:number = 0;
    public Cust_Item_UMout:string = '';
    public Cust_Item_UMfactor:number = 0;
    public Cust_Item_UMoperin:string = '';
    public Cust_Item_UMoperout:string = '';
    public pricecode:string = '';
    public price:number = 0;
    public locid:string = '';
    public ICID:string = '';
    public GenericRef:boolean;
    public constructor(init?:Partial<CItemCustAllBackup>) { Object.assign(this, init); }
}
export const IItemCustAllBackup_Int_Item_No_length = 30;
export const IItemCustAllBackup_TP_PartID_length = 30;
export const IItemCustAllBackup_Cust_Item_Qual_length = 2;
export const IItemCustAllBackup_Cust_Item_ID_length = 50;
export const IItemCustAllBackup_Cust_Item_UM_length = 10;
export const IItemCustAllBackup_Cust_Item_SizeWidth_length = 5;
export const IItemCustAllBackup_Cust_Item_UMout_length = 10;
export const IItemCustAllBackup_Cust_Item_UMoperin_length = 1;
export const IItemCustAllBackup_Cust_Item_UMoperout_length = 1;
export const IItemCustAllBackup_pricecode_length = 30;
export const IItemCustAllBackup_locid_length = 20;

export const kItemCustAllBackup_Int_Item_No="Int_Item_No";
export const kItemCustAllBackup_TP_PartID="TP_PartID";
export const kItemCustAllBackup_Cust_Item_Qual="Cust_Item_Qual";
export const kItemCustAllBackup_Cust_Item_ID="Cust_Item_ID";
export const kItemCustAllBackup_Cust_Item_UM="Cust_Item_UM";
export const kItemCustAllBackup_Cust_Item_SizeWidth="Cust_Item_SizeWidth";
export const kItemCustAllBackup_Cust_Item_Pack_Qty="Cust_Item_Pack_Qty";
export const kItemCustAllBackup_Cust_Item_UMout="Cust_Item_UMout";
export const kItemCustAllBackup_Cust_Item_UMfactor="Cust_Item_UMfactor";
export const kItemCustAllBackup_Cust_Item_UMoperin="Cust_Item_UMoperin";
export const kItemCustAllBackup_Cust_Item_UMoperout="Cust_Item_UMoperout";
export const kItemCustAllBackup_pricecode="pricecode";
export const kItemCustAllBackup_price="price";
export const kItemCustAllBackup_locid="locid";
export const kItemCustAllBackup_ICID="ICID";
export const kItemCustAllBackup_GenericRef="GenericRef";

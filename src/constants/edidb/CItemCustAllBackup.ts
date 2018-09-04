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

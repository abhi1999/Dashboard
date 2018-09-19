import { IItemCustAll } from '../edidb'
export class CItemCustAll implements IItemCustAll {
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
    public constructor(init?:Partial<CItemCustAll>) { Object.assign(this, init); }
}
export const IItemCustAll_Int_Item_No_length = 500;
export const IItemCustAll_TP_PartID_length = 30;
export const IItemCustAll_Cust_Item_Qual_length = 2;
export const IItemCustAll_Cust_Item_ID_length = 50;
export const IItemCustAll_Cust_Item_UM_length = 10;
export const IItemCustAll_Cust_Item_SizeWidth_length = 5;
export const IItemCustAll_Cust_Item_UMout_length = 10;
export const IItemCustAll_Cust_Item_UMoperin_length = 1;
export const IItemCustAll_Cust_Item_UMoperout_length = 1;
export const IItemCustAll_pricecode_length = 30;
export const IItemCustAll_locid_length = 20;

export const kItemCustAll_Int_Item_No="Int_Item_No";
export const kItemCustAll_TP_PartID="TP_PartID";
export const kItemCustAll_Cust_Item_Qual="Cust_Item_Qual";
export const kItemCustAll_Cust_Item_ID="Cust_Item_ID";
export const kItemCustAll_Cust_Item_UM="Cust_Item_UM";
export const kItemCustAll_Cust_Item_SizeWidth="Cust_Item_SizeWidth";
export const kItemCustAll_Cust_Item_Pack_Qty="Cust_Item_Pack_Qty";
export const kItemCustAll_Cust_Item_UMout="Cust_Item_UMout";
export const kItemCustAll_Cust_Item_UMfactor="Cust_Item_UMfactor";
export const kItemCustAll_Cust_Item_UMoperin="Cust_Item_UMoperin";
export const kItemCustAll_Cust_Item_UMoperout="Cust_Item_UMoperout";
export const kItemCustAll_pricecode="pricecode";
export const kItemCustAll_price="price";
export const kItemCustAll_locid="locid";
export const kItemCustAll_ICID="ICID";
export const kItemCustAll_GenericRef="GenericRef";

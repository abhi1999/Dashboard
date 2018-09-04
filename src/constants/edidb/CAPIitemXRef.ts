import { IAPIitemXRef } from '../edidb'
export class CAPIitemXRef implements IAPIitemXRef {
    public TP_Name:string = '';
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
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public Loc_Override:string = '';
    public constructor(init?:Partial<CAPIitemXRef>) { Object.assign(this, init); }
}
export const IAPIitemXRef_TP_Name_length = 30;
export const IAPIitemXRef_Int_Item_No_length = 500;
export const IAPIitemXRef_TP_PartID_length = 30;
export const IAPIitemXRef_Cust_Item_Qual_length = 2;
export const IAPIitemXRef_Cust_Item_ID_length = 50;
export const IAPIitemXRef_Cust_Item_UM_length = 10;
export const IAPIitemXRef_Cust_Item_SizeWidth_length = 5;
export const IAPIitemXRef_Cust_Item_UMout_length = 10;
export const IAPIitemXRef_Cust_Item_UMoperin_length = 1;
export const IAPIitemXRef_Cust_Item_UMoperout_length = 1;
export const IAPIitemXRef_pricecode_length = 30;
export const IAPIitemXRef_locid_length = 20;
export const IAPIitemXRef_User1_length = 50;
export const IAPIitemXRef_User2_length = 50;
export const IAPIitemXRef_User3_length = 50;
export const IAPIitemXRef_User4_length = 50;
export const IAPIitemXRef_User5_length = 50;
export const IAPIitemXRef_Loc_Override_length = 20;

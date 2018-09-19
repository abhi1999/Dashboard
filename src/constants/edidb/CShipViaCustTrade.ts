import { IShipViaCustTrade } from '../edidb'
export class CShipViaCustTrade implements IShipViaCustTrade {
    public TP_Name:string = '';
    public Ship_Via_ID:string = '';
    public TP_PartID:string = '';
    public Cust_Ship_Via_ID:string = '';
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public constructor(init?:Partial<CShipViaCustTrade>) { Object.assign(this, init); }
}
export const IShipViaCustTrade_TP_Name_length = 30;
export const IShipViaCustTrade_Ship_Via_ID_length = 30;
export const IShipViaCustTrade_TP_PartID_length = 30;
export const IShipViaCustTrade_Cust_Ship_Via_ID_length = 50;
export const IShipViaCustTrade_User1_length = 50;
export const IShipViaCustTrade_User2_length = 50;
export const IShipViaCustTrade_User3_length = 50;
export const IShipViaCustTrade_User4_length = 50;
export const IShipViaCustTrade_User5_length = 50;

export const kShipViaCustTrade_TP_Name="TP_Name";
export const kShipViaCustTrade_Ship_Via_ID="Ship_Via_ID";
export const kShipViaCustTrade_TP_PartID="TP_PartID";
export const kShipViaCustTrade_Cust_Ship_Via_ID="Cust_Ship_Via_ID";
export const kShipViaCustTrade_User1="User1";
export const kShipViaCustTrade_User2="User2";
export const kShipViaCustTrade_User3="User3";
export const kShipViaCustTrade_User4="User4";
export const kShipViaCustTrade_User5="User5";

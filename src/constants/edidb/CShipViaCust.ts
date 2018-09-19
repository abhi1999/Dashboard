import { IShipViaCust } from '../edidb'
export class CShipViaCust implements IShipViaCust {
    public Ship_Via_ID:string = '';
    public TP_PartID:string = '';
    public Cust_Ship_Via_ID:string = '';
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public constructor(init?:Partial<CShipViaCust>) { Object.assign(this, init); }
}
export const IShipViaCust_Ship_Via_ID_length = 30;
export const IShipViaCust_TP_PartID_length = 30;
export const IShipViaCust_Cust_Ship_Via_ID_length = 50;
export const IShipViaCust_User1_length = 50;
export const IShipViaCust_User2_length = 50;
export const IShipViaCust_User3_length = 50;
export const IShipViaCust_User4_length = 50;
export const IShipViaCust_User5_length = 50;

export const kShipViaCust_Ship_Via_ID="Ship_Via_ID";
export const kShipViaCust_TP_PartID="TP_PartID";
export const kShipViaCust_Cust_Ship_Via_ID="Cust_Ship_Via_ID";
export const kShipViaCust_User1="User1";
export const kShipViaCust_User2="User2";
export const kShipViaCust_User3="User3";
export const kShipViaCust_User4="User4";
export const kShipViaCust_User5="User5";

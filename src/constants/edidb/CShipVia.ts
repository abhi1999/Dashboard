import { IShipVia } from '../edidb'
export class CShipVia implements IShipVia {
    public Ship_Via_ID:string = '';
    public Ship_Via_Name:string = '';
    public SCAC:string = '';
    public Ship_Via_Type:string = '';
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public constructor(init?:Partial<CShipVia>) { Object.assign(this, init); }
}
export const IShipVia_Ship_Via_ID_length = 30;
export const IShipVia_Ship_Via_Name_length = 30;
export const IShipVia_SCAC_length = 4;
export const IShipVia_Ship_Via_Type_length = 2;
export const IShipVia_User1_length = 50;
export const IShipVia_User2_length = 50;
export const IShipVia_User3_length = 50;
export const IShipVia_User4_length = 50;
export const IShipVia_User5_length = 50;
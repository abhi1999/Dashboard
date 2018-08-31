import { IShipVia } from '../edidb';

export default class ShipVia implements IShipVia {
    public Id:string;
    public SCAC:string;
    public Ship_Via_ID:string;
    public Ship_Via_Name:string;
    public Ship_Via_Type:string;
    public User1:string;
    public User2:string;
    public User3:string;
    public User4:string;
    public User5:string;
    public test:boolean;

    public constructor(init?:Partial<ShipVia>) {
        Object.assign(this, init);
    }
}
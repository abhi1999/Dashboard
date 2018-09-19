import { IShipVia } from '../edidb';
import uuid from 'uuid-v4';

export default class ShipViaModel implements IShipVia {
    public Id: string = uuid();
    public SCAC: string = "";
    public Ship_Via_ID: string = "";
    public Ship_Via_Name: string = "";
    public Ship_Via_Type: string = "";
    public User1: string = "";
    public User2: string = "";
    public User3: string = "";
    public User4: string = "";
    public User5: string = "";
    public Test: boolean = false;

    public constructor(init?: Partial<ShipViaModel>) {
        Object.assign(this, init);
    }

}
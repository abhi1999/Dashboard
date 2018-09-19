import { IShipTo } from '../edidb';

export default class ShipTo implements IShipTo {

    public Id:string = '';

    public TP_PartID:string = '';
    public ShipTo_ID:string = '';
    public ShipTo_Xref:string = '';
    public ShipTo_Name:string = '';
    public ShipTo_Address:string = '';
    public ShipTo_Address2:string = '';
    public ShipTo_City:string = '';
    public ShipTo_State:string = '';
    public ShipTo_Zip:string = '';
    public ShipTo_Country:string = '';
    public ShipTo_CustID:string = '';
    public ShipTo_DC:string = '';
    public ShipTo_ShipDateQual:string = '';
    public ShipTo_StoreName:string = '';
    public ShipTo_Carrier:string = '';
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public ShipTo_rfid:boolean;
    public ShipTo_GroupID:string = '';
    public TransitDays:number = 0;
    public FrozenDays:number = 0;
    public ShipDlvPattern:string = '';
    public Loc_Override:string = '';

    public constructor(init?:Partial<ShipTo>) {
        Object.assign(this, init);
    }
}
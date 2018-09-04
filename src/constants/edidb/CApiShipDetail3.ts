import { IApiShipDetail3 } from '../edidb'
export class CApiShipDetail3 implements IApiShipDetail3 {
    public Loc_ID:string = '';
    public ShipFr_Name:string = '';
    public ShipFr_Addr1:string = '';
    public ShipFr_Add2:string = '';
    public ShipFr_City:string = '';
    public ShipFr_St:string = '';
    public ShipFr_Zip:string = '';
    public ShipFr_Country:string = '';
    public Cust_PO:string = '';
    public ShipTo_Xref:string = '';
    public Source:string = '';
    public constructor(init?:Partial<CApiShipDetail3>) { Object.assign(this, init); }
}
export const IApiShipDetail3_Loc_ID_length = 20;
export const IApiShipDetail3_ShipFr_Name_length = 50;
export const IApiShipDetail3_ShipFr_Addr1_length = 50;
export const IApiShipDetail3_ShipFr_Add2_length = 50;
export const IApiShipDetail3_ShipFr_City_length = 30;
export const IApiShipDetail3_ShipFr_St_length = 20;
export const IApiShipDetail3_ShipFr_Zip_length = 20;
export const IApiShipDetail3_ShipFr_Country_length = 30;
export const IApiShipDetail3_Cust_PO_length = 30;
export const IApiShipDetail3_ShipTo_Xref_length = 30;
export const IApiShipDetail3_Source_length = 13;

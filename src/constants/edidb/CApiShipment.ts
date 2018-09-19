import { IApiShipment } from '../edidb'
export class CApiShipment implements IApiShipment {
    public Asn_ID:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public TP_ID:string = '';
    public Bol_No:string = '';
    public Asn_Complete:string = '';
    public Exp_Flag:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public AckDesc:string = '';
    public HoldID:number = 0;
    public NoteText:string = '';
    public ErrorID:number = 0;
    public Ship_Date:string = '';
    public TLE:number = 0;
    public Pro_No:string = '';
    public Ship_Via_Name:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CApiShipment>) { Object.assign(this, init); }
}
export const IApiShipment_TP_PartID_length = 30;
export const IApiShipment_TP_Name_length = 30;
export const IApiShipment_TP_ID_length = 100;
export const IApiShipment_Bol_No_length = 30;
export const IApiShipment_Asn_Complete_length = 1;
export const IApiShipment_Exp_Flag_length = 1;
export const IApiShipment_GCN_length = 20;
export const IApiShipment_TCN_length = 20;
export const IApiShipment_AckDesc_length = 10;
export const IApiShipment_NoteText_length = 2000;
export const IApiShipment_Ship_Date_length = 8;
export const IApiShipment_Pro_No_length = 30;
export const IApiShipment_Ship_Via_Name_length = 30;

export const kApiShipment_Asn_ID="Asn_ID";
export const kApiShipment_TP_PartID="TP_PartID";
export const kApiShipment_TP_Name="TP_Name";
export const kApiShipment_TP_ID="TP_ID";
export const kApiShipment_Bol_No="Bol_No";
export const kApiShipment_Asn_Complete="Asn_Complete";
export const kApiShipment_Exp_Flag="Exp_Flag";
export const kApiShipment_GCN="GCN";
export const kApiShipment_TCN="TCN";
export const kApiShipment_AckDesc="AckDesc";
export const kApiShipment_HoldID="HoldID";
export const kApiShipment_NoteText="NoteText";
export const kApiShipment_ErrorID="ErrorID";
export const kApiShipment_Ship_Date="Ship_Date";
export const kApiShipment_TLE="TLE";
export const kApiShipment_Pro_No="Pro_No";
export const kApiShipment_Ship_Via_Name="Ship_Via_Name";
export const kApiShipment_VPIDFA="VPIDFA";

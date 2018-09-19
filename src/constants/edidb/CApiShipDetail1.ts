import { IApiShipDetail1 } from '../edidb'
export class CApiShipDetail1 implements IApiShipDetail1 {
    public Asn_ID:number = 0;
    public Bol_No:string = '';
    public Pro_No:string = '';
    public ShipToPeps:boolean;
    public Ship_Weight:number = 0;
    public Ship_Date:string = '';
    public Del_Date:string = '';
    public Ship_Via_ID:string = '';
    public Asn_Complete:string = '';
    public Exp_Flag:string = '';
    public TP_PartID:string = '';
    public User1:string = '';
    public User2:string = '';
    public Trailer:string = '';
    public Collect:boolean;
    public AckID:string = '';
    public GCN:number = 0;
    public TCN:number = 0;
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public SealNo:string = '';
    public ExportDate:Date;
    public CreatedDate:Date;
    public PackImport:string = '';
    public VPIDFA:number = 0;
    public TP_Name:string = '';
    public Ship_Via_Name:string = '';
    public Ship_Date_Full:Date;
    public Del_Date_Full:Date;
    public Exp:string = '';
    public AckDesc:string = '';
    public PackImportDesc:string = '';
    public constructor(init?:Partial<CApiShipDetail1>) { Object.assign(this, init); }
}
export const IApiShipDetail1_Bol_No_length = 30;
export const IApiShipDetail1_Pro_No_length = 30;
export const IApiShipDetail1_Ship_Date_length = 8;
export const IApiShipDetail1_Del_Date_length = 8;
export const IApiShipDetail1_Ship_Via_ID_length = 30;
export const IApiShipDetail1_Asn_Complete_length = 1;
export const IApiShipDetail1_Exp_Flag_length = 1;
export const IApiShipDetail1_TP_PartID_length = 30;
export const IApiShipDetail1_User1_length = 50;
export const IApiShipDetail1_User2_length = 50;
export const IApiShipDetail1_Trailer_length = 50;
export const IApiShipDetail1_AckID_length = 1;
export const IApiShipDetail1_User3_length = 50;
export const IApiShipDetail1_User4_length = 50;
export const IApiShipDetail1_User5_length = 50;
export const IApiShipDetail1_SealNo_length = 200;
export const IApiShipDetail1_PackImport_length = 1;
export const IApiShipDetail1_TP_Name_length = 30;
export const IApiShipDetail1_Ship_Via_Name_length = 30;
export const IApiShipDetail1_Exp_length = 500;
export const IApiShipDetail1_AckDesc_length = 10;
export const IApiShipDetail1_PackImportDesc_length = 500;

export const kApiShipDetail1_Asn_ID="Asn_ID";
export const kApiShipDetail1_Bol_No="Bol_No";
export const kApiShipDetail1_Pro_No="Pro_No";
export const kApiShipDetail1_ShipToPeps="ShipToPeps";
export const kApiShipDetail1_Ship_Weight="Ship_Weight";
export const kApiShipDetail1_Ship_Date="Ship_Date";
export const kApiShipDetail1_Del_Date="Del_Date";
export const kApiShipDetail1_Ship_Via_ID="Ship_Via_ID";
export const kApiShipDetail1_Asn_Complete="Asn_Complete";
export const kApiShipDetail1_Exp_Flag="Exp_Flag";
export const kApiShipDetail1_TP_PartID="TP_PartID";
export const kApiShipDetail1_User1="User1";
export const kApiShipDetail1_User2="User2";
export const kApiShipDetail1_Trailer="Trailer";
export const kApiShipDetail1_Collect="Collect";
export const kApiShipDetail1_AckID="AckID";
export const kApiShipDetail1_GCN="GCN";
export const kApiShipDetail1_TCN="TCN";
export const kApiShipDetail1_User3="User3";
export const kApiShipDetail1_User4="User4";
export const kApiShipDetail1_User5="User5";
export const kApiShipDetail1_SealNo="SealNo";
export const kApiShipDetail1_ExportDate="ExportDate";
export const kApiShipDetail1_CreatedDate="CreatedDate";
export const kApiShipDetail1_PackImport="PackImport";
export const kApiShipDetail1_VPIDFA="VPIDFA";
export const kApiShipDetail1_TP_Name="TP_Name";
export const kApiShipDetail1_Ship_Via_Name="Ship_Via_Name";
export const kApiShipDetail1_Ship_Date_Full="Ship_Date_Full";
export const kApiShipDetail1_Del_Date_Full="Del_Date_Full";
export const kApiShipDetail1_Exp="Exp";
export const kApiShipDetail1_AckDesc="AckDesc";
export const kApiShipDetail1_PackImportDesc="PackImportDesc";

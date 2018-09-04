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
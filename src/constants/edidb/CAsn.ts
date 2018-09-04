import { IAsn } from '../edidb'
export class CAsn implements IAsn {
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
    public GCN:string = '';
    public TCN:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public SealNo:string = '';
    public ExportDate:Date;
    public CreatedDate:Date;
    public PackImport:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CAsn>) { Object.assign(this, init); }
}
export const IAsn_Bol_No_length = 30;
export const IAsn_Pro_No_length = 30;
export const IAsn_Ship_Date_length = 8;
export const IAsn_Del_Date_length = 8;
export const IAsn_Ship_Via_ID_length = 30;
export const IAsn_Asn_Complete_length = 1;
export const IAsn_Exp_Flag_length = 1;
export const IAsn_TP_PartID_length = 30;
export const IAsn_User1_length = 50;
export const IAsn_User2_length = 50;
export const IAsn_Trailer_length = 50;
export const IAsn_AckID_length = 1;
export const IAsn_GCN_length = 20;
export const IAsn_TCN_length = 20;
export const IAsn_User3_length = 50;
export const IAsn_User4_length = 50;
export const IAsn_User5_length = 50;
export const IAsn_SealNo_length = 200;
export const IAsn_PackImport_length = 1;

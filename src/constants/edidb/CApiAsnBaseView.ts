import { IApiAsnBaseView } from '../edidb'
export class CApiAsnBaseView implements IApiAsnBaseView {
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
    public NoteText:string = '';
    public constructor(init?:Partial<CApiAsnBaseView>) { Object.assign(this, init); }
}
export const IApiAsnBaseView_Bol_No_length = 30;
export const IApiAsnBaseView_Pro_No_length = 30;
export const IApiAsnBaseView_Ship_Date_length = 8;
export const IApiAsnBaseView_Del_Date_length = 8;
export const IApiAsnBaseView_Ship_Via_ID_length = 30;
export const IApiAsnBaseView_Asn_Complete_length = 1;
export const IApiAsnBaseView_Exp_Flag_length = 1;
export const IApiAsnBaseView_TP_PartID_length = 30;
export const IApiAsnBaseView_User1_length = 50;
export const IApiAsnBaseView_User2_length = 50;
export const IApiAsnBaseView_Trailer_length = 50;
export const IApiAsnBaseView_AckID_length = 1;
export const IApiAsnBaseView_User3_length = 50;
export const IApiAsnBaseView_User4_length = 50;
export const IApiAsnBaseView_User5_length = 50;
export const IApiAsnBaseView_SealNo_length = 200;
export const IApiAsnBaseView_PackImport_length = 1;
export const IApiAsnBaseView_TP_Name_length = 30;
export const IApiAsnBaseView_NoteText_length = 2000;
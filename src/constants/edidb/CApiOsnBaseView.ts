import { IApiOsnBaseView } from '../edidb'
export class CApiOsnBaseView implements IApiOsnBaseView {
    public Asn_ID:number = 0;
    public TP_Name:string = '';
    public Bol_No:string = '';
    public Asn_Complete:string = '';
    public Exp_Flag:string = '';
    public GCN:number = 0;
    public TCN:number = 0;
    public AckDesc:string = '';
    public HoldID:number = 0;
    public NoteText:string = '';
    public ErrorID:string = '';
    public Ship_Date:string = '';
    public TLE:number = 0;
    public VPIDFA:number = 0;
    public TP_PartID:string = '';
    public constructor(init?:Partial<CApiOsnBaseView>) { Object.assign(this, init); }
}
export const IApiOsnBaseView_TP_Name_length = 30;
export const IApiOsnBaseView_Bol_No_length = 30;
export const IApiOsnBaseView_Asn_Complete_length = 1;
export const IApiOsnBaseView_Exp_Flag_length = 1;
export const IApiOsnBaseView_AckDesc_length = 10;
export const IApiOsnBaseView_NoteText_length = 2000;
export const IApiOsnBaseView_ErrorID_length = 50;
export const IApiOsnBaseView_Ship_Date_length = 8;
export const IApiOsnBaseView_TP_PartID_length = 30;

export const kApiOsnBaseView_Asn_ID="Asn_ID";
export const kApiOsnBaseView_TP_Name="TP_Name";
export const kApiOsnBaseView_Bol_No="Bol_No";
export const kApiOsnBaseView_Asn_Complete="Asn_Complete";
export const kApiOsnBaseView_Exp_Flag="Exp_Flag";
export const kApiOsnBaseView_GCN="GCN";
export const kApiOsnBaseView_TCN="TCN";
export const kApiOsnBaseView_AckDesc="AckDesc";
export const kApiOsnBaseView_HoldID="HoldID";
export const kApiOsnBaseView_NoteText="NoteText";
export const kApiOsnBaseView_ErrorID="ErrorID";
export const kApiOsnBaseView_Ship_Date="Ship_Date";
export const kApiOsnBaseView_TLE="TLE";
export const kApiOsnBaseView_VPIDFA="VPIDFA";
export const kApiOsnBaseView_TP_PartID="TP_PartID";

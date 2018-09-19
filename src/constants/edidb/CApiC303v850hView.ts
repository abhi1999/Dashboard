import { IApiC303v850hView } from '../edidb'
export class CApiC303v850hView implements IApiC303v850hView {
    public PO_ID:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public BEG_03:string = '';
    public BEG_04:string = '';
    public BEG_05:string = '';
    public ImportDate:Date;
    public ExportDate:Date;
    public Exp_Flag:string = '';
    public Status:string = '';
    public Misc_ID:number = 0;
    public HoldID:number = 0;
    public Notes:string = '';
    public ErrorID:string = '';
    public TLE:number = 0;
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CApiC303v850hView>) { Object.assign(this, init); }
}
export const IApiC303v850hView_TP_PartID_length = 30;
export const IApiC303v850hView_TP_Name_length = 30;
export const IApiC303v850hView_BEG_03_length = 22;
export const IApiC303v850hView_BEG_04_length = 30;
export const IApiC303v850hView_BEG_05_length = 8;
export const IApiC303v850hView_Exp_Flag_length = 1;
export const IApiC303v850hView_Status_length = 500;
export const IApiC303v850hView_Notes_length = 60;
export const IApiC303v850hView_ErrorID_length = 50;

export const kApiC303v850hView_PO_ID="PO_ID";
export const kApiC303v850hView_TP_PartID="TP_PartID";
export const kApiC303v850hView_TP_Name="TP_Name";
export const kApiC303v850hView_BEG_03="BEG_03";
export const kApiC303v850hView_BEG_04="BEG_04";
export const kApiC303v850hView_BEG_05="BEG_05";
export const kApiC303v850hView_ImportDate="ImportDate";
export const kApiC303v850hView_ExportDate="ExportDate";
export const kApiC303v850hView_Exp_Flag="Exp_Flag";
export const kApiC303v850hView_Status="Status";
export const kApiC303v850hView_Misc_ID="Misc_ID";
export const kApiC303v850hView_HoldID="HoldID";
export const kApiC303v850hView_Notes="Notes";
export const kApiC303v850hView_ErrorID="ErrorID";
export const kApiC303v850hView_TLE="TLE";
export const kApiC303v850hView_VPIDFA="VPIDFA";

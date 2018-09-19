import { IApiC303v850hBaseView } from '../edidb'
export class CApiC303v850hBaseView implements IApiC303v850hBaseView {
    public rownum:number = 0;
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
    public constructor(init?:Partial<CApiC303v850hBaseView>) { Object.assign(this, init); }
}
export const IApiC303v850hBaseView_TP_PartID_length = 30;
export const IApiC303v850hBaseView_TP_Name_length = 30;
export const IApiC303v850hBaseView_BEG_03_length = 22;
export const IApiC303v850hBaseView_BEG_04_length = 30;
export const IApiC303v850hBaseView_BEG_05_length = 8;
export const IApiC303v850hBaseView_Exp_Flag_length = 1;
export const IApiC303v850hBaseView_Status_length = 500;
export const IApiC303v850hBaseView_Notes_length = 60;
export const IApiC303v850hBaseView_ErrorID_length = 50;

export const kApiC303v850hBaseView_rownum="rownum";
export const kApiC303v850hBaseView_PO_ID="PO_ID";
export const kApiC303v850hBaseView_TP_PartID="TP_PartID";
export const kApiC303v850hBaseView_TP_Name="TP_Name";
export const kApiC303v850hBaseView_BEG_03="BEG_03";
export const kApiC303v850hBaseView_BEG_04="BEG_04";
export const kApiC303v850hBaseView_BEG_05="BEG_05";
export const kApiC303v850hBaseView_ImportDate="ImportDate";
export const kApiC303v850hBaseView_ExportDate="ExportDate";
export const kApiC303v850hBaseView_Exp_Flag="Exp_Flag";
export const kApiC303v850hBaseView_Status="Status";
export const kApiC303v850hBaseView_Misc_ID="Misc_ID";
export const kApiC303v850hBaseView_HoldID="HoldID";
export const kApiC303v850hBaseView_Notes="Notes";
export const kApiC303v850hBaseView_ErrorID="ErrorID";
export const kApiC303v850hBaseView_TLE="TLE";
export const kApiC303v850hBaseView_VPIDFA="VPIDFA";

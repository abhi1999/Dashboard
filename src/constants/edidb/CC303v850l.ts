import { IC303v850l } from '../edidb'
export class CC303v850l implements IC303v850l {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public PO1_02:string = '';
    public PO1_03:string = '';
    public PO1_04:string = '';
    public PO1_05:string = '';
    public PO1_06:string = '';
    public PO1_07:string = '';
    public PO1_EDIqty:string = '';
    public PO1_EDIum:string = '';
    public PO1_EDIline:string = '';
    public CTP_02:string = '';
    public CTP_03:string = '';
    public CTP_04:string = '';
    public CTP_05:string = '';
    public CTP_06:string = '';
    public CTP_07:string = '';
    public PS_Type:string = '';
    public PS_Date:string = '';
    public Aut_LMThru:string = '';
    public Aut_MTThru:string = '';
    public PackSize:number = 0;
    public etline_no:number = 0;
    public docline:number = 0;
    public Loc_Override:string = '';
    public constructor(init?:Partial<CC303v850l>) { Object.assign(this, init); }
}
export const IC303v850l_PO1_LineNo_length = 11;
export const IC303v850l_PO1_02_length = 15;
export const IC303v850l_PO1_03_length = 10;
export const IC303v850l_PO1_04_length = 17;
export const IC303v850l_PO1_05_length = 2;
export const IC303v850l_PO1_06_length = 2;
export const IC303v850l_PO1_07_length = 500;
export const IC303v850l_PO1_EDIqty_length = 16;
export const IC303v850l_PO1_EDIum_length = 2;
export const IC303v850l_PO1_EDIline_length = 20;
export const IC303v850l_CTP_02_length = 3;
export const IC303v850l_CTP_03_length = 17;
export const IC303v850l_CTP_04_length = 15;
export const IC303v850l_CTP_05_length = 4;
export const IC303v850l_CTP_06_length = 3;
export const IC303v850l_CTP_07_length = 10;
export const IC303v850l_PS_Type_length = 1;
export const IC303v850l_PS_Date_length = 8;
export const IC303v850l_Aut_LMThru_length = 8;
export const IC303v850l_Aut_MTThru_length = 8;
export const IC303v850l_Loc_Override_length = 20;

export const kC303v850l_PO_ID="PO_ID";
export const kC303v850l_PO1_LineNo="PO1_LineNo";
export const kC303v850l_PO1_02="PO1_02";
export const kC303v850l_PO1_03="PO1_03";
export const kC303v850l_PO1_04="PO1_04";
export const kC303v850l_PO1_05="PO1_05";
export const kC303v850l_PO1_06="PO1_06";
export const kC303v850l_PO1_07="PO1_07";
export const kC303v850l_PO1_EDIqty="PO1_EDIqty";
export const kC303v850l_PO1_EDIum="PO1_EDIum";
export const kC303v850l_PO1_EDIline="PO1_EDIline";
export const kC303v850l_CTP_02="CTP_02";
export const kC303v850l_CTP_03="CTP_03";
export const kC303v850l_CTP_04="CTP_04";
export const kC303v850l_CTP_05="CTP_05";
export const kC303v850l_CTP_06="CTP_06";
export const kC303v850l_CTP_07="CTP_07";
export const kC303v850l_PS_Type="PS_Type";
export const kC303v850l_PS_Date="PS_Date";
export const kC303v850l_Aut_LMThru="Aut_LMThru";
export const kC303v850l_Aut_MTThru="Aut_MTThru";
export const kC303v850l_PackSize="PackSize";
export const kC303v850l_etline_no="etline_no";
export const kC303v850l_docline="docline";
export const kC303v850l_Loc_Override="Loc_Override";

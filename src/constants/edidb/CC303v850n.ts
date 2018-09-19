import { IC303v850n } from '../edidb'
export class CC303v850n implements IC303v850n {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public N1_01:string = '';
    public N1_02:string = '';
    public N1_03:string = '';
    public N1_04:string = '';
    public N2_01:string = '';
    public N2_02:string = '';
    public N3_01:string = '';
    public N3_02:string = '';
    public N4_01:string = '';
    public N4_02:string = '';
    public N4_03:string = '';
    public N4_04:string = '';
    public N4_05:string = '';
    public N4_06:string = '';
    public constructor(init?:Partial<CC303v850n>) { Object.assign(this, init); }
}
export const IC303v850n_PO1_LineNo_length = 11;
export const IC303v850n_N1_01_length = 3;
export const IC303v850n_N1_02_length = 60;
export const IC303v850n_N1_03_length = 2;
export const IC303v850n_N1_04_length = 80;
export const IC303v850n_N2_01_length = 60;
export const IC303v850n_N2_02_length = 60;
export const IC303v850n_N3_01_length = 60;
export const IC303v850n_N3_02_length = 60;
export const IC303v850n_N4_01_length = 35;
export const IC303v850n_N4_02_length = 2;
export const IC303v850n_N4_03_length = 15;
export const IC303v850n_N4_04_length = 30;
export const IC303v850n_N4_05_length = 2;
export const IC303v850n_N4_06_length = 80;

export const kC303v850n_PO_ID="PO_ID";
export const kC303v850n_PO1_LineNo="PO1_LineNo";
export const kC303v850n_N1_01="N1_01";
export const kC303v850n_N1_02="N1_02";
export const kC303v850n_N1_03="N1_03";
export const kC303v850n_N1_04="N1_04";
export const kC303v850n_N2_01="N2_01";
export const kC303v850n_N2_02="N2_02";
export const kC303v850n_N3_01="N3_01";
export const kC303v850n_N3_02="N3_02";
export const kC303v850n_N4_01="N4_01";
export const kC303v850n_N4_02="N4_02";
export const kC303v850n_N4_03="N4_03";
export const kC303v850n_N4_04="N4_04";
export const kC303v850n_N4_05="N4_05";
export const kC303v850n_N4_06="N4_06";

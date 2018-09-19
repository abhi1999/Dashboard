import { IC303v810f } from '../edidb'
export class CC303v810f implements IC303v810f {
    public Ord_ID:number = 0;
    public SAC_Qual:string = '';
    public Amount:number = 0;
    public Line_No:string = '';
    public Acct_RecID:string = '';
    public Mast_RecID:string = '';
    public URECID:string = '';
    public constructor(init?:Partial<CC303v810f>) { Object.assign(this, init); }
}
export const IC303v810f_SAC_Qual_length = 4;
export const IC303v810f_Line_No_length = 11;
export const IC303v810f_Acct_RecID_length = 30;
export const IC303v810f_Mast_RecID_length = 30;

export const kC303v810f_Ord_ID="Ord_ID";
export const kC303v810f_SAC_Qual="SAC_Qual";
export const kC303v810f_Amount="Amount";
export const kC303v810f_Line_No="Line_No";
export const kC303v810f_Acct_RecID="Acct_RecID";
export const kC303v810f_Mast_RecID="Mast_RecID";
export const kC303v810f_URECID="URECID";

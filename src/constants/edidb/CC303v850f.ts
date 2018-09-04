import { IC303v850f } from '../edidb'
export class CC303v850f implements IC303v850f {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public SAC_Ind:string = '';
    public SAC_Code:string = '';
    public Agency_Qual:string = '';
    public Agency_SAC_Code:string = '';
    public Amt:number = 0;
    public SAC_Pct_Qual:string = '';
    public Pct:number = 0;
    public Rate:number = 0;
    public Uom:string = '';
    public Qty_1:number = 0;
    public Qty_2:number = 0;
    public SAC_Handling_Meth:string = '';
    public Ref_ID:string = '';
    public Opt_No:string = '';
    public Desc:string = '';
    public Qty_Used:number = 0;
    public URECID:string = '';
    public constructor(init?:Partial<CC303v850f>) { Object.assign(this, init); }
}
export const IC303v850f_PO1_LineNo_length = 11;
export const IC303v850f_SAC_Ind_length = 1;
export const IC303v850f_SAC_Code_length = 4;
export const IC303v850f_Agency_Qual_length = 2;
export const IC303v850f_Agency_SAC_Code_length = 16;
export const IC303v850f_SAC_Pct_Qual_length = 1;
export const IC303v850f_Uom_length = 2;
export const IC303v850f_SAC_Handling_Meth_length = 2;
export const IC303v850f_Ref_ID_length = 50;
export const IC303v850f_Opt_No_length = 20;
export const IC303v850f_Desc_length = 80;

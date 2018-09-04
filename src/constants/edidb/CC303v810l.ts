import { IC303v810l } from '../edidb'
export class CC303v810l implements IC303v810l {
    public ORD_ID:number = 0;
    public IT1_01:string = '';
    public IT1_02:string = '';
    public IT1_03:string = '';
    public IT1_04:string = '';
    public IT1_05:string = '';
    public IT1_06:string = '';
    public IT1_07:string = '';
    public Tax_Xref:string = '';
    public ItemDesc:string = '';
    public User1:string = '';
    public TaxFlag:boolean;
    public TaxAmt:number = 0;
    public TaxRate:number = 0;
    public LineAmt:number = 0;
    public Acct_RecID:string = '';
    public constructor(init?:Partial<CC303v810l>) { Object.assign(this, init); }
}
export const IC303v810l_IT1_01_length = 11;
export const IC303v810l_IT1_02_length = 12;
export const IC303v810l_IT1_03_length = 2;
export const IC303v810l_IT1_04_length = 16;
export const IC303v810l_IT1_05_length = 2;
export const IC303v810l_IT1_06_length = 2;
export const IC303v810l_IT1_07_length = 50;
export const IC303v810l_Tax_Xref_length = 10;
export const IC303v810l_ItemDesc_length = 40;
export const IC303v810l_User1_length = 30;
export const IC303v810l_Acct_RecID_length = 30;

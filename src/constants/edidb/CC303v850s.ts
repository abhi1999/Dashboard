import { IC303v850s } from '../edidb'
export class CC303v850s implements IC303v850s {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public SDQ_LineNo:number = 0;
    public SDQ_01:string = '';
    public SDQ_02:string = '';
    public SDQ_11:string = '';
    public SDQ_12:string = '';
    public constructor(init?:Partial<CC303v850s>) { Object.assign(this, init); }
}
export const IC303v850s_PO1_LineNo_length = 11;
export const IC303v850s_SDQ_01_length = 10;
export const IC303v850s_SDQ_02_length = 2;
export const IC303v850s_SDQ_11_length = 80;
export const IC303v850s_SDQ_12_length = 17;

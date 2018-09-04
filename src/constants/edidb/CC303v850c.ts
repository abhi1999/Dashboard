import { IC303v850c } from '../edidb'
export class CC303v850c implements IC303v850c {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public Seq_No:number = 0;
    public Msg:string = '';
    public constructor(init?:Partial<CC303v850c>) { Object.assign(this, init); }
}
export const IC303v850c_PO1_LineNo_length = 11;
export const IC303v850c_Msg_length = 80;

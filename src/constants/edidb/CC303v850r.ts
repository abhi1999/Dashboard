import { IC303v850r } from '../edidb'
export class CC303v850r implements IC303v850r {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public REF_01:string = '';
    public REF_02:string = '';
    public REF_03:string = '';
    public constructor(init?:Partial<CC303v850r>) { Object.assign(this, init); }
}
export const IC303v850r_PO1_LineNo_length = 11;
export const IC303v850r_REF_01_length = 3;
export const IC303v850r_REF_02_length = 50;
export const IC303v850r_REF_03_length = 80;

export const kC303v850r_PO_ID="PO_ID";
export const kC303v850r_PO1_LineNo="PO1_LineNo";
export const kC303v850r_REF_01="REF_01";
export const kC303v850r_REF_02="REF_02";
export const kC303v850r_REF_03="REF_03";

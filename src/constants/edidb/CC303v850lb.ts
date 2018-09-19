import { IC303v850lb } from '../edidb'
export class CC303v850lb implements IC303v850lb {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public PO1_06:string = '';
    public PO1_07:string = '';
    public constructor(init?:Partial<CC303v850lb>) { Object.assign(this, init); }
}
export const IC303v850lb_PO1_LineNo_length = 11;
export const IC303v850lb_PO1_06_length = 2;
export const IC303v850lb_PO1_07_length = 500;

export const kC303v850lb_PO_ID="PO_ID";
export const kC303v850lb_PO1_LineNo="PO1_LineNo";
export const kC303v850lb_PO1_06="PO1_06";
export const kC303v850lb_PO1_07="PO1_07";

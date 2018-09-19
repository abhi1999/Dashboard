import { IC303v850b } from '../edidb'
export class CC303v850b implements IC303v850b {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public POB_LineNo:number = 0;
    public POB_01:string = '';
    public POB_02:string = '';
    public constructor(init?:Partial<CC303v850b>) { Object.assign(this, init); }
}
export const IC303v850b_PO1_LineNo_length = 11;
export const IC303v850b_POB_01_length = 2;
export const IC303v850b_POB_02_length = 30;

export const kC303v850b_PO_ID="PO_ID";
export const kC303v850b_PO1_LineNo="PO1_LineNo";
export const kC303v850b_POB_LineNo="POB_LineNo";
export const kC303v850b_POB_01="POB_01";
export const kC303v850b_POB_02="POB_02";

import { IC303v850d } from '../edidb'
export class CC303v850d implements IC303v850d {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public DTM_01:string = '';
    public DTM_02:string = '';
    public SCH_QTY:string = '';
    public SCH_UOM:string = '';
    public constructor(init?:Partial<CC303v850d>) { Object.assign(this, init); }
}
export const IC303v850d_PO1_LineNo_length = 11;
export const IC303v850d_DTM_01_length = 3;
export const IC303v850d_DTM_02_length = 8;
export const IC303v850d_SCH_QTY_length = 17;
export const IC303v850d_SCH_UOM_length = 10;

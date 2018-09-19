import { IOrderS2 } from '../edidb'
export class COrderS2 implements IOrderS2 {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public Box_ID:number = 0;
    public Qty:number = 0;
    public SerLot_No:string = '';
    public constructor(init?:Partial<COrderS2>) { Object.assign(this, init); }
}
export const IOrderS2_SerLot_No_length = 80;

export const kOrderS2_Order_No="Order_No";
export const kOrderS2_Line_No="Line_No";
export const kOrderS2_Box_ID="Box_ID";
export const kOrderS2_Qty="Qty";
export const kOrderS2_SerLot_No="SerLot_No";

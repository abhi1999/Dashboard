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

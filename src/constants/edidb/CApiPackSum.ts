import { IApiPackSum } from '../edidb'
export class CApiPackSum implements IApiPackSum {
    public Line_No:number = 0;
    public Int_Item_No:string = '';
    public PackingClass:string = '';
    public Quantity:number = 0;
    public QtyPacked:number = 0;
    public PC_Pack_Qty:number = 0;
    public QtyRemainingPerPackingClass:number = 0;
    public constructor(init?:Partial<CApiPackSum>) { Object.assign(this, init); }
}
export const IApiPackSum_Int_Item_No_length = 500;
export const IApiPackSum_PackingClass_length = 30;
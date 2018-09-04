import { IIn810l } from '../edidb'
export class CIn810l implements IIn810l {
    public In810_ID:number = 0;
    public Line_No:number = 0;
    public Int_Item_No:string = '';
    public UPC:string = '';
    public QtyInv:number = 0;
    public Price:number = 0;
    public constructor(init?:Partial<CIn810l>) { Object.assign(this, init); }
}
export const IIn810l_Int_Item_No_length = 500;
export const IIn810l_UPC_length = 20;

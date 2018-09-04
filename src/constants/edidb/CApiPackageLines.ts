import { IApiPackageLines } from '../edidb'
export class CApiPackageLines implements IApiPackageLines {
    public PKG_ID:string = '';
    public Pack_ID:number = 0;
    public Line_No:number = 0;
    public Box_ID:number = 0;
    public PackQty:number = 0;
    public constructor(init?:Partial<CApiPackageLines>) { Object.assign(this, init); }
}
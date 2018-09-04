import { IApiCarton2 } from '../edidb'
export class CApiCarton2 implements IApiCarton2 {
    public Asn_ID:number = 0;
    public Box_ID:number = 0;
    public Pack_Level:number = 0;
    public TrackingNo:string = '';
    public SSCC:string = '';
    public PKG_ID:string = '';
    public Pack_Wt:string = '';
    public constructor(init?:Partial<CApiCarton2>) { Object.assign(this, init); }
}
export const IApiCarton2_TrackingNo_length = 50;
export const IApiCarton2_SSCC_length = 30;
export const IApiCarton2_PKG_ID_length = 10;
export const IApiCarton2_Pack_Wt_length = 8000;

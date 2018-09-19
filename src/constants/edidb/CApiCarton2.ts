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

export const kApiCarton2_Asn_ID="Asn_ID";
export const kApiCarton2_Box_ID="Box_ID";
export const kApiCarton2_Pack_Level="Pack_Level";
export const kApiCarton2_TrackingNo="TrackingNo";
export const kApiCarton2_SSCC="SSCC";
export const kApiCarton2_PKG_ID="PKG_ID";
export const kApiCarton2_Pack_Wt="Pack_Wt";

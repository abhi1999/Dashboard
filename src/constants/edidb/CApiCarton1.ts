import { IApiCarton1 } from '../edidb'
export class CApiCarton1 implements IApiCarton1 {
    public Asn_ID:number = 0;
    public Box_ID:number = 0;
    public Pack_Level:number = 0;
    public TrackingNo:string = '';
    public SSCC:string = '';
    public PKG_ID:string = '';
    public Pack_Wt:string = '';
    public constructor(init?:Partial<CApiCarton1>) { Object.assign(this, init); }
}
export const IApiCarton1_TrackingNo_length = 50;
export const IApiCarton1_SSCC_length = 30;
export const IApiCarton1_PKG_ID_length = 10;
export const IApiCarton1_Pack_Wt_length = 8000;

export const kApiCarton1_Asn_ID="Asn_ID";
export const kApiCarton1_Box_ID="Box_ID";
export const kApiCarton1_Pack_Level="Pack_Level";
export const kApiCarton1_TrackingNo="TrackingNo";
export const kApiCarton1_SSCC="SSCC";
export const kApiCarton1_PKG_ID="PKG_ID";
export const kApiCarton1_Pack_Wt="Pack_Wt";

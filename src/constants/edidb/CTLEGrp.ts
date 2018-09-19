import { ITLEGrp } from '../edidb'
export class CTLEGrp implements ITLEGrp {
    public TLEGRIP:number = 0;
    public GrpDataType:string = '';
    public GrpDirection:string = '';
    public GrpTLEFID:number = 0;
    public GrpName:string = '';
    public GrpFlowOrder:number = 0;
    public Active:boolean;
    public Restricted:boolean;
    public constructor(init?:Partial<CTLEGrp>) { Object.assign(this, init); }
}
export const ITLEGrp_GrpDataType_length = 50;
export const ITLEGrp_GrpDirection_length = 1;
export const ITLEGrp_GrpName_length = 100;

export const kTLEGrp_TLEGRIP="TLEGRIP";
export const kTLEGrp_GrpDataType="GrpDataType";
export const kTLEGrp_GrpDirection="GrpDirection";
export const kTLEGrp_GrpTLEFID="GrpTLEFID";
export const kTLEGrp_GrpName="GrpName";
export const kTLEGrp_GrpFlowOrder="GrpFlowOrder";
export const kTLEGrp_Active="Active";
export const kTLEGrp_Restricted="Restricted";

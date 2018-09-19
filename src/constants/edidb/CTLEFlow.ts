import { ITLEFlow } from '../edidb'
export class CTLEFlow implements ITLEFlow {
    public TLEFID:number = 0;
    public FlowDesc:string = '';
    public FlowOrder:number = 0;
    public Active:boolean;
    public Restricted:boolean;
    public constructor(init?:Partial<CTLEFlow>) { Object.assign(this, init); }
}
export const ITLEFlow_FlowDesc_length = 100;

export const kTLEFlow_TLEFID="TLEFID";
export const kTLEFlow_FlowDesc="FlowDesc";
export const kTLEFlow_FlowOrder="FlowOrder";
export const kTLEFlow_Active="Active";
export const kTLEFlow_Restricted="Restricted";

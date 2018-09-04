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

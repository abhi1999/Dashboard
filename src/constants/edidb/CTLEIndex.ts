import { ITLEIndex } from '../edidb'
export class CTLEIndex implements ITLEIndex {
    public VPID:number = 0;
    public DGID:string = '';
    public Direction:string = '';
    public XPathIndex:number = 0;
    public Value:string = '';
    public constructor(init?:Partial<CTLEIndex>) { Object.assign(this, init); }
}
export const ITLEIndex_DGID_length = 100;
export const ITLEIndex_Direction_length = 1;
export const ITLEIndex_Value_length = 1000;

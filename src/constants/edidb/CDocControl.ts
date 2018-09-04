import { IDocControl } from '../edidb'
export class CDocControl implements IDocControl {
    public tp_partid:string = '';
    public dgid:string = '';
    public controlno:number = 0;
    public constructor(init?:Partial<CDocControl>) { Object.assign(this, init); }
}
export const IDocControl_tp_partid_length = 30;
export const IDocControl_dgid_length = 5;

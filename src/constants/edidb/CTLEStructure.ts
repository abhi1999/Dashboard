import { ITLEStructure } from '../edidb'
export class CTLEStructure implements ITLEStructure {
    public CDID:string = '';
    public Position:number = 0;
    public DGID:string = '';
    public Direction:string = '';
    public STRID:number = 0;
    public constructor(init?:Partial<CTLEStructure>) { Object.assign(this, init); }
}
export const ITLEStructure_CDID_length = 5;
export const ITLEStructure_DGID_length = 5;
export const ITLEStructure_Direction_length = 1;

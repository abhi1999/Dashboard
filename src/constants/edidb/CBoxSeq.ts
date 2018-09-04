import { IBoxSeq } from '../edidb'
export class CBoxSeq implements IBoxSeq {
    public Box_ID:number = 0;
    public constructor(init?:Partial<CBoxSeq>) { Object.assign(this, init); }
}
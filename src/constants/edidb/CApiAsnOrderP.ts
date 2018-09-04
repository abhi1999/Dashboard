import { IApiAsnOrderP } from '../edidb'
export class CApiAsnOrderP implements IApiAsnOrderP {
    public Asn_ID:number = 0;
    public constructor(init?:Partial<CApiAsnOrderP>) { Object.assign(this, init); }
}
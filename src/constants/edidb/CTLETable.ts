import { ITLETable } from '../edidb'
export class CTLETable implements ITLETable {
    public DTID:number = 0;
    public Name:string = '';
    public constructor(init?:Partial<CTLETable>) { Object.assign(this, init); }
}
export const ITLETable_Name_length = 30;

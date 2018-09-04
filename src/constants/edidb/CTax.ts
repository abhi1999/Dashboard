import { ITax } from '../edidb'
export class CTax implements ITax {
    public TaxCode:string = '';
    public TaxRate:number = 0;
    public Tax_Xref:string = '';
    public EDICode:string = '';
    public constructor(init?:Partial<CTax>) { Object.assign(this, init); }
}
export const ITax_TaxCode_length = 10;
export const ITax_Tax_Xref_length = 10;
export const ITax_EDICode_length = 10;

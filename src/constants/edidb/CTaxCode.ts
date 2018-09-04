import { ITaxCode } from '../edidb'
export class CTaxCode implements ITaxCode {
    public Tax_Xref:string = '';
    public TP_PartID:string = '';
    public EDI_TaxQual:string = '';
    public EDI_TaxCode:string = '';
    public EDI_TaxDesc:string = '';
    public constructor(init?:Partial<CTaxCode>) { Object.assign(this, init); }
}
export const ITaxCode_Tax_Xref_length = 10;
export const ITaxCode_TP_PartID_length = 30;
export const ITaxCode_EDI_TaxQual_length = 10;
export const ITaxCode_EDI_TaxCode_length = 10;
export const ITaxCode_EDI_TaxDesc_length = 30;

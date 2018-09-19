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

export const kTaxCode_Tax_Xref="Tax_Xref";
export const kTaxCode_TP_PartID="TP_PartID";
export const kTaxCode_EDI_TaxQual="EDI_TaxQual";
export const kTaxCode_EDI_TaxCode="EDI_TaxCode";
export const kTaxCode_EDI_TaxDesc="EDI_TaxDesc";

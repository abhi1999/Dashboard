import { IApiTaxCodeView } from '../edidb'
export class CApiTaxCodeView implements IApiTaxCodeView {
    public Tax_Xref:string = '';
    public EDI_TaxQual:string = '';
    public EDI_TaxCode:string = '';
    public EDI_TaxDesc:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public constructor(init?:Partial<CApiTaxCodeView>) { Object.assign(this, init); }
}
export const IApiTaxCodeView_Tax_Xref_length = 10;
export const IApiTaxCodeView_EDI_TaxQual_length = 10;
export const IApiTaxCodeView_EDI_TaxCode_length = 10;
export const IApiTaxCodeView_EDI_TaxDesc_length = 30;
export const IApiTaxCodeView_TP_PartID_length = 30;
export const IApiTaxCodeView_TP_Name_length = 30;

export const kApiTaxCodeView_Tax_Xref="Tax_Xref";
export const kApiTaxCodeView_EDI_TaxQual="EDI_TaxQual";
export const kApiTaxCodeView_EDI_TaxCode="EDI_TaxCode";
export const kApiTaxCodeView_EDI_TaxDesc="EDI_TaxDesc";
export const kApiTaxCodeView_TP_PartID="TP_PartID";
export const kApiTaxCodeView_TP_Name="TP_Name";

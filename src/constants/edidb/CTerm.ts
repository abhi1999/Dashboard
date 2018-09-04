import { ITerm } from '../edidb'
export class CTerm implements ITerm {
    public Terms_ID:string = '';
    public TP_PartID:string = '';
    public Cust_Terms_ID:string = '';
    public TermsDesc:string = '';
    public constructor(init?:Partial<CTerm>) { Object.assign(this, init); }
}
export const ITerm_Terms_ID_length = 30;
export const ITerm_TP_PartID_length = 30;
export const ITerm_Cust_Terms_ID_length = 50;
export const ITerm_TermsDesc_length = 50;

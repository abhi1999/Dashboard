import { IItemCustSAC } from '../edidb'
export class CItemCustSAC implements IItemCustSAC {
    public TP_PartID:string = '';
    public Int_Item_No:string = '';
    public SAC_Qual:string = '';
    public constructor(init?:Partial<CItemCustSAC>) { Object.assign(this, init); }
}
export const IItemCustSAC_TP_PartID_length = 30;
export const IItemCustSAC_Int_Item_No_length = 500;
export const IItemCustSAC_SAC_Qual_length = 4;

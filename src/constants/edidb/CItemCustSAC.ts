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

export const kItemCustSAC_TP_PartID="TP_PartID";
export const kItemCustSAC_Int_Item_No="Int_Item_No";
export const kItemCustSAC_SAC_Qual="SAC_Qual";

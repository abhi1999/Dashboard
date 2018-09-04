import { IAPIsacXRef } from '../edidb'
export class CAPIsacXRef implements IAPIsacXRef {
    public TP_Name:string = '';
    public SAC_Qual:string = '';
    public Int_Item_No:string = '';
    public TP_PartID:string = '';
    public constructor(init?:Partial<CAPIsacXRef>) { Object.assign(this, init); }
}
export const IAPIsacXRef_TP_Name_length = 30;
export const IAPIsacXRef_SAC_Qual_length = 4;
export const IAPIsacXRef_Int_Item_No_length = 500;
export const IAPIsacXRef_TP_PartID_length = 30;

import { IApiTradeMapExcludeView } from '../edidb'
export class CApiTradeMapExcludeView implements IApiTradeMapExcludeView {
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public Invoice:boolean;
    public Asn:boolean;
    public constructor(init?:Partial<CApiTradeMapExcludeView>) { Object.assign(this, init); }
}
export const IApiTradeMapExcludeView_TP_PartID_length = 30;
export const IApiTradeMapExcludeView_TP_Name_length = 30;

export const kApiTradeMapExcludeView_TP_PartID="TP_PartID";
export const kApiTradeMapExcludeView_TP_Name="TP_Name";
export const kApiTradeMapExcludeView_Invoice="Invoice";
export const kApiTradeMapExcludeView_Asn="Asn";

import { IApiTradeTransObject } from '../edidb'
export class CApiTradeTransObject implements IApiTradeTransObject {
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public constructor(init?:Partial<CApiTradeTransObject>) { Object.assign(this, init); }
}
export const IApiTradeTransObject_TP_PartID_length = 30;
export const IApiTradeTransObject_TP_Name_length = 30;

export const kApiTradeTransObject_TP_PartID="TP_PartID";
export const kApiTradeTransObject_TP_Name="TP_Name";

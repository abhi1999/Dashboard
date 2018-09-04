import { IApiCumulativeDetail } from '../edidb'
export class CApiCumulativeDetail implements IApiCumulativeDetail {
    public cusno:string = '';
    public shiptoid:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public shipdate:Date;
    public reason:string = '';
    public reference:string = '';
    public userid:string = '';
    public machineid:string = '';
    public qty:number = 0;
    public cm:number = 0;
    public caid:string = '';
    public constructor(init?:Partial<CApiCumulativeDetail>) { Object.assign(this, init); }
}
export const IApiCumulativeDetail_cusno_length = 100;
export const IApiCumulativeDetail_shiptoid_length = 80;
export const IApiCumulativeDetail_itemid_length = 500;
export const IApiCumulativeDetail_purchaseorderno_length = 30;
export const IApiCumulativeDetail_reason_length = 80;
export const IApiCumulativeDetail_reference_length = 60;
export const IApiCumulativeDetail_userid_length = 50;
export const IApiCumulativeDetail_machineid_length = 50;

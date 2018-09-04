import { ICMShipped } from '../edidb'
export class CCMShipped implements ICMShipped {
    public cusno:string = '';
    public shiptoid:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public shipdate:string = '';
    public reason:string = '';
    public reference:string = '';
    public userid:string = '';
    public machineid:string = '';
    public qty:number = 0;
    public vpid:number = 0;
    public constructor(init?:Partial<CCMShipped>) { Object.assign(this, init); }
}
export const ICMShipped_cusno_length = 30;
export const ICMShipped_shiptoid_length = 80;
export const ICMShipped_itemid_length = 30;
export const ICMShipped_purchaseorderno_length = 30;
export const ICMShipped_shipdate_length = 30;
export const ICMShipped_reason_length = 80;
export const ICMShipped_reference_length = 60;
export const ICMShipped_userid_length = 50;
export const ICMShipped_machineid_length = 50;

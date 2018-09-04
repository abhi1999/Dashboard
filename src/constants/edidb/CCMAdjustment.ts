import { ICMAdjustment } from '../edidb'
export class CCMAdjustment implements ICMAdjustment {
    public tp_partid:string = '';
    public shipto_id:string = '';
    public int_item_no:string = '';
    public purchaseorder:string = '';
    public reason:string = '';
    public reference:string = '';
    public cmadjustdate:Date;
    public cmadjustqty:number = 0;
    public user1:string = '';
    public user2:string = '';
    public user3:string = '';
    public user4:string = '';
    public user5:string = '';
    public userid:string = '';
    public machineid:string = '';
    public CAID:string = '';
    public VPID:number = 0;
    public constructor(init?:Partial<CCMAdjustment>) { Object.assign(this, init); }
}
export const ICMAdjustment_tp_partid_length = 30;
export const ICMAdjustment_shipto_id_length = 80;
export const ICMAdjustment_int_item_no_length = 500;
export const ICMAdjustment_purchaseorder_length = 30;
export const ICMAdjustment_reason_length = 80;
export const ICMAdjustment_reference_length = 60;
export const ICMAdjustment_user1_length = 50;
export const ICMAdjustment_user2_length = 50;
export const ICMAdjustment_user3_length = 50;
export const ICMAdjustment_user4_length = 50;
export const ICMAdjustment_user5_length = 50;
export const ICMAdjustment_userid_length = 50;
export const ICMAdjustment_machineid_length = 50;

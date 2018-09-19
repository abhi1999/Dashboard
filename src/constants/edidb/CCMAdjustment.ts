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

export const kCMAdjustment_tp_partid="tp_partid";
export const kCMAdjustment_shipto_id="shipto_id";
export const kCMAdjustment_int_item_no="int_item_no";
export const kCMAdjustment_purchaseorder="purchaseorder";
export const kCMAdjustment_reason="reason";
export const kCMAdjustment_reference="reference";
export const kCMAdjustment_cmadjustdate="cmadjustdate";
export const kCMAdjustment_cmadjustqty="cmadjustqty";
export const kCMAdjustment_user1="user1";
export const kCMAdjustment_user2="user2";
export const kCMAdjustment_user3="user3";
export const kCMAdjustment_user4="user4";
export const kCMAdjustment_user5="user5";
export const kCMAdjustment_userid="userid";
export const kCMAdjustment_machineid="machineid";
export const kCMAdjustment_CAID="CAID";
export const kCMAdjustment_VPID="VPID";

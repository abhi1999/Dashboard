import { IPlanSchedExt } from '../edidb'
export class CPlanSchedExt implements IPlanSchedExt {
    public PSEID:string = '';
    public PSGID:string = '';
    public ext1:string = '';
    public ext2:string = '';
    public ext3:string = '';
    public ext4:string = '';
    public ext5:string = '';
    public ext6:string = '';
    public ext7:string = '';
    public ext8:string = '';
    public ext9:string = '';
    public ext10:string = '';
    public constructor(init?:Partial<CPlanSchedExt>) { Object.assign(this, init); }
}
export const IPlanSchedExt_ext1_length = 80;
export const IPlanSchedExt_ext2_length = 80;
export const IPlanSchedExt_ext3_length = 80;
export const IPlanSchedExt_ext4_length = 80;
export const IPlanSchedExt_ext5_length = 80;
export const IPlanSchedExt_ext6_length = 80;
export const IPlanSchedExt_ext7_length = 80;
export const IPlanSchedExt_ext8_length = 80;
export const IPlanSchedExt_ext9_length = 80;
export const IPlanSchedExt_ext10_length = 80;

export const kPlanSchedExt_PSEID="PSEID";
export const kPlanSchedExt_PSGID="PSGID";
export const kPlanSchedExt_ext1="ext1";
export const kPlanSchedExt_ext2="ext2";
export const kPlanSchedExt_ext3="ext3";
export const kPlanSchedExt_ext4="ext4";
export const kPlanSchedExt_ext5="ext5";
export const kPlanSchedExt_ext6="ext6";
export const kPlanSchedExt_ext7="ext7";
export const kPlanSchedExt_ext8="ext8";
export const kPlanSchedExt_ext9="ext9";
export const kPlanSchedExt_ext10="ext10";

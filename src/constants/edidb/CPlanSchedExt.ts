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

import { ILastNum } from '../edidb'
export class CLastNum implements ILastNum {
    public All_Keys:number = 0;
    public Last_850:number = 0;
    public Last_810:number = 0;
    public Last_856:number = 0;
    public Last_UCC:number = 0;
    public Last_FA:number = 0;
    public Last_PC:number = 0;
    public Last_BOL:number = 0;
    public Last_RRC:number = 0;
    public Last_RRC_Ctrl_No:number = 0;
    public Last_Order_No:number = 0;
    public constructor(init?:Partial<CLastNum>) { Object.assign(this, init); }
}
export const kLastNum_All_Keys="All_Keys";
export const kLastNum_Last_850="Last_850";
export const kLastNum_Last_810="Last_810";
export const kLastNum_Last_856="Last_856";
export const kLastNum_Last_UCC="Last_UCC";
export const kLastNum_Last_FA="Last_FA";
export const kLastNum_Last_PC="Last_PC";
export const kLastNum_Last_BOL="Last_BOL";
export const kLastNum_Last_RRC="Last_RRC";
export const kLastNum_Last_RRC_Ctrl_No="Last_RRC_Ctrl_No";
export const kLastNum_Last_Order_No="Last_Order_No";

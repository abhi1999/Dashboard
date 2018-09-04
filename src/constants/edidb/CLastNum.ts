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
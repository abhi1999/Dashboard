import { IRRCDetail } from '../edidb'
export class CRRCDetail implements IRRCDetail {
    public RRC_ID:number = 0;
    public Order_No:number = 0;
    public RRC_Ctrl_No:number = 0;
    public FullRRC_Ctrl_No:string = '';
    public constructor(init?:Partial<CRRCDetail>) { Object.assign(this, init); }
}
export const IRRCDetail_FullRRC_Ctrl_No_length = 50;

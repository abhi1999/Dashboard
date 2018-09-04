import { IControlNum } from '../edidb'
export class CControlNum implements IControlNum {
    public SendQual:string = '';
    public SendID:string = '';
    public RecvQual:string = '';
    public RecvID:string = '';
    public CtrlNum:number = 0;
    public CNID:string = '';
    public Prefix:string = '';
    public Padding:number = 0;
    public Suffix:string = '';
    public EdifactCtrlNum:string = '';
    public constructor(init?:Partial<CControlNum>) { Object.assign(this, init); }
}
export const IControlNum_SendQual_length = 5;
export const IControlNum_SendID_length = 50;
export const IControlNum_RecvQual_length = 5;
export const IControlNum_RecvID_length = 50;
export const IControlNum_Prefix_length = 15;
export const IControlNum_Suffix_length = 15;

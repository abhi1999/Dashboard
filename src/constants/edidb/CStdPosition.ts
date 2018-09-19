import { IStdPosition } from '../edidb'
export class CStdPosition implements IStdPosition {
    public Std_ID:string = '';
    public Doc_ID:string = '';
    public Seg_ID:string = '';
    public Ele_No:number = 0;
    public Ele_Pos:number = 0;
    public constructor(init?:Partial<CStdPosition>) { Object.assign(this, init); }
}
export const IStdPosition_Std_ID_length = 10;
export const IStdPosition_Doc_ID_length = 10;
export const IStdPosition_Seg_ID_length = 10;

export const kStdPosition_Std_ID="Std_ID";
export const kStdPosition_Doc_ID="Doc_ID";
export const kStdPosition_Seg_ID="Seg_ID";
export const kStdPosition_Ele_No="Ele_No";
export const kStdPosition_Ele_Pos="Ele_Pos";

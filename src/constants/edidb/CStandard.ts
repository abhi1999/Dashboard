import { IStandard } from '../edidb'
export class CStandard implements IStandard {
    public Std_ID:string = '';
    public Std_Pos10:string = '';
    public Std_Pos19:string = '';
    public Std_Pos24:string = '';
    public Std_Pos25:string = '';
    public Std_Pos26:string = '';
    public Std_Pos305:string = '';
    public Std_Pos303:string = '';
    public constructor(init?:Partial<CStandard>) { Object.assign(this, init); }
}
export const IStandard_Std_ID_length = 10;
export const IStandard_Std_Pos10_length = 6;
export const IStandard_Std_Pos19_length = 5;
export const IStandard_Std_Pos24_length = 3;
export const IStandard_Std_Pos25_length = 3;
export const IStandard_Std_Pos26_length = 3;
export const IStandard_Std_Pos305_length = 12;
export const IStandard_Std_Pos303_length = 1;

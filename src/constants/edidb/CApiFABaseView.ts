import { IApiFABaseView } from '../edidb'
export class CApiFABaseView implements IApiFABaseView {
    public FA_ID:number = 0;
    public TP_Name:string = '';
    public ISA08:string = '';
    public ISA09:string = '';
    public ISA13:string = '';
    public Direction:string = '';
    public AK101:string = '';
    public AK102:string = '';
    public Exp_Flag:string = '';
    public status:string = '';
    public constructor(init?:Partial<CApiFABaseView>) { Object.assign(this, init); }
}
export const IApiFABaseView_TP_Name_length = 30;
export const IApiFABaseView_ISA08_length = 15;
export const IApiFABaseView_ISA09_length = 8;
export const IApiFABaseView_ISA13_length = 9;
export const IApiFABaseView_Direction_length = 1;
export const IApiFABaseView_AK101_length = 2;
export const IApiFABaseView_AK102_length = 9;
export const IApiFABaseView_Exp_Flag_length = 1;
export const IApiFABaseView_status_length = 500;

export const kApiFABaseView_FA_ID="FA_ID";
export const kApiFABaseView_TP_Name="TP_Name";
export const kApiFABaseView_ISA08="ISA08";
export const kApiFABaseView_ISA09="ISA09";
export const kApiFABaseView_ISA13="ISA13";
export const kApiFABaseView_Direction="Direction";
export const kApiFABaseView_AK101="AK101";
export const kApiFABaseView_AK102="AK102";
export const kApiFABaseView_Exp_Flag="Exp_Flag";
export const kApiFABaseView_status="status";

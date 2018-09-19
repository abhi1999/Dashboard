import { IFaDetail } from '../edidb'
export class CFaDetail implements IFaDetail {
    public FA_ID:number = 0;
    public AK201:string = '';
    public AK202:string = '';
    public AK501:string = '';
    public constructor(init?:Partial<CFaDetail>) { Object.assign(this, init); }
}
export const IFaDetail_AK201_length = 3;
export const IFaDetail_AK202_length = 9;
export const IFaDetail_AK501_length = 1;

export const kFaDetail_FA_ID="FA_ID";
export const kFaDetail_AK201="AK201";
export const kFaDetail_AK202="AK202";
export const kFaDetail_AK501="AK501";

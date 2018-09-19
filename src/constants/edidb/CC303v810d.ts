import { IC303v810d } from '../edidb'
export class CC303v810d implements IC303v810d {
    public ORD_ID:number = 0;
    public DTM_01:string = '';
    public DTM_02:string = '';
    public constructor(init?:Partial<CC303v810d>) { Object.assign(this, init); }
}
export const IC303v810d_DTM_01_length = 3;
export const IC303v810d_DTM_02_length = 8;

export const kC303v810d_ORD_ID="ORD_ID";
export const kC303v810d_DTM_01="DTM_01";
export const kC303v810d_DTM_02="DTM_02";

import { IC303v810n } from '../edidb'
export class CC303v810n implements IC303v810n {
    public Ord_ID:number = 0;
    public N1_01:string = '';
    public N1_02:string = '';
    public N1_03:string = '';
    public N1_04:string = '';
    public N2_01:string = '';
    public N2_02:string = '';
    public N3_01:string = '';
    public N3_02:string = '';
    public N4_01:string = '';
    public N4_02:string = '';
    public N4_03:string = '';
    public N4_04:string = '';
    public constructor(init?:Partial<CC303v810n>) { Object.assign(this, init); }
}
export const IC303v810n_N1_01_length = 3;
export const IC303v810n_N1_02_length = 60;
export const IC303v810n_N1_03_length = 2;
export const IC303v810n_N1_04_length = 80;
export const IC303v810n_N2_01_length = 60;
export const IC303v810n_N2_02_length = 60;
export const IC303v810n_N3_01_length = 60;
export const IC303v810n_N3_02_length = 60;
export const IC303v810n_N4_01_length = 30;
export const IC303v810n_N4_02_length = 2;
export const IC303v810n_N4_03_length = 15;
export const IC303v810n_N4_04_length = 30;

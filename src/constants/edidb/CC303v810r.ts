import { IC303v810r } from '../edidb'
export class CC303v810r implements IC303v810r {
    public ORD_ID:number = 0;
    public REF_01:string = '';
    public REF_02:string = '';
    public constructor(init?:Partial<CC303v810r>) { Object.assign(this, init); }
}
export const IC303v810r_REF_01_length = 2;
export const IC303v810r_REF_02_length = 30;

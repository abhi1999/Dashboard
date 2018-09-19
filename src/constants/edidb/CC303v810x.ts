import { IC303v810x } from '../edidb'
export class CC303v810x implements IC303v810x {
    public ORD_ID:number = 0;
    public TermsDesc:string = '';
    public DscPct:number = 0;
    public DscDays:number = 0;
    public DueDays:number = 0;
    public constructor(init?:Partial<CC303v810x>) { Object.assign(this, init); }
}
export const IC303v810x_TermsDesc_length = 50;

export const kC303v810x_ORD_ID="ORD_ID";
export const kC303v810x_TermsDesc="TermsDesc";
export const kC303v810x_DscPct="DscPct";
export const kC303v810x_DscDays="DscDays";
export const kC303v810x_DueDays="DueDays";

import { IProdActivityDetail } from '../edidb'
export class CProdActivityDetail implements IProdActivityDetail {
    public PA_ID:number = 0;
    public PAD_ID:number = 0;
    public ZA01:string = '';
    public Loc:string = '';
    public Qty:number = 0;
    public Uom:string = '';
    public Price:number = 0;
    public Type:string = '';
    public constructor(init?:Partial<CProdActivityDetail>) { Object.assign(this, init); }
}
export const IProdActivityDetail_ZA01_length = 3;
export const IProdActivityDetail_Loc_length = 30;
export const IProdActivityDetail_Uom_length = 4;
export const IProdActivityDetail_Type_length = 3;

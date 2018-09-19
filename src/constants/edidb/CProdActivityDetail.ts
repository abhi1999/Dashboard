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

export const kProdActivityDetail_PA_ID="PA_ID";
export const kProdActivityDetail_PAD_ID="PAD_ID";
export const kProdActivityDetail_ZA01="ZA01";
export const kProdActivityDetail_Loc="Loc";
export const kProdActivityDetail_Qty="Qty";
export const kProdActivityDetail_Uom="Uom";
export const kProdActivityDetail_Price="Price";
export const kProdActivityDetail_Type="Type";

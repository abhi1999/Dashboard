import { IC303v810t } from '../edidb'
export class CC303v810t implements IC303v810t {
    public Ord_ID:number = 0;
    public TrackingNo:string = '';
    public constructor(init?:Partial<CC303v810t>) { Object.assign(this, init); }
}
export const IC303v810t_TrackingNo_length = 30;

export const kC303v810t_Ord_ID="Ord_ID";
export const kC303v810t_TrackingNo="TrackingNo";

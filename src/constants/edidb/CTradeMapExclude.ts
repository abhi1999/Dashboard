import { ITradeMapExclude } from '../edidb'
export class CTradeMapExclude implements ITradeMapExclude {
    public TP_PartID:string = '';
    public Invoice:boolean;
    public Asn:boolean;
    public constructor(init?:Partial<CTradeMapExclude>) { Object.assign(this, init); }
}
export const ITradeMapExclude_TP_PartID_length = 30;

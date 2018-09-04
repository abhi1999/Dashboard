import { IDelimiter } from '../edidb'
export class CDelimiter implements IDelimiter {
    public DLID:string = '';
    public TP_PartID:string = '';
    public DGID:string = '';
    public TransID:string = '';
    public ElemSep:number = 0;
    public SubElemSep:number = 0;
    public SegTerm:number = 0;
    public RepSep:number = 0;
    public constructor(init?:Partial<CDelimiter>) { Object.assign(this, init); }
}
export const IDelimiter_TP_PartID_length = 30;
export const IDelimiter_DGID_length = 5;
export const IDelimiter_TransID_length = 50;

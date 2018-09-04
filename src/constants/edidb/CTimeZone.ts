import { ITimeZone } from '../edidb'
export class CTimeZone implements ITimeZone {
    public Id:number = 0;
    public TimeCodeStd:string = '';
    public TimeCodeDst:string = '';
    public TimeZone1:string = '';
    public TimeAbr:string = '';
    public GMTOffset:number = 0;
    public DST:boolean;
    public constructor(init?:Partial<CTimeZone>) { Object.assign(this, init); }
}
export const ITimeZone_TimeCodeStd_length = 10;
export const ITimeZone_TimeCodeDst_length = 10;
export const ITimeZone_TimeZone1_length = 100;
export const ITimeZone_TimeAbr_length = 50;

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

export const kTimeZone_Id="Id";
export const kTimeZone_TimeCodeStd="TimeCodeStd";
export const kTimeZone_TimeCodeDst="TimeCodeDst";
export const kTimeZone_TimeZone1="TimeZone1";
export const kTimeZone_TimeAbr="TimeAbr";
export const kTimeZone_GMTOffset="GMTOffset";
export const kTimeZone_DST="DST";

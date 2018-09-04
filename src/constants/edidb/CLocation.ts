import { ILocation } from '../edidb'
export class CLocation implements ILocation {
    public locid:string = '';
    public locname:string = '';
    public locadd1:string = '';
    public locadd2:string = '';
    public locadd3:string = '';
    public loccity:string = '';
    public locstate:string = '';
    public loczip:string = '';
    public loccountry:string = '';
    public locphone:string = '';
    public locfax:string = '';
    public locemail:string = '';
    public loccontact:string = '';
    public locediid:string = '';
    public locrfid:boolean;
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public TimeZoneId:number = 0;
    public constructor(init?:Partial<CLocation>) { Object.assign(this, init); }
}
export const ILocation_locid_length = 20;
export const ILocation_locname_length = 80;
export const ILocation_locadd1_length = 80;
export const ILocation_locadd2_length = 80;
export const ILocation_locadd3_length = 80;
export const ILocation_loccity_length = 50;
export const ILocation_locstate_length = 30;
export const ILocation_loczip_length = 15;
export const ILocation_loccountry_length = 30;
export const ILocation_locphone_length = 30;
export const ILocation_locfax_length = 30;
export const ILocation_locemail_length = 30;
export const ILocation_loccontact_length = 30;
export const ILocation_locediid_length = 80;
export const ILocation_User1_length = 50;
export const ILocation_User2_length = 50;
export const ILocation_User3_length = 50;
export const ILocation_User4_length = 50;
export const ILocation_User5_length = 50;

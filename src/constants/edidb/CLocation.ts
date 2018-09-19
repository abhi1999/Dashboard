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

export const kLocation_locid="locid";
export const kLocation_locname="locname";
export const kLocation_locadd1="locadd1";
export const kLocation_locadd2="locadd2";
export const kLocation_locadd3="locadd3";
export const kLocation_loccity="loccity";
export const kLocation_locstate="locstate";
export const kLocation_loczip="loczip";
export const kLocation_loccountry="loccountry";
export const kLocation_locphone="locphone";
export const kLocation_locfax="locfax";
export const kLocation_locemail="locemail";
export const kLocation_loccontact="loccontact";
export const kLocation_locediid="locediid";
export const kLocation_locrfid="locrfid";
export const kLocation_User1="User1";
export const kLocation_User2="User2";
export const kLocation_User3="User3";
export const kLocation_User4="User4";
export const kLocation_User5="User5";
export const kLocation_TimeZoneId="TimeZoneId";

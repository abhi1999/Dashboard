import { IPlanSchedAdd } from '../edidb'
export class CPlanSchedAdd implements IPlanSchedAdd {
    public PSAID:string = '';
    public PSGID:string = '';
    public locname:string = '';
    public locadd1:string = '';
    public locadd2:string = '';
    public locadd3:string = '';
    public loccity:string = '';
    public locstate:string = '';
    public loczip:string = '';
    public loccountry:string = '';
    public constructor(init?:Partial<CPlanSchedAdd>) { Object.assign(this, init); }
}
export const IPlanSchedAdd_locname_length = 80;
export const IPlanSchedAdd_locadd1_length = 80;
export const IPlanSchedAdd_locadd2_length = 80;
export const IPlanSchedAdd_locadd3_length = 80;
export const IPlanSchedAdd_loccity_length = 50;
export const IPlanSchedAdd_locstate_length = 30;
export const IPlanSchedAdd_loczip_length = 15;
export const IPlanSchedAdd_loccountry_length = 30;

import { IOrderS } from '../edidb'
export class COrderS implements IOrderS {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public Pack_ID:number = 0;
    public Pack_Level:number = 0;
    public Qty:number = 0;
    public SerLot_No:string = '';
    public Box_ID:number = 0;
    public MfgDate:Date;
    public ExpDate:Date;
    public UserDate1:Date;
    public UserDate2:Date;
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public constructor(init?:Partial<COrderS>) { Object.assign(this, init); }
}
export const IOrderS_SerLot_No_length = 80;
export const IOrderS_User1_length = 50;
export const IOrderS_User2_length = 50;
export const IOrderS_User3_length = 50;
export const IOrderS_User4_length = 50;
export const IOrderS_User5_length = 50;

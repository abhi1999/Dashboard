import { IApiShipDetail2 } from '../edidb'
export class CApiShipDetail2 implements IApiShipDetail2 {
    public MfgDateF:string = '';
    public ExpDateF:string = '';
    public UserDate1F:string = '';
    public UserDate2F:string = '';
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
    public constructor(init?:Partial<CApiShipDetail2>) { Object.assign(this, init); }
}
export const IApiShipDetail2_MfgDateF_length = 10;
export const IApiShipDetail2_ExpDateF_length = 10;
export const IApiShipDetail2_UserDate1F_length = 10;
export const IApiShipDetail2_UserDate2F_length = 10;
export const IApiShipDetail2_SerLot_No_length = 80;
export const IApiShipDetail2_User1_length = 50;
export const IApiShipDetail2_User2_length = 50;
export const IApiShipDetail2_User3_length = 50;
export const IApiShipDetail2_User4_length = 50;
export const IApiShipDetail2_User5_length = 50;

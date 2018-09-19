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

export const kApiShipDetail2_MfgDateF="MfgDateF";
export const kApiShipDetail2_ExpDateF="ExpDateF";
export const kApiShipDetail2_UserDate1F="UserDate1F";
export const kApiShipDetail2_UserDate2F="UserDate2F";
export const kApiShipDetail2_Order_No="Order_No";
export const kApiShipDetail2_Line_No="Line_No";
export const kApiShipDetail2_Pack_ID="Pack_ID";
export const kApiShipDetail2_Pack_Level="Pack_Level";
export const kApiShipDetail2_Qty="Qty";
export const kApiShipDetail2_SerLot_No="SerLot_No";
export const kApiShipDetail2_Box_ID="Box_ID";
export const kApiShipDetail2_MfgDate="MfgDate";
export const kApiShipDetail2_ExpDate="ExpDate";
export const kApiShipDetail2_UserDate1="UserDate1";
export const kApiShipDetail2_UserDate2="UserDate2";
export const kApiShipDetail2_User1="User1";
export const kApiShipDetail2_User2="User2";
export const kApiShipDetail2_User3="User3";
export const kApiShipDetail2_User4="User4";
export const kApiShipDetail2_User5="User5";

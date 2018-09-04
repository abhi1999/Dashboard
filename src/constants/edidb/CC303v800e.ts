import { IC303v800e } from '../edidb'
export class CC303v800e implements IC303v800e {
    public Tablename:string = '';
    public Acct_RecID:string = '';
    public Seq_No:number = 0;
    public ORD_ID:number = 0;
    public Order_No:number = 0;
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public User6:string = '';
    public User7:string = '';
    public User8:string = '';
    public User9:string = '';
    public User10:string = '';
    public ShipInstr1:string = '';
    public ShipInstr2:string = '';
    public Comment1:string = '';
    public Comment2:string = '';
    public Comment3:string = '';
    public ReqDate:Date;
    public ShipDate:Date;
    public PromDate:Date;
    public DelDate:Date;
    public Cust_Item_ID:string = '';
    public OrigQtyOrd:number = 0;
    public constructor(init?:Partial<CC303v800e>) { Object.assign(this, init); }
}
export const IC303v800e_Tablename_length = 20;
export const IC303v800e_Acct_RecID_length = 30;
export const IC303v800e_User1_length = 50;
export const IC303v800e_User2_length = 50;
export const IC303v800e_User3_length = 50;
export const IC303v800e_User4_length = 50;
export const IC303v800e_User5_length = 50;
export const IC303v800e_User6_length = 50;
export const IC303v800e_User7_length = 50;
export const IC303v800e_User8_length = 50;
export const IC303v800e_User9_length = 50;
export const IC303v800e_User10_length = 50;
export const IC303v800e_ShipInstr1_length = 50;
export const IC303v800e_ShipInstr2_length = 50;
export const IC303v800e_Comment1_length = 50;
export const IC303v800e_Comment2_length = 50;
export const IC303v800e_Comment3_length = 50;
export const IC303v800e_Cust_Item_ID_length = 50;

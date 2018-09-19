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

export const kC303v800e_Tablename="Tablename";
export const kC303v800e_Acct_RecID="Acct_RecID";
export const kC303v800e_Seq_No="Seq_No";
export const kC303v800e_ORD_ID="ORD_ID";
export const kC303v800e_Order_No="Order_No";
export const kC303v800e_User1="User1";
export const kC303v800e_User2="User2";
export const kC303v800e_User3="User3";
export const kC303v800e_User4="User4";
export const kC303v800e_User5="User5";
export const kC303v800e_User6="User6";
export const kC303v800e_User7="User7";
export const kC303v800e_User8="User8";
export const kC303v800e_User9="User9";
export const kC303v800e_User10="User10";
export const kC303v800e_ShipInstr1="ShipInstr1";
export const kC303v800e_ShipInstr2="ShipInstr2";
export const kC303v800e_Comment1="Comment1";
export const kC303v800e_Comment2="Comment2";
export const kC303v800e_Comment3="Comment3";
export const kC303v800e_ReqDate="ReqDate";
export const kC303v800e_ShipDate="ShipDate";
export const kC303v800e_PromDate="PromDate";
export const kC303v800e_DelDate="DelDate";
export const kC303v800e_Cust_Item_ID="Cust_Item_ID";
export const kC303v800e_OrigQtyOrd="OrigQtyOrd";

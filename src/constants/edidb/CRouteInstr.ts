import { IRouteInstr } from '../edidb'
export class CRouteInstr implements IRouteInstr {
    public RI_ID:number = 0;
    public Seq_No:number = 0;
    public Ref_ID:string = '';
    public FullRRC_Ctrl_No:string = '';
    public Cust_PO:string = '';
    public PU_Appt:string = '';
    public PU_Date:Date;
    public SCAC:string = '';
    public Resp_RRC:string = '';
    public Trans_Lvl_Req:string = '';
    public Multi_Stop:string = '';
    public Stop_Seq:string = '';
    public ShipTo_ID:string = '';
    public Asn_ID:number = 0;
    public Misc_ID:number = 0;
    public constructor(init?:Partial<CRouteInstr>) { Object.assign(this, init); }
}
export const IRouteInstr_Ref_ID_length = 50;
export const IRouteInstr_FullRRC_Ctrl_No_length = 50;
export const IRouteInstr_Cust_PO_length = 30;
export const IRouteInstr_PU_Appt_length = 50;
export const IRouteInstr_SCAC_length = 4;
export const IRouteInstr_Resp_RRC_length = 2;
export const IRouteInstr_Trans_Lvl_Req_length = 80;
export const IRouteInstr_Multi_Stop_length = 1;
export const IRouteInstr_Stop_Seq_length = 3;
export const IRouteInstr_ShipTo_ID_length = 30;

export const kRouteInstr_RI_ID="RI_ID";
export const kRouteInstr_Seq_No="Seq_No";
export const kRouteInstr_Ref_ID="Ref_ID";
export const kRouteInstr_FullRRC_Ctrl_No="FullRRC_Ctrl_No";
export const kRouteInstr_Cust_PO="Cust_PO";
export const kRouteInstr_PU_Appt="PU_Appt";
export const kRouteInstr_PU_Date="PU_Date";
export const kRouteInstr_SCAC="SCAC";
export const kRouteInstr_Resp_RRC="Resp_RRC";
export const kRouteInstr_Trans_Lvl_Req="Trans_Lvl_Req";
export const kRouteInstr_Multi_Stop="Multi_Stop";
export const kRouteInstr_Stop_Seq="Stop_Seq";
export const kRouteInstr_ShipTo_ID="ShipTo_ID";
export const kRouteInstr_Asn_ID="Asn_ID";
export const kRouteInstr_Misc_ID="Misc_ID";

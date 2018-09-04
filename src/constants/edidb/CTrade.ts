import { ITrade } from '../edidb'
export class CTrade implements ITrade {
    public TP_PartID:string = '';
    public TP_PartQ:string = '';
    public TP_ID:string = '';
    public TP_Name:string = '';
    public TP_GroupID:string = '';
    public TP_Asn:string = '';
    public TP_ItemCode:string = '';
    public TP_UseN1BY:string = '';
    public TP_UseDept:string = '';
    public TP_UseN1ST:string = '';
    public TP_STQUAL:string = '';
    public TP_In850:string = '';
    public TP_In810:string = '';
    public TP_Out850:string = '';
    public TP_Out810:string = '';
    public TP_864ID:string = '';
    public TP_ShipDateQual:string = '';
    public TP_CancelDateQual:string = '';
    public Std_ID:string = '';
    public Term_Days:string = '';
    public Disc_Perc:string = '';
    public Disc_Days:string = '';
    public TP_VendID:string = '';
    public TP_MapIn_850:string = '';
    public TP_UCC128:string = '';
    public TP_BarcodeType:string = '';
    public TP_User1:string = '';
    public TP_User2:string = '';
    public TP_User3:string = '';
    public TP_User4:string = '';
    public TP_User5:string = '';
    public TP_User6:string = '';
    public TP_User7:string = '';
    public TP_User8:string = '';
    public TP_User9:string = '';
    public TP_ItemCode2:string = '';
    public TP_STformat:number = 0;
    public TP_SendQ:string = '';
    public TP_SendID:string = '';
    public TP_SendGID:string = '';
    public TP_EleSep:number = 0;
    public TP_SubEleSep:number = 0;
    public TP_SegTerm:number = 0;
    public CreateFA:boolean;
    public Create856:boolean;
    public Van:string = '';
    public UseAltAdr:boolean;
    public ISA14Y:boolean;
    public Exp_Date:Date;
    public CipherKey:string = '';
    public TP_Out753:boolean;
    public CalcLineTax:boolean;
    public UseCurrency:boolean;
    public PrcMethod:number = 0;
    public SerLotFlag:boolean;
    public TP_ShipDateQual1:string = '';
    public TP_ShipDateQual2:string = '';
    public TP_CancelDateQual1:string = '';
    public TP_CancelDateQual2:string = '';
    public PostSAC:boolean;
    public Pseudo_ID:string = '';
    public Pseudo_Segname:string = '';
    public Pseudo_Qual_Elem_No:number = 0;
    public Pseudo_Qual_Elem_Value:string = '';
    public Pseudo_Vendor_Elem_No:number = 0;
    public Pseudo_Vendor_Elem_Value:string = '';
    public Pseudo_TPPartID:string = '';
    public ForceSerLot:boolean;
    public PO_Exclude_Types:string = '';
    public PKG_ID:string = '';
    public KitTypeID:number = 0;
    public PackSizeLookupSeq:string = '';
    public TP_RepSep:number = 0;
    public TP_QuoteOrder:boolean;
    public PSPOMethod:number = 0;
    public TP_STQUAL2:string = '';
    public PostCommentsToAcct:boolean;
    public CreditMemoAsInvoice:boolean;
    public AddlAdrQual1:string = '';
    public AddlAdrQual2:string = '';
    public UsePackingClass:boolean;
    public TransitDays:number = 0;
    public FrozenDays:number = 0;
    public ShipDlvPattern:string = '';
    public TP_GS1Prefix:string = '';
    public TP_UseGS1Prefix:boolean;
    public Loc_Override:string = '';
    public TP_Status:string = '';
    public constructor(init?:Partial<CTrade>) { Object.assign(this, init); }
}
export const ITrade_TP_PartID_length = 30;
export const ITrade_TP_PartQ_length = 2;
export const ITrade_TP_ID_length = 100;
export const ITrade_TP_Name_length = 30;
export const ITrade_TP_GroupID_length = 30;
export const ITrade_TP_Asn_length = 1;
export const ITrade_TP_ItemCode_length = 2;
export const ITrade_TP_UseN1BY_length = 1;
export const ITrade_TP_UseDept_length = 1;
export const ITrade_TP_UseN1ST_length = 1;
export const ITrade_TP_STQUAL_length = 3;
export const ITrade_TP_In850_length = 1;
export const ITrade_TP_In810_length = 1;
export const ITrade_TP_Out850_length = 1;
export const ITrade_TP_Out810_length = 1;
export const ITrade_TP_864ID_length = 30;
export const ITrade_TP_ShipDateQual_length = 3;
export const ITrade_TP_CancelDateQual_length = 3;
export const ITrade_Std_ID_length = 10;
export const ITrade_Term_Days_length = 3;
export const ITrade_Disc_Perc_length = 3;
export const ITrade_Disc_Days_length = 3;
export const ITrade_TP_VendID_length = 15;
export const ITrade_TP_MapIn_850_length = 15;
export const ITrade_TP_UCC128_length = 20;
export const ITrade_TP_BarcodeType_length = 3;
export const ITrade_TP_User1_length = 50;
export const ITrade_TP_User2_length = 50;
export const ITrade_TP_User3_length = 50;
export const ITrade_TP_User4_length = 50;
export const ITrade_TP_User5_length = 50;
export const ITrade_TP_User6_length = 50;
export const ITrade_TP_User7_length = 50;
export const ITrade_TP_User8_length = 50;
export const ITrade_TP_User9_length = 50;
export const ITrade_TP_ItemCode2_length = 2;
export const ITrade_TP_SendQ_length = 2;
export const ITrade_TP_SendID_length = 30;
export const ITrade_TP_SendGID_length = 30;
export const ITrade_Van_length = 10;
export const ITrade_CipherKey_length = 80;
export const ITrade_TP_ShipDateQual1_length = 3;
export const ITrade_TP_ShipDateQual2_length = 3;
export const ITrade_TP_CancelDateQual1_length = 3;
export const ITrade_TP_CancelDateQual2_length = 3;
export const ITrade_Pseudo_ID_length = 30;
export const ITrade_Pseudo_Segname_length = 10;
export const ITrade_Pseudo_Qual_Elem_Value_length = 180;
export const ITrade_Pseudo_Vendor_Elem_Value_length = 180;
export const ITrade_Pseudo_TPPartID_length = 30;
export const ITrade_PO_Exclude_Types_length = 30;
export const ITrade_PKG_ID_length = 10;
export const ITrade_PackSizeLookupSeq_length = 50;
export const ITrade_TP_STQUAL2_length = 2;
export const ITrade_AddlAdrQual1_length = 3;
export const ITrade_AddlAdrQual2_length = 3;
export const ITrade_ShipDlvPattern_length = 20;
export const ITrade_TP_GS1Prefix_length = 30;
export const ITrade_Loc_Override_length = 20;
export const ITrade_TP_Status_length = 1;

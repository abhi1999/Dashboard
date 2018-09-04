import { IApiProdSeqItm } from '../edidb'
export class CApiProdSeqItm implements IApiProdSeqItm {
    public PSIID:string = '';
    public PSHID:string = '';
    public VPID:number = 0;
    public processtype:string = '';
    public processdate:Date;
    public itmdocline:number = 0;
    public fcdocline:number = 0;
    public fcqual:string = '';
    public fctqual:string = '';
    public fcqty:number = 0;
    public fcdate1:string = '';
    public fcdate2:string = '';
    public fcdtqual:string = '';
    public fcdtid:string = '';
    public itemuom:string = '';
    public importdate:Date;
    public status:string = '';
    public price:number = 0;
    public custitemno:string = '';
    public po:string = '';
    public poline:string = '';
    public shipto:string = '';
    public shipfrom:string = '';
    public supplier:string = '';
    public psdoctype:string = '';
    public tp_partid:string = '';
    public tp_id:string = '';
    public releaseno:string = '';
    public dlvdate:string = '';
    public shipdate:string = '';
    public dock:string = '';
    public linefeed:string = '';
    public vin:string = '';
    public jobseqno:string = '';
    public jobno:string = '';
    public laborgrp:string = '';
    public commodity:string = '';
    public linesetno:string = '';
    public storageid:string = '';
    public assembly:string = '';
    public engchg:string = '';
    public chassissn:string = '';
    public color:string = '';
    public position:string = '';
    public ctlno:string = '';
    public producttype:string = '';
    public kanban:string = '';
    public custorderno:string = '';
    public proddesc:string = '';
    public pscreatedate:string = '';
    public GSSenderID:string = '';
    public Expr1:number = 0;
    public Expr2:string = '';
    public Expr3:string = '';
    public Expr4:string = '';
    public tspurposecode:string = '';
    public pstypequal:string = '';
    public psqtyqual:string = '';
    public pstypecode:string = '';
    public purchaseorder:string = '';
    public Expr5:string = '';
    public contractno:string = '';
    public hrznstartdate:string = '';
    public hrznenddate:string = '';
    public Expr6:string = '';
    public psupddate:string = '';
    public hdrdocline:number = 0;
    public XMLID:string = '';
    public CreatedDate:Date;
    public Expr7:string = '';
    public DGID:string = '';
    public Config:boolean;
    public URECID:string = '';
    public Exp_Flag:string = '';
    public ExportDate:Date;
    public XMLText:string = '';
    public Expr8:string = '';
    public Misc_ID:number = 0;
    public XMLRef:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public Direction:string = '';
    public Expr9:number = 0;
    public AckID:string = '';
    public VPIDFA:number = 0;
    public constructor(init?:Partial<CApiProdSeqItm>) { Object.assign(this, init); }
}
export const IApiProdSeqItm_processtype_length = 2;
export const IApiProdSeqItm_fcqual_length = 1;
export const IApiProdSeqItm_fctqual_length = 1;
export const IApiProdSeqItm_fcdate1_length = 8;
export const IApiProdSeqItm_fcdate2_length = 8;
export const IApiProdSeqItm_fcdtqual_length = 3;
export const IApiProdSeqItm_fcdtid_length = 8;
export const IApiProdSeqItm_itemuom_length = 10;
export const IApiProdSeqItm_status_length = 1;
export const IApiProdSeqItm_custitemno_length = 30;
export const IApiProdSeqItm_po_length = 30;
export const IApiProdSeqItm_poline_length = 10;
export const IApiProdSeqItm_shipto_length = 30;
export const IApiProdSeqItm_shipfrom_length = 30;
export const IApiProdSeqItm_supplier_length = 30;
export const IApiProdSeqItm_psdoctype_length = 2;
export const IApiProdSeqItm_tp_partid_length = 30;
export const IApiProdSeqItm_tp_id_length = 15;
export const IApiProdSeqItm_releaseno_length = 30;
export const IApiProdSeqItm_dlvdate_length = 8;
export const IApiProdSeqItm_shipdate_length = 8;
export const IApiProdSeqItm_dock_length = 30;
export const IApiProdSeqItm_linefeed_length = 30;
export const IApiProdSeqItm_vin_length = 30;
export const IApiProdSeqItm_jobseqno_length = 30;
export const IApiProdSeqItm_jobno_length = 30;
export const IApiProdSeqItm_laborgrp_length = 30;
export const IApiProdSeqItm_commodity_length = 30;
export const IApiProdSeqItm_linesetno_length = 30;
export const IApiProdSeqItm_storageid_length = 30;
export const IApiProdSeqItm_assembly_length = 30;
export const IApiProdSeqItm_engchg_length = 30;
export const IApiProdSeqItm_chassissn_length = 30;
export const IApiProdSeqItm_color_length = 30;
export const IApiProdSeqItm_position_length = 30;
export const IApiProdSeqItm_ctlno_length = 30;
export const IApiProdSeqItm_producttype_length = 30;
export const IApiProdSeqItm_kanban_length = 30;
export const IApiProdSeqItm_custorderno_length = 50;
export const IApiProdSeqItm_proddesc_length = 50;
export const IApiProdSeqItm_pscreatedate_length = 30;
export const IApiProdSeqItm_GSSenderID_length = 50;
export const IApiProdSeqItm_Expr3_length = 30;
export const IApiProdSeqItm_Expr4_length = 2;
export const IApiProdSeqItm_tspurposecode_length = 2;
export const IApiProdSeqItm_pstypequal_length = 2;
export const IApiProdSeqItm_psqtyqual_length = 1;
export const IApiProdSeqItm_pstypecode_length = 2;
export const IApiProdSeqItm_purchaseorder_length = 30;
export const IApiProdSeqItm_Expr5_length = 30;
export const IApiProdSeqItm_contractno_length = 30;
export const IApiProdSeqItm_hrznstartdate_length = 8;
export const IApiProdSeqItm_hrznenddate_length = 8;
export const IApiProdSeqItm_Expr6_length = 8;
export const IApiProdSeqItm_psupddate_length = 8;
export const IApiProdSeqItm_Expr7_length = 30;
export const IApiProdSeqItm_DGID_length = 5;
export const IApiProdSeqItm_Exp_Flag_length = 1;
export const IApiProdSeqItm_XMLText_length = 1073741823;
export const IApiProdSeqItm_XMLRef_length = 1000;
export const IApiProdSeqItm_GCN_length = 50;
export const IApiProdSeqItm_TCN_length = 50;
export const IApiProdSeqItm_Direction_length = 1;
export const IApiProdSeqItm_AckID_length = 10;

import { IProdSeqPO } from '../edidb'
export class CProdSeqPO implements IProdSeqPO {
    public tp_partid:string = '';
    public beg_01:string = '';
    public beg_02:string = '';
    public beg_03:string = '';
    public beg_04:string = '';
    public beg_05:string = '';
    public beg_06:string = '';
    public ctt_01:string = '';
    public exp_flag:string = '';
    public sdq_flag:string = '';
    public cur_02:number = 0;
    public importdate:Date;
    public exportdate:number = 0;
    public misc_id:number = 0;
    public shiptoid:string = '';
    public shipfromid:string = '';
    public supplierid:string = '';
    public dock:string = '';
    public po:string = '';
    public poline:string = '';
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
    public VPID:number = 0;
    public po1_02:number = 0;
    public po1_03:string = '';
    public po1_04:number = 0;
    public po1_05:string = '';
    public po1_06:string = '';
    public po1_07:string = '';
    public po1_ediqty:number = 0;
    public po1_edium:string = '';
    public po1_ediline:string = '';
    public docline:number = 0;
    public packsize:number = 0;
    public etline_no:number = 0;
    public fcdate1:string = '';
    public fcdate2:string = '';
    public PSHID:string = '';
    public PSIID:string = '';
    public constructor(init?:Partial<CProdSeqPO>) { Object.assign(this, init); }
}
export const IProdSeqPO_tp_partid_length = 30;
export const IProdSeqPO_beg_01_length = 2;
export const IProdSeqPO_beg_02_length = 2;
export const IProdSeqPO_beg_03_length = 8;
export const IProdSeqPO_beg_04_length = 30;
export const IProdSeqPO_beg_05_length = 8;
export const IProdSeqPO_beg_06_length = 30;
export const IProdSeqPO_ctt_01_length = 1;
export const IProdSeqPO_exp_flag_length = 1;
export const IProdSeqPO_sdq_flag_length = 1;
export const IProdSeqPO_shiptoid_length = 30;
export const IProdSeqPO_shipfromid_length = 30;
export const IProdSeqPO_supplierid_length = 30;
export const IProdSeqPO_dock_length = 30;
export const IProdSeqPO_po_length = 30;
export const IProdSeqPO_poline_length = 10;
export const IProdSeqPO_linefeed_length = 30;
export const IProdSeqPO_vin_length = 30;
export const IProdSeqPO_jobseqno_length = 30;
export const IProdSeqPO_jobno_length = 30;
export const IProdSeqPO_laborgrp_length = 30;
export const IProdSeqPO_commodity_length = 30;
export const IProdSeqPO_linesetno_length = 30;
export const IProdSeqPO_storageid_length = 30;
export const IProdSeqPO_assembly_length = 30;
export const IProdSeqPO_engchg_length = 30;
export const IProdSeqPO_chassissn_length = 30;
export const IProdSeqPO_color_length = 30;
export const IProdSeqPO_position_length = 30;
export const IProdSeqPO_ctlno_length = 30;
export const IProdSeqPO_producttype_length = 30;
export const IProdSeqPO_kanban_length = 30;
export const IProdSeqPO_custorderno_length = 50;
export const IProdSeqPO_proddesc_length = 50;
export const IProdSeqPO_po1_03_length = 10;
export const IProdSeqPO_po1_05_length = 2;
export const IProdSeqPO_po1_06_length = 2;
export const IProdSeqPO_po1_07_length = 30;
export const IProdSeqPO_po1_edium_length = 10;
export const IProdSeqPO_po1_ediline_length = 1;
export const IProdSeqPO_fcdate1_length = 8;
export const IProdSeqPO_fcdate2_length = 8;

export const kProdSeqPO_tp_partid="tp_partid";
export const kProdSeqPO_beg_01="beg_01";
export const kProdSeqPO_beg_02="beg_02";
export const kProdSeqPO_beg_03="beg_03";
export const kProdSeqPO_beg_04="beg_04";
export const kProdSeqPO_beg_05="beg_05";
export const kProdSeqPO_beg_06="beg_06";
export const kProdSeqPO_ctt_01="ctt_01";
export const kProdSeqPO_exp_flag="exp_flag";
export const kProdSeqPO_sdq_flag="sdq_flag";
export const kProdSeqPO_cur_02="cur_02";
export const kProdSeqPO_importdate="importdate";
export const kProdSeqPO_exportdate="exportdate";
export const kProdSeqPO_misc_id="misc_id";
export const kProdSeqPO_shiptoid="shiptoid";
export const kProdSeqPO_shipfromid="shipfromid";
export const kProdSeqPO_supplierid="supplierid";
export const kProdSeqPO_dock="dock";
export const kProdSeqPO_po="po";
export const kProdSeqPO_poline="poline";
export const kProdSeqPO_linefeed="linefeed";
export const kProdSeqPO_vin="vin";
export const kProdSeqPO_jobseqno="jobseqno";
export const kProdSeqPO_jobno="jobno";
export const kProdSeqPO_laborgrp="laborgrp";
export const kProdSeqPO_commodity="commodity";
export const kProdSeqPO_linesetno="linesetno";
export const kProdSeqPO_storageid="storageid";
export const kProdSeqPO_assembly="assembly";
export const kProdSeqPO_engchg="engchg";
export const kProdSeqPO_chassissn="chassissn";
export const kProdSeqPO_color="color";
export const kProdSeqPO_position="position";
export const kProdSeqPO_ctlno="ctlno";
export const kProdSeqPO_producttype="producttype";
export const kProdSeqPO_kanban="kanban";
export const kProdSeqPO_custorderno="custorderno";
export const kProdSeqPO_proddesc="proddesc";
export const kProdSeqPO_VPID="VPID";
export const kProdSeqPO_po1_02="po1_02";
export const kProdSeqPO_po1_03="po1_03";
export const kProdSeqPO_po1_04="po1_04";
export const kProdSeqPO_po1_05="po1_05";
export const kProdSeqPO_po1_06="po1_06";
export const kProdSeqPO_po1_07="po1_07";
export const kProdSeqPO_po1_ediqty="po1_ediqty";
export const kProdSeqPO_po1_edium="po1_edium";
export const kProdSeqPO_po1_ediline="po1_ediline";
export const kProdSeqPO_docline="docline";
export const kProdSeqPO_packsize="packsize";
export const kProdSeqPO_etline_no="etline_no";
export const kProdSeqPO_fcdate1="fcdate1";
export const kProdSeqPO_fcdate2="fcdate2";
export const kProdSeqPO_PSHID="PSHID";
export const kProdSeqPO_PSIID="PSIID";

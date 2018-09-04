import { IProdSeqItm } from '../edidb'
export class CProdSeqItm implements IProdSeqItm {
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
    public constructor(init?:Partial<CProdSeqItm>) { Object.assign(this, init); }
}
export const IProdSeqItm_processtype_length = 2;
export const IProdSeqItm_fcqual_length = 1;
export const IProdSeqItm_fctqual_length = 1;
export const IProdSeqItm_fcdate1_length = 8;
export const IProdSeqItm_fcdate2_length = 8;
export const IProdSeqItm_fcdtqual_length = 3;
export const IProdSeqItm_fcdtid_length = 8;
export const IProdSeqItm_itemuom_length = 10;
export const IProdSeqItm_status_length = 1;
export const IProdSeqItm_custitemno_length = 30;
export const IProdSeqItm_po_length = 30;
export const IProdSeqItm_poline_length = 10;
export const IProdSeqItm_shipto_length = 30;
export const IProdSeqItm_shipfrom_length = 30;
export const IProdSeqItm_supplier_length = 30;
export const IProdSeqItm_psdoctype_length = 2;
export const IProdSeqItm_tp_partid_length = 30;
export const IProdSeqItm_tp_id_length = 15;
export const IProdSeqItm_releaseno_length = 30;
export const IProdSeqItm_dlvdate_length = 8;
export const IProdSeqItm_shipdate_length = 8;
export const IProdSeqItm_dock_length = 30;
export const IProdSeqItm_linefeed_length = 30;
export const IProdSeqItm_vin_length = 30;
export const IProdSeqItm_jobseqno_length = 30;
export const IProdSeqItm_jobno_length = 30;
export const IProdSeqItm_laborgrp_length = 30;
export const IProdSeqItm_commodity_length = 30;
export const IProdSeqItm_linesetno_length = 30;
export const IProdSeqItm_storageid_length = 30;
export const IProdSeqItm_assembly_length = 30;
export const IProdSeqItm_engchg_length = 30;
export const IProdSeqItm_chassissn_length = 30;
export const IProdSeqItm_color_length = 30;
export const IProdSeqItm_position_length = 30;
export const IProdSeqItm_ctlno_length = 30;
export const IProdSeqItm_producttype_length = 30;
export const IProdSeqItm_kanban_length = 30;
export const IProdSeqItm_custorderno_length = 50;
export const IProdSeqItm_proddesc_length = 50;
export const IProdSeqItm_pscreatedate_length = 30;
export const IProdSeqItm_GSSenderID_length = 50;
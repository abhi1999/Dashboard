import { IApiGetTempDocs } from '../edidb'
export class CApiGetTempDocs implements IApiGetTempDocs {
    public PSIID:string = '';
    public VPID:number = 0;
    public tp_name:string = '';
    public processtype:string = '';
    public importdate:Date;
    public processdate:Date;
    public tp_partid:string = '';
    public fcqual:string = '';
    public fcqty:number = 0;
    public fcdate1:Date;
    public fcdtqual:string = '';
    public itemid:string = '';
    public engchangelevel:string = '';
    public purchaseorder:string = '';
    public poline:string = '';
    public releaseno:string = '';
    public tp_stqual:string = '';
    public vin:string = '';
    public jobseqno:string = '';
    public storageid:string = '';
    public assembly:string = '';
    public HoldID:number = 0;
    public shiptoid:string = '';
    public status:string = '';
    public constructor(init?:Partial<CApiGetTempDocs>) { Object.assign(this, init); }
}
export const IApiGetTempDocs_tp_name_length = 30;
export const IApiGetTempDocs_processtype_length = 2;
export const IApiGetTempDocs_tp_partid_length = 30;
export const IApiGetTempDocs_fcqual_length = 1;
export const IApiGetTempDocs_fcdtqual_length = 3;
export const IApiGetTempDocs_itemid_length = 30;
export const IApiGetTempDocs_engchangelevel_length = 30;
export const IApiGetTempDocs_purchaseorder_length = 30;
export const IApiGetTempDocs_poline_length = 10;
export const IApiGetTempDocs_releaseno_length = 30;
export const IApiGetTempDocs_tp_stqual_length = 3;
export const IApiGetTempDocs_vin_length = 30;
export const IApiGetTempDocs_jobseqno_length = 30;
export const IApiGetTempDocs_storageid_length = 30;
export const IApiGetTempDocs_assembly_length = 30;
export const IApiGetTempDocs_shiptoid_length = 30;
export const IApiGetTempDocs_status_length = 1;

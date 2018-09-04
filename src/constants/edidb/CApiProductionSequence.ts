import { IApiProductionSequence } from '../edidb'
export class CApiProductionSequence implements IApiProductionSequence {
    public PSIID:string = '';
    public VPID:number = 0;
    public tp_name:string = '';
    public processtype:string = '';
    public importdate:Date;
    public processdate:Date;
    public tp_partid:string = '';
    public fcqual:string = '';
    public itemid:string = '';
    public fcqty:number = 0;
    public fcdate1:Date;
    public fcdtqual:string = '';
    public purchaseorder:string = '';
    public releaseno:string = '';
    public engchangelevel:string = '';
    public tp_stqual:string = '';
    public shiptoid:string = '';
    public status:string = '';
    public poline:string = '';
    public vin:string = '';
    public jobseqno:string = '';
    public storageid:string = '';
    public assembly:string = '';
    public constructor(init?:Partial<CApiProductionSequence>) { Object.assign(this, init); }
}
export const IApiProductionSequence_tp_name_length = 30;
export const IApiProductionSequence_processtype_length = 2;
export const IApiProductionSequence_tp_partid_length = 30;
export const IApiProductionSequence_fcqual_length = 2;
export const IApiProductionSequence_itemid_length = 80;
export const IApiProductionSequence_fcdtqual_length = 3;
export const IApiProductionSequence_purchaseorder_length = 30;
export const IApiProductionSequence_releaseno_length = 30;
export const IApiProductionSequence_engchangelevel_length = 80;
export const IApiProductionSequence_tp_stqual_length = 3;
export const IApiProductionSequence_shiptoid_length = 80;
export const IApiProductionSequence_status_length = 1;
export const IApiProductionSequence_poline_length = 10;
export const IApiProductionSequence_vin_length = 30;
export const IApiProductionSequence_jobseqno_length = 30;
export const IApiProductionSequence_storageid_length = 30;
export const IApiProductionSequence_assembly_length = 30;

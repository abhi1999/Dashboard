import { IProdSeqHdr } from '../edidb'
export class CProdSeqHdr implements IProdSeqHdr {
    public VPID:number = 0;
    public PSHID:string = '';
    public tp_partid:string = '';
    public psdoctype:string = '';
    public tspurposecode:string = '';
    public pstypequal:string = '';
    public psqtyqual:string = '';
    public pstypecode:string = '';
    public purchaseorder:string = '';
    public releaseno:string = '';
    public contractno:string = '';
    public hrznstartdate:string = '';
    public hrznenddate:string = '';
    public pscreatedate:string = '';
    public psupddate:string = '';
    public hdrdocline:number = 0;
    public XMLID:string = '';
    public constructor(init?:Partial<CProdSeqHdr>) { Object.assign(this, init); }
}
export const IProdSeqHdr_tp_partid_length = 30;
export const IProdSeqHdr_psdoctype_length = 2;
export const IProdSeqHdr_tspurposecode_length = 2;
export const IProdSeqHdr_pstypequal_length = 2;
export const IProdSeqHdr_psqtyqual_length = 1;
export const IProdSeqHdr_pstypecode_length = 2;
export const IProdSeqHdr_purchaseorder_length = 30;
export const IProdSeqHdr_releaseno_length = 30;
export const IProdSeqHdr_contractno_length = 30;
export const IProdSeqHdr_hrznstartdate_length = 8;
export const IProdSeqHdr_hrznenddate_length = 8;
export const IProdSeqHdr_pscreatedate_length = 8;
export const IProdSeqHdr_psupddate_length = 8;

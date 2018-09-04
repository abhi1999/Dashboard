import { IProdSeqGrp } from '../edidb'
export class CProdSeqGrp implements IProdSeqGrp {
    public PSGID:string = '';
    public PSIID:string = '';
    public PSHID:string = '';
    public psglevel:number = 0;
    public psgtype:string = '';
    public psgdocline:number = 0;
    public pardocline:number = 0;
    public psgqual:string = '';
    public psgtext:string = '';
    public constructor(init?:Partial<CProdSeqGrp>) { Object.assign(this, init); }
}
export const IProdSeqGrp_psgtype_length = 1;
export const IProdSeqGrp_psgqual_length = 10;
export const IProdSeqGrp_psgtext_length = 80;
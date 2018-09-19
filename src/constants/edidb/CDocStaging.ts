import { IDocStaging } from '../edidb'
export class CDocStaging implements IDocStaging {
    public DGID:string = '';
    public direction:string = '';
    public docno:string = '';
    public docnoint:number = 0;
    public recid:number = 0;
    public docdate:Date;
    public acctno:string = '';
    public acctname:string = '';
    public docamount:number = 0;
    public docref1:string = '';
    public docref2:string = '';
    public docref3:string = '';
    public docref4:string = '';
    public docref5:string = '';
    public exclude:boolean;
    public DSID:number = 0;
    public constructor(init?:Partial<CDocStaging>) { Object.assign(this, init); }
}
export const IDocStaging_DGID_length = 5;
export const IDocStaging_direction_length = 1;
export const IDocStaging_docno_length = 80;
export const IDocStaging_acctno_length = 80;
export const IDocStaging_acctname_length = 80;
export const IDocStaging_docref1_length = 80;
export const IDocStaging_docref2_length = 80;
export const IDocStaging_docref3_length = 80;
export const IDocStaging_docref4_length = 80;
export const IDocStaging_docref5_length = 80;

export const kDocStaging_DGID="DGID";
export const kDocStaging_direction="direction";
export const kDocStaging_docno="docno";
export const kDocStaging_docnoint="docnoint";
export const kDocStaging_recid="recid";
export const kDocStaging_docdate="docdate";
export const kDocStaging_acctno="acctno";
export const kDocStaging_acctname="acctname";
export const kDocStaging_docamount="docamount";
export const kDocStaging_docref1="docref1";
export const kDocStaging_docref2="docref2";
export const kDocStaging_docref3="docref3";
export const kDocStaging_docref4="docref4";
export const kDocStaging_docref5="docref5";
export const kDocStaging_exclude="exclude";
export const kDocStaging_DSID="DSID";

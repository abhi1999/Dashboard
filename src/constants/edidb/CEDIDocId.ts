import { IEDIDocId } from '../edidb'
export class CEDIDocId implements IEDIDocId {
    public TPID:string = '';
    public ICN:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public Doc_ID:string = '';
    public Doc_Count:number = 0;
    public UDID:string = '';
    public ImportDate:Date;
    public Seperator:string = '';
    public SDID:string = '';
    public constructor(init?:Partial<CEDIDocId>) { Object.assign(this, init); }
}
export const IEDIDocId_TPID_length = 50;
export const IEDIDocId_ICN_length = 50;
export const IEDIDocId_GCN_length = 50;
export const IEDIDocId_TCN_length = 50;
export const IEDIDocId_Doc_ID_length = 50;
export const IEDIDocId_Seperator_length = 10;

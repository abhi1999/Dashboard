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

export const kEDIDocId_TPID="TPID";
export const kEDIDocId_ICN="ICN";
export const kEDIDocId_GCN="GCN";
export const kEDIDocId_TCN="TCN";
export const kEDIDocId_Doc_ID="Doc_ID";
export const kEDIDocId_Doc_Count="Doc_Count";
export const kEDIDocId_UDID="UDID";
export const kEDIDocId_ImportDate="ImportDate";
export const kEDIDocId_Seperator="Seperator";
export const kEDIDocId_SDID="SDID";

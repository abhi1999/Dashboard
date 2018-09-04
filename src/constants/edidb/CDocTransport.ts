import { IDocTransport } from '../edidb'
export class CDocTransport implements IDocTransport {
    public TransDate:Date;
    public TP_PartID:string = '';
    public SendQual:string = '';
    public SendID:string = '';
    public SendGroupID:string = '';
    public RecvQual:string = '';
    public RecvID:string = '';
    public RecvGroupID:string = '';
    public DocID:string = '';
    public DGID:string = '';
    public TransID:string = '';
    public PkgFile:string = '';
    public SegCount:number = 0;
    public DataKey:string = '';
    public VanExt:string = '';
    public Machinename:string = '';
    public Username:string = '';
    public Status:string = '';
    public DocData:number[];
    public PID:string = '';
    public DTID:string = '';
    public Xml_Flag:boolean;
    public constructor(init?:Partial<CDocTransport>) { Object.assign(this, init); }
}
export const IDocTransport_TP_PartID_length = 30;
export const IDocTransport_SendQual_length = 2;
export const IDocTransport_SendID_length = 30;
export const IDocTransport_SendGroupID_length = 30;
export const IDocTransport_RecvQual_length = 2;
export const IDocTransport_RecvID_length = 30;
export const IDocTransport_RecvGroupID_length = 30;
export const IDocTransport_DocID_length = 50;
export const IDocTransport_DGID_length = 5;
export const IDocTransport_TransID_length = 50;
export const IDocTransport_PkgFile_length = 50;
export const IDocTransport_DataKey_length = 128;
export const IDocTransport_VanExt_length = 3;
export const IDocTransport_Machinename_length = 80;
export const IDocTransport_Username_length = 80;
export const IDocTransport_Status_length = 1;
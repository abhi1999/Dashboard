import { IDataTransport } from '../edidb'
export class CDataTransport implements IDataTransport {
    public TransID:string = '';
    public TP_PartID:string = '';
    public DTMethod:number = 0;
    public DTIn:string = '';
    public DTOut:string = '';
    public DTServer:string = '';
    public DTDomain:string = '';
    public DTUser:string = '';
    public DTPass:string = '';
    public DTCID:string = '';
    public DTWeb_ERP_Flag:boolean;
    public constructor(init?:Partial<CDataTransport>) { Object.assign(this, init); }
}
export const IDataTransport_TransID_length = 50;
export const IDataTransport_TP_PartID_length = 30;
export const IDataTransport_DTIn_length = 256;
export const IDataTransport_DTOut_length = 256;
export const IDataTransport_DTServer_length = 256;
export const IDataTransport_DTDomain_length = 80;
export const IDataTransport_DTUser_length = 80;
export const IDataTransport_DTPass_length = 80;

export const kDataTransport_TransID="TransID";
export const kDataTransport_TP_PartID="TP_PartID";
export const kDataTransport_DTMethod="DTMethod";
export const kDataTransport_DTIn="DTIn";
export const kDataTransport_DTOut="DTOut";
export const kDataTransport_DTServer="DTServer";
export const kDataTransport_DTDomain="DTDomain";
export const kDataTransport_DTUser="DTUser";
export const kDataTransport_DTPass="DTPass";
export const kDataTransport_DTCID="DTCID";
export const kDataTransport_DTWeb_ERP_Flag="DTWeb_ERP_Flag";

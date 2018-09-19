import { IApiDataTransport } from '../edidb'
export class CApiDataTransport implements IApiDataTransport {
    public DTCID:string = '';
    public TransID:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public DTMethod:number = 0;
    public DTIn:string = '';
    public DTOut:string = '';
    public DTServer:string = '';
    public DTDomain:string = '';
    public DTUser:string = '';
    public DTPass:string = '';
    public DTWeb_ERP_Flag:boolean;
    public constructor(init?:Partial<CApiDataTransport>) { Object.assign(this, init); }
}
export const IApiDataTransport_TransID_length = 50;
export const IApiDataTransport_TP_PartID_length = 30;
export const IApiDataTransport_TP_Name_length = 30;
export const IApiDataTransport_DTIn_length = 256;
export const IApiDataTransport_DTOut_length = 256;
export const IApiDataTransport_DTServer_length = 256;
export const IApiDataTransport_DTDomain_length = 80;
export const IApiDataTransport_DTUser_length = 80;
export const IApiDataTransport_DTPass_length = 80;

export const kApiDataTransport_DTCID="DTCID";
export const kApiDataTransport_TransID="TransID";
export const kApiDataTransport_TP_PartID="TP_PartID";
export const kApiDataTransport_TP_Name="TP_Name";
export const kApiDataTransport_DTMethod="DTMethod";
export const kApiDataTransport_DTIn="DTIn";
export const kApiDataTransport_DTOut="DTOut";
export const kApiDataTransport_DTServer="DTServer";
export const kApiDataTransport_DTDomain="DTDomain";
export const kApiDataTransport_DTUser="DTUser";
export const kApiDataTransport_DTPass="DTPass";
export const kApiDataTransport_DTWeb_ERP_Flag="DTWeb_ERP_Flag";

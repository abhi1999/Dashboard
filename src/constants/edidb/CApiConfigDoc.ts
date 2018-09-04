import { IApiConfigDoc } from '../edidb'
export class CApiConfigDoc implements IApiConfigDoc {
    public VPID:number = 0;
    public DGID:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public Doc_Group:string = '';
    public XMLRef:string = '';
    public statuscode:string = '';
    public CreatedDate:Date;
    public XMLID:string = '';
    public GCN:string = '';
    public TCN:string = '';
    public Misc_ID:number = 0;
    public constructor(init?:Partial<CApiConfigDoc>) { Object.assign(this, init); }
}
export const IApiConfigDoc_DGID_length = 5;
export const IApiConfigDoc_TP_PartID_length = 30;
export const IApiConfigDoc_TP_Name_length = 30;
export const IApiConfigDoc_Doc_Group_length = 50;
export const IApiConfigDoc_XMLRef_length = 1000;
export const IApiConfigDoc_statuscode_length = 1;
export const IApiConfigDoc_GCN_length = 50;
export const IApiConfigDoc_TCN_length = 50;

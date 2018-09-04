import { IApiDocLoadConfig } from '../edidb'
export class CApiDocLoadConfig implements IApiDocLoadConfig {
    public DLID:string = '';
    public DGID:string = '';
    public DocType:string = '';
    public TP_PartID:string = '';
    public Doc_Group:string = '';
    public Doc_Name:string = '';
    public TP_Name:string = '';
    public ProcessFlag:number = 0;
    public constructor(init?:Partial<CApiDocLoadConfig>) { Object.assign(this, init); }
}
export const IApiDocLoadConfig_DGID_length = 5;
export const IApiDocLoadConfig_DocType_length = 10;
export const IApiDocLoadConfig_TP_PartID_length = 30;
export const IApiDocLoadConfig_Doc_Group_length = 50;
export const IApiDocLoadConfig_Doc_Name_length = 10;
export const IApiDocLoadConfig_TP_Name_length = 30;

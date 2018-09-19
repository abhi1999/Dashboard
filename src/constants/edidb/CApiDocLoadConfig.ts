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

export const kApiDocLoadConfig_DLID="DLID";
export const kApiDocLoadConfig_DGID="DGID";
export const kApiDocLoadConfig_DocType="DocType";
export const kApiDocLoadConfig_TP_PartID="TP_PartID";
export const kApiDocLoadConfig_Doc_Group="Doc_Group";
export const kApiDocLoadConfig_Doc_Name="Doc_Name";
export const kApiDocLoadConfig_TP_Name="TP_Name";
export const kApiDocLoadConfig_ProcessFlag="ProcessFlag";

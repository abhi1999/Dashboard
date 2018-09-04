import { IDocLoadConfig } from '../edidb'
export class CDocLoadConfig implements IDocLoadConfig {
    public DLID:string = '';
    public DGID:string = '';
    public DocType:string = '';
    public TP_PartID:string = '';
    public ProcessFlag:number = 0;
    public constructor(init?:Partial<CDocLoadConfig>) { Object.assign(this, init); }
}
export const IDocLoadConfig_DGID_length = 5;
export const IDocLoadConfig_DocType_length = 10;
export const IDocLoadConfig_TP_PartID_length = 30;

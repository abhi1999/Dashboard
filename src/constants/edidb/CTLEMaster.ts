import { ITLEMaster } from '../edidb'
export class CTLEMaster implements ITLEMaster {
    public DTID:number = 0;
    public DKID:number = 0;
    public DGID:string = '';
    public Direction:string = '';
    public DValue:string = '';
    public PValue:string = '';
    public TP_PartID:string = '';
    public TLEID:number = 0;
    public constructor(init?:Partial<CTLEMaster>) { Object.assign(this, init); }
}
export const ITLEMaster_DGID_length = 5;
export const ITLEMaster_Direction_length = 1;
export const ITLEMaster_DValue_length = 80;
export const ITLEMaster_PValue_length = 80;
export const ITLEMaster_TP_PartID_length = 30;

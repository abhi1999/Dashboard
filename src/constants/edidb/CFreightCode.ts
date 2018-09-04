import { IFreightCode } from '../edidb'
export class CFreightCode implements IFreightCode {
    public Frt_Code:string = '';
    public Description:string = '';
    public NMFC:string = '';
    public Class:string = '';
    public HazMat:boolean;
    public Sub:string = '';
    public constructor(init?:Partial<CFreightCode>) { Object.assign(this, init); }
}
export const IFreightCode_Frt_Code_length = 50;
export const IFreightCode_Description_length = 255;
export const IFreightCode_NMFC_length = 20;
export const IFreightCode_Class_length = 10;
export const IFreightCode_Sub_length = 10;

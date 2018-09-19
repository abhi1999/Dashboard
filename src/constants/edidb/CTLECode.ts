import { ITLECode } from '../edidb'
export class CTLECode implements ITLECode {
    public CDID:string = '';
    public Name:string = '';
    public constructor(init?:Partial<CTLECode>) { Object.assign(this, init); }
}
export const ITLECode_CDID_length = 5;
export const ITLECode_Name_length = 50;

export const kTLECode_CDID="CDID";
export const kTLECode_Name="Name";

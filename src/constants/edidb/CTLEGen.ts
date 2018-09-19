import { ITLEGen } from '../edidb'
export class CTLEGen implements ITLEGen {
    public TLEGID:number = 0;
    public GenParDataType:string = '';
    public GenParDirection:string = '';
    public GenChildDataType:string = '';
    public GenChildDirection:string = '';
    public GenStoredProc:string = '';
    public Active:boolean;
    public Restricted:boolean;
    public constructor(init?:Partial<CTLEGen>) { Object.assign(this, init); }
}
export const ITLEGen_GenParDataType_length = 50;
export const ITLEGen_GenParDirection_length = 1;
export const ITLEGen_GenChildDataType_length = 50;
export const ITLEGen_GenChildDirection_length = 1;
export const ITLEGen_GenStoredProc_length = 50;

export const kTLEGen_TLEGID="TLEGID";
export const kTLEGen_GenParDataType="GenParDataType";
export const kTLEGen_GenParDirection="GenParDirection";
export const kTLEGen_GenChildDataType="GenChildDataType";
export const kTLEGen_GenChildDirection="GenChildDirection";
export const kTLEGen_GenStoredProc="GenStoredProc";
export const kTLEGen_Active="Active";
export const kTLEGen_Restricted="Restricted";

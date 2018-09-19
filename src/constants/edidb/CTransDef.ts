import { ITransDef } from '../edidb'
export class CTransDef implements ITransDef {
    public TransID:string = '';
    public TransDesc:string = '';
    public UseTempTable:boolean;
    public TempLocation:string = '';
    public constructor(init?:Partial<CTransDef>) { Object.assign(this, init); }
}
export const ITransDef_TransID_length = 50;
export const ITransDef_TransDesc_length = 50;
export const ITransDef_TempLocation_length = 80;

export const kTransDef_TransID="TransID";
export const kTransDef_TransDesc="TransDesc";
export const kTransDef_UseTempTable="UseTempTable";
export const kTransDef_TempLocation="TempLocation";

import { ITransObject } from '../edidb'
export class CTransObject implements ITransObject {
    public TOID:string = '';
    public DGID:string = '';
    public TransID:string = '';
    public TP_PartID:string = '';
    public TDocName:string = '';
    public FilenameLayout:string = '';
    public PackageSeparately:boolean;
    public UseControlNums:boolean;
    public constructor(init?:Partial<CTransObject>) { Object.assign(this, init); }
}
export const ITransObject_DGID_length = 5;
export const ITransObject_TransID_length = 50;
export const ITransObject_TP_PartID_length = 30;
export const ITransObject_TDocName_length = 80;
export const ITransObject_FilenameLayout_length = 200;

export const kTransObject_TOID="TOID";
export const kTransObject_DGID="DGID";
export const kTransObject_TransID="TransID";
export const kTransObject_TP_PartID="TP_PartID";
export const kTransObject_TDocName="TDocName";
export const kTransObject_FilenameLayout="FilenameLayout";
export const kTransObject_PackageSeparately="PackageSeparately";
export const kTransObject_UseControlNums="UseControlNums";

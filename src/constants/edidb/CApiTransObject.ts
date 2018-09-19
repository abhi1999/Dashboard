import { IApiTransObject } from '../edidb'
export class CApiTransObject implements IApiTransObject {
    public TOID:string = '';
    public DGID:string = '';
    public TransID:string = '';
    public TP_PartID:string = '';
    public TDocName:string = '';
    public FilenameLayout:string = '';
    public PackageSeparately:boolean;
    public UseControlNums:boolean;
    public TransIDImportDate:Date;
    public TransIDObj_Date:Date;
    public TDocNameImportDate:Date;
    public TDocNameObj_Date:Date;
    public constructor(init?:Partial<CApiTransObject>) { Object.assign(this, init); }
}
export const IApiTransObject_DGID_length = 5;
export const IApiTransObject_TransID_length = 50;
export const IApiTransObject_TP_PartID_length = 30;
export const IApiTransObject_TDocName_length = 80;
export const IApiTransObject_FilenameLayout_length = 200;

export const kApiTransObject_TOID="TOID";
export const kApiTransObject_DGID="DGID";
export const kApiTransObject_TransID="TransID";
export const kApiTransObject_TP_PartID="TP_PartID";
export const kApiTransObject_TDocName="TDocName";
export const kApiTransObject_FilenameLayout="FilenameLayout";
export const kApiTransObject_PackageSeparately="PackageSeparately";
export const kApiTransObject_UseControlNums="UseControlNums";
export const kApiTransObject_TransIDImportDate="TransIDImportDate";
export const kApiTransObject_TransIDObj_Date="TransIDObj_Date";
export const kApiTransObject_TDocNameImportDate="TDocNameImportDate";
export const kApiTransObject_TDocNameObj_Date="TDocNameObj_Date";

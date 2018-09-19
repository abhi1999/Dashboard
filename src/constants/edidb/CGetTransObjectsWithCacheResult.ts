import { IGetTransObjectsWithCacheResult } from '../edidb'
export class CGetTransObjectsWithCacheResult implements IGetTransObjectsWithCacheResult {
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
    public constructor(init?:Partial<CGetTransObjectsWithCacheResult>) { Object.assign(this, init); }
}
export const kGetTransObjectsWithCacheResult_DGID="DGID";
export const kGetTransObjectsWithCacheResult_TransID="TransID";
export const kGetTransObjectsWithCacheResult_TP_PartID="TP_PartID";
export const kGetTransObjectsWithCacheResult_TDocName="TDocName";
export const kGetTransObjectsWithCacheResult_FilenameLayout="FilenameLayout";
export const kGetTransObjectsWithCacheResult_PackageSeparately="PackageSeparately";
export const kGetTransObjectsWithCacheResult_UseControlNums="UseControlNums";
export const kGetTransObjectsWithCacheResult_TransIDImportDate="TransIDImportDate";
export const kGetTransObjectsWithCacheResult_TransIDObj_Date="TransIDObj_Date";
export const kGetTransObjectsWithCacheResult_TDocNameImportDate="TDocNameImportDate";
export const kGetTransObjectsWithCacheResult_TDocNameObj_Date="TDocNameObj_Date";

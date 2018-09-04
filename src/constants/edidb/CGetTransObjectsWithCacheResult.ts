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
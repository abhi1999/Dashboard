import { IAcctPackage } from '../edidb'
export class CAcctPackage implements IAcctPackage {
    public AcctPackageID:string = '';
    public AcctDesc:string = '';
    public ObjectsUsed:boolean;
    public DisplayOrder:number = 0;
    public constructor(init?:Partial<CAcctPackage>) { Object.assign(this, init); }
}
export const IAcctPackage_AcctPackageID_length = 10;
export const IAcctPackage_AcctDesc_length = 80;

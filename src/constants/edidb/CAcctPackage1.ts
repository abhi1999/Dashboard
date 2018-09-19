import { IAcctPackage1 } from '../edidb'
export class CAcctPackage1 implements IAcctPackage1 {
    public Acct_Package:string = '';
    public constructor(init?:Partial<CAcctPackage1>) { Object.assign(this, init); }
}
export const IAcctPackage1_Acct_Package_length = 20;

export const kAcctPackage1_Acct_Package="Acct_Package";

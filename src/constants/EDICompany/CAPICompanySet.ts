import { IAPICompanySet } from '../EDICompany'
export class CAPICompanySet implements IAPICompanySet {
    public Company_ID:number = 0;
    public YourCompany_DispName:string = '';
    public YourCompany_Qual:string = '';
    public YourCompany_ID:string = '';
    public SupExp:Date;
    public DaysLeft:number = 0;
    public dbver:number = 0;
    public OEM_Layout:string = '';
    public constructor(init?:Partial<CAPICompanySet>) { Object.assign(this, init); }
}
export const IAPICompanySet_YourCompany_DispName_length = 40;
export const IAPICompanySet_YourCompany_Qual_length = 3;
export const IAPICompanySet_YourCompany_ID_length = 30;
export const IAPICompanySet_OEM_Layout_length = 10;

export const kAPICompanySet_Company_ID="Company_ID";
export const kAPICompanySet_YourCompany_DispName="YourCompany_DispName";
export const kAPICompanySet_YourCompany_Qual="YourCompany_Qual";
export const kAPICompanySet_YourCompany_ID="YourCompany_ID";
export const kAPICompanySet_SupExp="SupExp";
export const kAPICompanySet_DaysLeft="DaysLeft";
export const kAPICompanySet_dbver="dbver";
export const kAPICompanySet_OEM_Layout="OEM_Layout";

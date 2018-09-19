import { ICompanySet } from "../edidb";

export default class CompanySettingsModel implements ICompanySet {
  public Company_ID: number;
  public YourCompany_Name: string;
  public YourCompany_DispName: string;
  public YourCompany_Qual: string;
  public YourCompany_ID: string;
  public YourCompany_Duns: number;
  public YourCompany_Add1: string;
  public YourCompany_Add2: string;
  public YourCompany_City: string;
  public YourCompany_State: string;
  public YourCompany_Zip: string;
  public YourCompany_Country: string;
  public YourCompany_BillName: string;
  public YourCompany_BillAdd1: string;
  public YourCompany_BillAdd2: string;
  public YourCompany_BillCity: string;
  public YourCompany_BillState: string;
  public YourCompany_BillZip: string;
  public YourCompany_BillCountry: string;
  public YourCompany_Contact: string;
  public YourCompany_Phone: string;
  public YourCompany_Email: string;
  public YourMan_ID: string;
  public YourContType: string;
  public Acct_Package: string;
  public CO_UseGroupID: boolean;
  public CO_Multi: boolean;
  public ACCTdirect: string;
  public EDIdirect: string;
  public vpEDIdirect: string;
  public vpSharedirect: string;
  public Exp_Date: Date;
  public SupExp: Date;
  public AcctVer: string;
  public vpEDIver: string;
  public dbVer: number;
  public DecSize: number;
  public AcctCompID: string;
  public ODBClogin: string;
  public ODBCpass: string;
  public DatabaseName: string;
  public vpEDIDatabaseName: string;
  public ServerIP: string;
  public vpEDIServerIP: string;
  public ServerPort: number;
  public UseISA: boolean;
  public UpdateASN: boolean;
  public VerifyAcctInvTotal: boolean;
  public UseOldMenu: boolean;
  public Licenses: number;
  public LinkDelDate: boolean;
  public OEM_Layout: string;
  public CanGstTax_ID: string;
  public FedTax_ID: string;
  public EurTax_ID: string;
  public Lang_ID: string;
  public Axa_UsePackingList: boolean;
  public PostItemSeq: number;
  public MapServer: boolean;
  public Primary_MapServer: string;
  public Backup_MapServer: string;
  public MacBarcodeInterface: boolean;
  public SecurityEnabled: boolean;
  public mod850: boolean;
  public mod852: boolean;
  public mod856: boolean;
  public mod940: boolean;
  public mod830: boolean;
  public mod862: boolean;
  public mod820: boolean;
  public mod870: boolean;
  public mod810i: boolean;
  public mod856i: boolean;
  public mod855: boolean;
  public mod753: boolean;
  public AxaptaExpandedPO: number;
  public AxaptaSalesTypes: string;
  public mWriteToUserFlds: boolean;
  public AuthType: number;
  public ConnString: string;
  public AcctPackageID: string;
  public TestServer: boolean;
  public AcctSqlObjOwnr: string;
  public AutoHoldDoc: boolean;
  public DocCaching: boolean;
  public WMSImportType: number;
  public wfUser: string;
  public eODBCpass: string;
  public PurgePass: string;
  public YourCompany_EDIContact: string;
  public YourCompany_EDIPhone: string;
  public YourCompany_EDIEmail: string;
  public WSAuthority: string;
  public WSResource: string;
  public WSEndpoint: string;
  public WSClientID: string;
  public WSLogin: string;
  public WSPassword: string;

  public constructor(init?: Partial<CompanySettingsModel>) {
    Object.assign(this, init);
  }
}
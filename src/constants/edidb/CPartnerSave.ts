import { IPartnerSave } from '../edidb'
export class CPartnerSave implements IPartnerSave {
    public TP_PartID:string = '';
    public DGID:string = '';
    public PartnerQual:string = '';
    public PartnerID:string = '';
    public GroupID:string = '';
    public Van_ID:string = '';
    public MapIn:string = '';
    public MapOut:string = '';
    public TestProdInd:string = '';
    public CipherKey:string = '';
    public FilenameLayout:string = '';
    public constructor(init?:Partial<CPartnerSave>) { Object.assign(this, init); }
}
export const IPartnerSave_TP_PartID_length = 30;
export const IPartnerSave_DGID_length = 5;
export const IPartnerSave_PartnerQual_length = 2;
export const IPartnerSave_PartnerID_length = 30;
export const IPartnerSave_GroupID_length = 30;
export const IPartnerSave_Van_ID_length = 10;
export const IPartnerSave_MapIn_length = 30;
export const IPartnerSave_MapOut_length = 30;
export const IPartnerSave_TestProdInd_length = 1;
export const IPartnerSave_CipherKey_length = 80;
export const IPartnerSave_FilenameLayout_length = 200;

export const kPartnerSave_TP_PartID="TP_PartID";
export const kPartnerSave_DGID="DGID";
export const kPartnerSave_PartnerQual="PartnerQual";
export const kPartnerSave_PartnerID="PartnerID";
export const kPartnerSave_GroupID="GroupID";
export const kPartnerSave_Van_ID="Van_ID";
export const kPartnerSave_MapIn="MapIn";
export const kPartnerSave_MapOut="MapOut";
export const kPartnerSave_TestProdInd="TestProdInd";
export const kPartnerSave_CipherKey="CipherKey";
export const kPartnerSave_FilenameLayout="FilenameLayout";

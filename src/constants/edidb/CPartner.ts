import { IPartner } from '../edidb'
export class CPartner implements IPartner {
    public TP_PartID:string = '';
    public DGID:string = '';
    public PartnerQual:string = '';
    public PartnerID:string = '';
    public GroupID:string = '';
    public Van_ID:string = '';
    public TestProdInd:string = '';
    public CipherKey:string = '';
    public constructor(init?:Partial<CPartner>) { Object.assign(this, init); }
}
export const IPartner_TP_PartID_length = 30;
export const IPartner_DGID_length = 5;
export const IPartner_PartnerQual_length = 2;
export const IPartner_PartnerID_length = 30;
export const IPartner_GroupID_length = 30;
export const IPartner_Van_ID_length = 10;
export const IPartner_TestProdInd_length = 1;
export const IPartner_CipherKey_length = 80;

export const kPartner_TP_PartID="TP_PartID";
export const kPartner_DGID="DGID";
export const kPartner_PartnerQual="PartnerQual";
export const kPartner_PartnerID="PartnerID";
export const kPartner_GroupID="GroupID";
export const kPartner_Van_ID="Van_ID";
export const kPartner_TestProdInd="TestProdInd";
export const kPartner_CipherKey="CipherKey";

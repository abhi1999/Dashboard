import { IPartnerDocGroup } from '../edidb'
export class CPartnerDocGroup implements IPartnerDocGroup {
    public Doc_Group:string = '';
    public TP_PartID:string = '';
    public DGID:string = '';
    public PartnerQual:string = '';
    public PartnerID:string = '';
    public GroupID:string = '';
    public Van_ID:string = '';
    public TestProdInd:string = '';
    public CipherKey:string = '';
    public constructor(init?:Partial<CPartnerDocGroup>) { Object.assign(this, init); }
}
export const IPartnerDocGroup_Doc_Group_length = 50;
export const IPartnerDocGroup_TP_PartID_length = 30;
export const IPartnerDocGroup_DGID_length = 5;
export const IPartnerDocGroup_PartnerQual_length = 2;
export const IPartnerDocGroup_PartnerID_length = 30;
export const IPartnerDocGroup_GroupID_length = 30;
export const IPartnerDocGroup_Van_ID_length = 10;
export const IPartnerDocGroup_TestProdInd_length = 1;
export const IPartnerDocGroup_CipherKey_length = 80;

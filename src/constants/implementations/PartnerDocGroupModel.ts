import { IPartnerDocGroup } from '../edidb';

export default class PartnerDocGroupModel implements IPartnerDocGroup {
    public Id:string;
    public Doc_Group: string;
    public TP_PartID: string;
    public DGID: string;
    public PartnerQual: string;
    public PartnerID: string;
    public GroupID: string;
    public Van_ID: string;
    public TestProdInd: string;
    public CipherKey: string;

    public constructor(init?:Partial<PartnerDocGroupModel>) {
        Object.assign(this, init);
    }
}
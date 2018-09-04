import { ITransObjectDocGroup } from '../edidb'
export class CTransObjectDocGroup implements ITransObjectDocGroup {
    public Doc_Group:string = '';
    public TOID:string = '';
    public DGID:string = '';
    public TransID:string = '';
    public TP_PartID:string = '';
    public TDocName:string = '';
    public FilenameLayout:string = '';
    public PackageSeparately:boolean;
    public UseControlNums:boolean;
    public constructor(init?:Partial<CTransObjectDocGroup>) { Object.assign(this, init); }
}
export const ITransObjectDocGroup_Doc_Group_length = 50;
export const ITransObjectDocGroup_DGID_length = 5;
export const ITransObjectDocGroup_TransID_length = 50;
export const ITransObjectDocGroup_TP_PartID_length = 30;
export const ITransObjectDocGroup_TDocName_length = 80;
export const ITransObjectDocGroup_FilenameLayout_length = 200;

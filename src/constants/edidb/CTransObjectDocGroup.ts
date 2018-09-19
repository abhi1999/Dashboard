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

export const kTransObjectDocGroup_Doc_Group="Doc_Group";
export const kTransObjectDocGroup_TOID="TOID";
export const kTransObjectDocGroup_DGID="DGID";
export const kTransObjectDocGroup_TransID="TransID";
export const kTransObjectDocGroup_TP_PartID="TP_PartID";
export const kTransObjectDocGroup_TDocName="TDocName";
export const kTransObjectDocGroup_FilenameLayout="FilenameLayout";
export const kTransObjectDocGroup_PackageSeparately="PackageSeparately";
export const kTransObjectDocGroup_UseControlNums="UseControlNums";

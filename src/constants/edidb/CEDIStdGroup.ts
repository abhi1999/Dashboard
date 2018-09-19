import { IEDIStdGroup } from '../edidb'
export class CEDIStdGroup implements IEDIStdGroup {
    public STDID:string = '';
    public DGID:string = '';
    public Func_Group:string = '';
    public constructor(init?:Partial<CEDIStdGroup>) { Object.assign(this, init); }
}
export const IEDIStdGroup_STDID_length = 20;
export const IEDIStdGroup_DGID_length = 5;
export const IEDIStdGroup_Func_Group_length = 20;

export const kEDIStdGroup_STDID="STDID";
export const kEDIStdGroup_DGID="DGID";
export const kEDIStdGroup_Func_Group="Func_Group";

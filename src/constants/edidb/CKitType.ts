import { IKitType } from '../edidb'
export class CKitType implements IKitType {
    public KitTypeID:number = 0;
    public KitTypeDesc:string = '';
    public constructor(init?:Partial<CKitType>) { Object.assign(this, init); }
}
export const IKitType_KitTypeDesc_length = 20;

export const kKitType_KitTypeID="KitTypeID";
export const kKitType_KitTypeDesc="KitTypeDesc";

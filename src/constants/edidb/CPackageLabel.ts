import { IPackageLabel } from '../edidb'
export class CPackageLabel implements IPackageLabel {
    public PKG_ID:string = '';
    public TP_PartID:string = '';
    public Label_ID:string = '';
    public PLID:string = '';
    public constructor(init?:Partial<CPackageLabel>) { Object.assign(this, init); }
}
export const IPackageLabel_PKG_ID_length = 10;
export const IPackageLabel_TP_PartID_length = 30;
export const IPackageLabel_Label_ID_length = 20;

export const kPackageLabel_PKG_ID="PKG_ID";
export const kPackageLabel_TP_PartID="TP_PartID";
export const kPackageLabel_Label_ID="Label_ID";
export const kPackageLabel_PLID="PLID";

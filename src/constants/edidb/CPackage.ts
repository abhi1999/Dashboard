import { IPackage } from '../edidb'
export class CPackage implements IPackage {
    public PKG_ID:string = '';
    public PKG_Desc:string = '';
    public PKG_EDI_Qual:string = '';
    public PKG_Cube_Uom:string = '';
    public PKG_Length:number = 0;
    public PKG_Width:number = 0;
    public PKG_Height:number = 0;
    public PKG_Tare_Wt:number = 0;
    public PKG_Tare_Wt_Uom:string = '';
    public PKG_Units_Per_Parent:number = 0;
    public Def_Pack_Level:number = 0;
    public PKG_Returnable:boolean;
    public PKG_Price:number = 0;
    public PKG_Type:number = 0;
    public PKG_AppIdentifier:string = '';
    public PKG_ExtDigit:number = 0;
    public Label_ID:string = '';
    public constructor(init?:Partial<CPackage>) { Object.assign(this, init); }
}
export const IPackage_PKG_ID_length = 10;
export const IPackage_PKG_Desc_length = 50;
export const IPackage_PKG_EDI_Qual_length = 10;
export const IPackage_PKG_Cube_Uom_length = 2;
export const IPackage_PKG_Tare_Wt_Uom_length = 2;
export const IPackage_PKG_AppIdentifier_length = 2;
export const IPackage_Label_ID_length = 20;

export const kPackage_PKG_ID="PKG_ID";
export const kPackage_PKG_Desc="PKG_Desc";
export const kPackage_PKG_EDI_Qual="PKG_EDI_Qual";
export const kPackage_PKG_Cube_Uom="PKG_Cube_Uom";
export const kPackage_PKG_Length="PKG_Length";
export const kPackage_PKG_Width="PKG_Width";
export const kPackage_PKG_Height="PKG_Height";
export const kPackage_PKG_Tare_Wt="PKG_Tare_Wt";
export const kPackage_PKG_Tare_Wt_Uom="PKG_Tare_Wt_Uom";
export const kPackage_PKG_Units_Per_Parent="PKG_Units_Per_Parent";
export const kPackage_Def_Pack_Level="Def_Pack_Level";
export const kPackage_PKG_Returnable="PKG_Returnable";
export const kPackage_PKG_Price="PKG_Price";
export const kPackage_PKG_Type="PKG_Type";
export const kPackage_PKG_AppIdentifier="PKG_AppIdentifier";
export const kPackage_PKG_ExtDigit="PKG_ExtDigit";
export const kPackage_Label_ID="Label_ID";

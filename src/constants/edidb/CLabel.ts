import { ILabel } from '../edidb'
export class CLabel implements ILabel {
    public Label_ID:string = '';
    public Object_ID:number = 0;
    public ObjType:string = '';
    public ObjName:string = '';
    public ObjValue:string = '';
    public ObjFontName:string = '';
    public ObjFontSize:number = 0;
    public ObjFontBold:boolean;
    public ObjLeft:number = 0;
    public ObjTop:number = 0;
    public ObjWidth:number = 0;
    public ObjHeight:number = 0;
    public bcObjName:string = '';
    public bcCaption:string = '';
    public bcType:number = 0;
    public bcHasText:boolean;
    public bcPadding:string = '';
    public bcPrepend:string = '';
    public bcShowPrepend:boolean;
    public bcRotation:number = 0;
    public constructor(init?:Partial<CLabel>) { Object.assign(this, init); }
}
export const ILabel_Label_ID_length = 20;
export const ILabel_ObjType_length = 50;
export const ILabel_ObjName_length = 50;
export const ILabel_ObjValue_length = 50;
export const ILabel_ObjFontName_length = 50;
export const ILabel_bcObjName_length = 50;
export const ILabel_bcCaption_length = 50;
export const ILabel_bcPadding_length = 50;
export const ILabel_bcPrepend_length = 50;

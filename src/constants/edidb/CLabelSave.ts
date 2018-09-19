import { ILabelSave } from '../edidb'
export class CLabelSave implements ILabelSave {
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
    public constructor(init?:Partial<CLabelSave>) { Object.assign(this, init); }
}
export const ILabelSave_Label_ID_length = 20;
export const ILabelSave_ObjType_length = 50;
export const ILabelSave_ObjName_length = 50;
export const ILabelSave_ObjValue_length = 256;
export const ILabelSave_ObjFontName_length = 50;
export const ILabelSave_bcObjName_length = 50;
export const ILabelSave_bcCaption_length = 50;
export const ILabelSave_bcPadding_length = 50;
export const ILabelSave_bcPrepend_length = 50;

export const kLabelSave_Label_ID="Label_ID";
export const kLabelSave_Object_ID="Object_ID";
export const kLabelSave_ObjType="ObjType";
export const kLabelSave_ObjName="ObjName";
export const kLabelSave_ObjValue="ObjValue";
export const kLabelSave_ObjFontName="ObjFontName";
export const kLabelSave_ObjFontSize="ObjFontSize";
export const kLabelSave_ObjFontBold="ObjFontBold";
export const kLabelSave_ObjLeft="ObjLeft";
export const kLabelSave_ObjTop="ObjTop";
export const kLabelSave_ObjWidth="ObjWidth";
export const kLabelSave_ObjHeight="ObjHeight";
export const kLabelSave_bcObjName="bcObjName";
export const kLabelSave_bcCaption="bcCaption";
export const kLabelSave_bcType="bcType";
export const kLabelSave_bcHasText="bcHasText";
export const kLabelSave_bcPadding="bcPadding";
export const kLabelSave_bcPrepend="bcPrepend";
export const kLabelSave_bcShowPrepend="bcShowPrepend";
export const kLabelSave_bcRotation="bcRotation";

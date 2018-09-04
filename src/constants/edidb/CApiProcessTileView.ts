import { IApiProcessTileView } from '../edidb'
export class CApiProcessTileView implements IApiProcessTileView {
    public ShortCutID:number = 0;
    public Title:string = '';
    public GroupName:string = '';
    public ControlID:number = 0;
    public ControlName:string = '';
    public MethodCall:string = '';
    public func_code:string = '';
    public MethodParams:string = '';
    public Type:string = '';
    public BeginGroup:boolean;
    public GroupColor:string = '';
    public GroupOrder:number = 0;
    public ControlOrder:number = 0;
    public constructor(init?:Partial<CApiProcessTileView>) { Object.assign(this, init); }
}
export const IApiProcessTileView_Title_length = 200;
export const IApiProcessTileView_GroupName_length = 200;
export const IApiProcessTileView_ControlName_length = 200;
export const IApiProcessTileView_MethodCall_length = 500;
export const IApiProcessTileView_func_code_length = 3;
export const IApiProcessTileView_MethodParams_length = 1000;
export const IApiProcessTileView_Type_length = 50;
export const IApiProcessTileView_GroupColor_length = 50;

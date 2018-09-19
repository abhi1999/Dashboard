import { IApiTileProcess } from '../edidb'
export class CApiTileProcess implements IApiTileProcess {
    public quantity:number = 0;
    public caption:string = '';
    public GroupTile:string = '';
    public GroupName:string = '';
    public ControlID:number = 0;
    public ControlName:string = '';
    public MethodCall:string = '';
    public func_code:string = '';
    public MethodParams:string = '';
    public Type:string = '';
    public BeginGroup:boolean;
    public GroupColor:string = '';
    public ImageFile:string = '';
    public GroupEnabled:boolean;
    public GroupVisible:boolean;
    public ControlEnabled:boolean;
    public ControlVisible:boolean;
    public IsFavorite:number = 0;
    public constructor(init?:Partial<CApiTileProcess>) { Object.assign(this, init); }
}
export const IApiTileProcess_caption_length = 200;
export const IApiTileProcess_GroupTile_length = 200;
export const IApiTileProcess_GroupName_length = 200;
export const IApiTileProcess_ControlName_length = 200;
export const IApiTileProcess_MethodCall_length = 500;
export const IApiTileProcess_func_code_length = 3;
export const IApiTileProcess_MethodParams_length = 1000;
export const IApiTileProcess_Type_length = 50;
export const IApiTileProcess_GroupColor_length = 50;
export const IApiTileProcess_ImageFile_length = 500;

export const kApiTileProcess_quantity="quantity";
export const kApiTileProcess_caption="caption";
export const kApiTileProcess_GroupTile="GroupTile";
export const kApiTileProcess_GroupName="GroupName";
export const kApiTileProcess_ControlID="ControlID";
export const kApiTileProcess_ControlName="ControlName";
export const kApiTileProcess_MethodCall="MethodCall";
export const kApiTileProcess_func_code="func_code";
export const kApiTileProcess_MethodParams="MethodParams";
export const kApiTileProcess_Type="Type";
export const kApiTileProcess_BeginGroup="BeginGroup";
export const kApiTileProcess_GroupColor="GroupColor";
export const kApiTileProcess_ImageFile="ImageFile";
export const kApiTileProcess_GroupEnabled="GroupEnabled";
export const kApiTileProcess_GroupVisible="GroupVisible";
export const kApiTileProcess_ControlEnabled="ControlEnabled";
export const kApiTileProcess_ControlVisible="ControlVisible";
export const kApiTileProcess_IsFavorite="IsFavorite";

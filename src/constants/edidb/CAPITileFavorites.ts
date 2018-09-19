import { IAPITileFavorites } from '../edidb'
export class CAPITileFavorites implements IAPITileFavorites {
    public quantity:number = 0;
    public Caption:string = '';
    public GroupTile:string = '';
    public GroupName:string = '';
    public ControlID:number = 0;
    public ControlName:string = '';
    public MethodCall:string = '';
    public ImageFile:string = '';
    public func_code:string = '';
    public MethodParams:string = '';
    public Type:string = '';
    public BeginGroup:boolean;
    public GroupColor:string = '';
    public FavGroupID:number = 0;
    public FavID:number = 0;
    public FavGroupOrder:number = 0;
    public FavOrder:number = 0;
    public ControlEnabled:boolean;
    public ControlVisible:boolean;
    public OrigCaption:string = '';
    public IsFavorite:number = 0;
    public constructor(init?:Partial<CAPITileFavorites>) { Object.assign(this, init); }
}
export const IAPITileFavorites_Caption_length = 100;
export const IAPITileFavorites_GroupTile_length = 9;
export const IAPITileFavorites_GroupName_length = 50;
export const IAPITileFavorites_ControlName_length = 200;
export const IAPITileFavorites_MethodCall_length = 500;
export const IAPITileFavorites_ImageFile_length = 500;
export const IAPITileFavorites_func_code_length = 3;
export const IAPITileFavorites_MethodParams_length = 1000;
export const IAPITileFavorites_Type_length = 50;
export const IAPITileFavorites_GroupColor_length = 50;
export const IAPITileFavorites_OrigCaption_length = 404;

export const kAPITileFavorites_quantity="quantity";
export const kAPITileFavorites_Caption="Caption";
export const kAPITileFavorites_GroupTile="GroupTile";
export const kAPITileFavorites_GroupName="GroupName";
export const kAPITileFavorites_ControlID="ControlID";
export const kAPITileFavorites_ControlName="ControlName";
export const kAPITileFavorites_MethodCall="MethodCall";
export const kAPITileFavorites_ImageFile="ImageFile";
export const kAPITileFavorites_func_code="func_code";
export const kAPITileFavorites_MethodParams="MethodParams";
export const kAPITileFavorites_Type="Type";
export const kAPITileFavorites_BeginGroup="BeginGroup";
export const kAPITileFavorites_GroupColor="GroupColor";
export const kAPITileFavorites_FavGroupID="FavGroupID";
export const kAPITileFavorites_FavID="FavID";
export const kAPITileFavorites_FavGroupOrder="FavGroupOrder";
export const kAPITileFavorites_FavOrder="FavOrder";
export const kAPITileFavorites_ControlEnabled="ControlEnabled";
export const kAPITileFavorites_ControlVisible="ControlVisible";
export const kAPITileFavorites_OrigCaption="OrigCaption";
export const kAPITileFavorites_IsFavorite="IsFavorite";

import { IAppFavoritesGrp } from '../edidb'
export class CAppFavoritesGrp implements IAppFavoritesGrp {
    public FavGroupID:number = 0;
    public FavUser:string = '';
    public FavGroup:string = '';
    public FavGroupOrder:number = 0;
    public FavGroupColor:string = '';
    public CreatedDate:Date;
    public FavDefGroup:boolean;
    public constructor(init?:Partial<CAppFavoritesGrp>) { Object.assign(this, init); }
}
export const IAppFavoritesGrp_FavUser_length = 50;
export const IAppFavoritesGrp_FavGroup_length = 50;
export const IAppFavoritesGrp_FavGroupColor_length = 50;

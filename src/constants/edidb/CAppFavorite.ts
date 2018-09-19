import { IAppFavorite } from '../edidb'
export class CAppFavorite implements IAppFavorite {
    public FavID:number = 0;
    public FavUser:string = '';
    public FavControlID:number = 0;
    public FavOrder:number = 0;
    public FavGroupID:number = 0;
    public FavOverrideCaption:string = '';
    public CreatedDate:Date;
    public constructor(init?:Partial<CAppFavorite>) { Object.assign(this, init); }
}
export const IAppFavorite_FavUser_length = 50;
export const IAppFavorite_FavOverrideCaption_length = 100;

export const kAppFavorite_FavID="FavID";
export const kAppFavorite_FavUser="FavUser";
export const kAppFavorite_FavControlID="FavControlID";
export const kAppFavorite_FavOrder="FavOrder";
export const kAppFavorite_FavGroupID="FavGroupID";
export const kAppFavorite_FavOverrideCaption="FavOverrideCaption";
export const kAppFavorite_CreatedDate="CreatedDate";

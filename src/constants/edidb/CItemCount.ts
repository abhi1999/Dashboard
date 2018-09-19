import { IItemCount } from '../edidb'
export class CItemCount implements IItemCount {
    public Count:number = 0;
    public constructor(init?:Partial<CItemCount>) { Object.assign(this, init); }
}
export const kItemCount_Count="Count";

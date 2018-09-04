import { IGetPackageLabelsResult } from '../edidb'
export class CGetPackageLabelsResult implements IGetPackageLabelsResult {
    public pkg_id:string = '';
    public tp_partid:string = '';
    public label_id:string = '';
    public constructor(init?:Partial<CGetPackageLabelsResult>) { Object.assign(this, init); }
}
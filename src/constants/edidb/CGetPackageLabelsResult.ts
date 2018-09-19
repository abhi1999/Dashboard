import { IGetPackageLabelsResult } from '../edidb'
export class CGetPackageLabelsResult implements IGetPackageLabelsResult {
    public pkg_id:string = '';
    public tp_partid:string = '';
    public label_id:string = '';
    public constructor(init?:Partial<CGetPackageLabelsResult>) { Object.assign(this, init); }
}
export const kGetPackageLabelsResult_pkg_id="pkg_id";
export const kGetPackageLabelsResult_tp_partid="tp_partid";
export const kGetPackageLabelsResult_label_id="label_id";

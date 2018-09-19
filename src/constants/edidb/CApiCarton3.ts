import { IApiCarton3 } from '../edidb'
export class CApiCarton3 implements IApiCarton3 {
    public cnt:number = 0;
    public pkgName:string = '';
    public constructor(init?:Partial<CApiCarton3>) { Object.assign(this, init); }
}
export const IApiCarton3_pkgName_length = 50;

export const kApiCarton3_cnt="cnt";
export const kApiCarton3_pkgName="pkgName";

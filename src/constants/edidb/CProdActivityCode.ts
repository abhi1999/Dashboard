import { IProdActivityCode } from '../edidb'
export class CProdActivityCode implements IProdActivityCode {
    public ZA01:string = '';
    public ZADesc:string = '';
    public constructor(init?:Partial<CProdActivityCode>) { Object.assign(this, init); }
}
export const IProdActivityCode_ZA01_length = 3;
export const IProdActivityCode_ZADesc_length = 40;

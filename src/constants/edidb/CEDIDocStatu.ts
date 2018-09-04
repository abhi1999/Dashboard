import { IEDIDocStatu } from '../edidb'
export class CEDIDocStatu implements IEDIDocStatu {
    public UDID:string = '';
    public Direction:string = '';
    public Status:string = '';
    public constructor(init?:Partial<CEDIDocStatu>) { Object.assign(this, init); }
}
export const IEDIDocStatu_Direction_length = 1;
export const IEDIDocStatu_Status_length = 1;

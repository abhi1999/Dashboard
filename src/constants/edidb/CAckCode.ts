import { IAckCode } from '../edidb'
export class CAckCode implements IAckCode {
    public AckID:string = '';
    public AckDesc:string = '';
    public constructor(init?:Partial<CAckCode>) { Object.assign(this, init); }
}
export const IAckCode_AckID_length = 1;
export const IAckCode_AckDesc_length = 10;

export const kAckCode_AckID="AckID";
export const kAckCode_AckDesc="AckDesc";

import { ITLELog } from '../edidb'
export class CTLELog implements ITLELog {
    public TLELGID:number = 0;
    public DataType:string = '';
    public DataKey:string = '';
    public Direction:string = '';
    public RelDataType:string = '';
    public RelDirection:string = '';
    public CreatedDate:Date;
    public constructor(init?:Partial<CTLELog>) { Object.assign(this, init); }
}
export const ITLELog_DataType_length = 50;
export const ITLELog_DataKey_length = 50;
export const ITLELog_Direction_length = 1;
export const ITLELog_RelDataType_length = 50;
export const ITLELog_RelDirection_length = 1;

export const kTLELog_TLELGID="TLELGID";
export const kTLELog_DataType="DataType";
export const kTLELog_DataKey="DataKey";
export const kTLELog_Direction="Direction";
export const kTLELog_RelDataType="RelDataType";
export const kTLELog_RelDirection="RelDirection";
export const kTLELog_CreatedDate="CreatedDate";

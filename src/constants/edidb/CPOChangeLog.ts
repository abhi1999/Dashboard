import { IPOChangeLog } from '../edidb'
export class CPOChangeLog implements IPOChangeLog {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public ShipTo_ID:string = '';
    public PID:string = '';
    public LogDate:Date;
    public DataArea:string = '';
    public DataAction:string = '';
    public DataValue:string = '';
    public POCID:string = '';
    public constructor(init?:Partial<CPOChangeLog>) { Object.assign(this, init); }
}
export const IPOChangeLog_PO1_LineNo_length = 11;
export const IPOChangeLog_ShipTo_ID_length = 80;
export const IPOChangeLog_DataArea_length = 10;
export const IPOChangeLog_DataAction_length = 80;
export const IPOChangeLog_DataValue_length = 80;

export const kPOChangeLog_PO_ID="PO_ID";
export const kPOChangeLog_PO1_LineNo="PO1_LineNo";
export const kPOChangeLog_ShipTo_ID="ShipTo_ID";
export const kPOChangeLog_PID="PID";
export const kPOChangeLog_LogDate="LogDate";
export const kPOChangeLog_DataArea="DataArea";
export const kPOChangeLog_DataAction="DataAction";
export const kPOChangeLog_DataValue="DataValue";
export const kPOChangeLog_POCID="POCID";

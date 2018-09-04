import { IApiTopErrorLog } from '../edidb'
export class CApiTopErrorLog implements IApiTopErrorLog {
    public LogProcess:string = '';
    public Count:number = 0;
    public constructor(init?:Partial<CApiTopErrorLog>) { Object.assign(this, init); }
}
export const IApiTopErrorLog_LogProcess_length = 50;

import { IUploadLog } from '../edidb'
export class CUploadLog implements IUploadLog {
    public UploadDate:Date;
    public UploadFile:string = '';
    public FileLength:number = 0;
    public UploadLength:number = 0;
    public HashCode:string = '';
    public UploadStatus:number = 0;
    public PID:string = '';
    public ULID:string = '';
    public constructor(init?:Partial<CUploadLog>) { Object.assign(this, init); }
}
export const IUploadLog_UploadFile_length = 400;
export const IUploadLog_HashCode_length = 16;

export const kUploadLog_UploadDate="UploadDate";
export const kUploadLog_UploadFile="UploadFile";
export const kUploadLog_FileLength="FileLength";
export const kUploadLog_UploadLength="UploadLength";
export const kUploadLog_HashCode="HashCode";
export const kUploadLog_UploadStatus="UploadStatus";
export const kUploadLog_PID="PID";
export const kUploadLog_ULID="ULID";

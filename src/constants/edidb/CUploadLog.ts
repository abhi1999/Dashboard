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

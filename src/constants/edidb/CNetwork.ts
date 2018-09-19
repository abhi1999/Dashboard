import { INetwork } from '../edidb'
export class CNetwork implements INetwork {
    public Van_ID:string = '';
    public VanExt:string = '';
    public VanFTPsite:string = '';
    public VanMailbox:string = '';
    public VanPass:string = '';
    public VanPassive:boolean;
    public VanBinary:boolean;
    public VanSdown:string = '';
    public VanAppendCRLF:number = 0;
    public VanSdir:string = '';
    public VanSup:string = '';
    public VanType:number = 0;
    public UploadFilePattern:string = '';
    public VanConfig:string = '';
    public constructor(init?:Partial<CNetwork>) { Object.assign(this, init); }
}
export const INetwork_Van_ID_length = 10;
export const INetwork_VanExt_length = 3;
export const INetwork_VanFTPsite_length = 75;
export const INetwork_VanMailbox_length = 80;
export const INetwork_VanPass_length = 80;
export const INetwork_VanSdown_length = 500;
export const INetwork_VanSdir_length = 500;
export const INetwork_VanSup_length = 500;
export const INetwork_UploadFilePattern_length = 50;
export const INetwork_VanConfig_length = 50;

export const kNetwork_Van_ID="Van_ID";
export const kNetwork_VanExt="VanExt";
export const kNetwork_VanFTPsite="VanFTPsite";
export const kNetwork_VanMailbox="VanMailbox";
export const kNetwork_VanPass="VanPass";
export const kNetwork_VanPassive="VanPassive";
export const kNetwork_VanBinary="VanBinary";
export const kNetwork_VanSdown="VanSdown";
export const kNetwork_VanAppendCRLF="VanAppendCRLF";
export const kNetwork_VanSdir="VanSdir";
export const kNetwork_VanSup="VanSup";
export const kNetwork_VanType="VanType";
export const kNetwork_UploadFilePattern="UploadFilePattern";
export const kNetwork_VanConfig="VanConfig";

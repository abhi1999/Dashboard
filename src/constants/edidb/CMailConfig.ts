import { IMailConfig } from '../edidb'
export class CMailConfig implements IMailConfig {
    public Mail_ID:number = 0;
    public Mail_SMTP_Server:string = '';
    public Mail_SMTP_Port:number = 0;
    public Mail_SMTP_AuthReq:boolean;
    public Mail_SMTP_User:string = '';
    public Mail_SMTP_Pass:string = '';
    public Mail_To:string = '';
    public Mail_Cc:string = '';
    public Mail_Bcc:string = '';
    public Mail_From:string = '';
    public Mail_Notify_Start:Date;
    public Mail_Notify_Stop:Date;
    public Mail_EnableSSL:boolean;
    public constructor(init?:Partial<CMailConfig>) { Object.assign(this, init); }
}
export const IMailConfig_Mail_SMTP_Server_length = 50;
export const IMailConfig_Mail_SMTP_User_length = 50;
export const IMailConfig_Mail_SMTP_Pass_length = 50;
export const IMailConfig_Mail_To_length = 80;
export const IMailConfig_Mail_Cc_length = 80;
export const IMailConfig_Mail_Bcc_length = 80;
export const IMailConfig_Mail_From_length = 80;

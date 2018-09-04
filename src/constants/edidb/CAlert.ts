import { IAlert } from '../edidb'
export class CAlert implements IAlert {
    public AlertID:string = '';
    public AlertMessage:string = '';
    public AlertDate:Date;
    public AlertThreshold:number = 0;
    public AlertRowFont:string = '';
    public Quantity:number = 0;
    public Caption:string = '';
    public GroupID:number = 0;
    public constructor(init?:Partial<CAlert>) { Object.assign(this, init); }
}
export const IAlert_AlertID_length = 30;
export const IAlert_AlertMessage_length = 80;
export const IAlert_AlertRowFont_length = 10;
export const IAlert_Caption_length = 100;

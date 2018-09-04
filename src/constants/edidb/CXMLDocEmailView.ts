import { IXMLDocEmailView } from '../edidb'
export class CXMLDocEmailView implements IXMLDocEmailView {
    public ID:number = 0;
    public Partner:string = '';
    public Document_Group:string = '';
    public Reference:string = '';
    public Status:string = '';
    public Direction:string = '';
    public Export_Date:Date;
    public GCN:string = '';
    public constructor(init?:Partial<CXMLDocEmailView>) { Object.assign(this, init); }
}
export const IXMLDocEmailView_Partner_length = 30;
export const IXMLDocEmailView_Document_Group_length = 50;
export const IXMLDocEmailView_Reference_length = 1000;
export const IXMLDocEmailView_Status_length = 500;
export const IXMLDocEmailView_Direction_length = 500;
export const IXMLDocEmailView_GCN_length = 50;

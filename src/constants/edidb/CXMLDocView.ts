import { IXMLDocView } from '../edidb'
export class CXMLDocView implements IXMLDocView {
    public ID:number = 0;
    public Partner:string = '';
    public Document_Group:string = '';
    public Reference:string = '';
    public Status:string = '';
    public Direction:string = '';
    public Export_Date:Date;
    public GCN:string = '';
    public constructor(init?:Partial<CXMLDocView>) { Object.assign(this, init); }
}
export const IXMLDocView_Partner_length = 30;
export const IXMLDocView_Document_Group_length = 50;
export const IXMLDocView_Reference_length = 1000;
export const IXMLDocView_Status_length = 500;
export const IXMLDocView_Direction_length = 500;
export const IXMLDocView_GCN_length = 50;

export const kXMLDocView_ID="ID";
export const kXMLDocView_Partner="Partner";
export const kXMLDocView_Document_Group="Document_Group";
export const kXMLDocView_Reference="Reference";
export const kXMLDocView_Status="Status";
export const kXMLDocView_Direction="Direction";
export const kXMLDocView_Export_Date="Export_Date";
export const kXMLDocView_GCN="GCN";

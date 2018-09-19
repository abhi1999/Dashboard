import { IXMLDocDirection } from '../edidb'
export class CXMLDocDirection implements IXMLDocDirection {
    public XMLID:string = '';
    public XMLText:string = '';
    public Direction:string = '';
    public Misc_ID:number = 0;
    public Config:boolean;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public DGID:string = '';
    public Doc_Group:string = '';
    public XMLRef:string = '';
    public constructor(init?:Partial<CXMLDocDirection>) { Object.assign(this, init); }
}
export const IXMLDocDirection_Direction_length = 1;
export const IXMLDocDirection_TP_PartID_length = 30;
export const IXMLDocDirection_TP_Name_length = 30;
export const IXMLDocDirection_DGID_length = 5;
export const IXMLDocDirection_Doc_Group_length = 50;
export const IXMLDocDirection_XMLRef_length = 1000;

export const kXMLDocDirection_XMLID="XMLID";
export const kXMLDocDirection_XMLText="XMLText";
export const kXMLDocDirection_Direction="Direction";
export const kXMLDocDirection_Misc_ID="Misc_ID";
export const kXMLDocDirection_Config="Config";
export const kXMLDocDirection_TP_PartID="TP_PartID";
export const kXMLDocDirection_TP_Name="TP_Name";
export const kXMLDocDirection_DGID="DGID";
export const kXMLDocDirection_Doc_Group="Doc_Group";
export const kXMLDocDirection_XMLRef="XMLRef";

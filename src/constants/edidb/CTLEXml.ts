import { ITLEXml } from '../edidb'
export class CTLEXml implements ITLEXml {
    public TLEXID:number = 0;
    public TP_PartID:string = '';
    public DataType:string = '';
    public Direction:string = '';
    public RelDataType:string = '';
    public RelDirection:string = '';
    public XPathIndex:number = 0;
    public XPath:string = '';
    public Active:boolean;
    public Restricted:boolean;
    public constructor(init?:Partial<CTLEXml>) { Object.assign(this, init); }
}
export const ITLEXml_TP_PartID_length = 50;
export const ITLEXml_DataType_length = 50;
export const ITLEXml_Direction_length = 1;
export const ITLEXml_RelDataType_length = 50;
export const ITLEXml_RelDirection_length = 1;
export const ITLEXml_XPath_length = 250;

export const kTLEXml_TLEXID="TLEXID";
export const kTLEXml_TP_PartID="TP_PartID";
export const kTLEXml_DataType="DataType";
export const kTLEXml_Direction="Direction";
export const kTLEXml_RelDataType="RelDataType";
export const kTLEXml_RelDirection="RelDirection";
export const kTLEXml_XPathIndex="XPathIndex";
export const kTLEXml_XPath="XPath";
export const kTLEXml_Active="Active";
export const kTLEXml_Restricted="Restricted";

import { ICarbonCopy } from '../edidb'
export class CCarbonCopy implements ICarbonCopy {
    public CCID:string = '';
    public TP_PartID:string = '';
    public CC_PartQ:string = '';
    public CC_PartID:string = '';
    public CC_PartGID:string = '';
    public Direction:string = '';
    public DGID:string = '';
    public Van_ID:string = '';
    public FilterSegment:string = '';
    public FilterQualElemNo:string = '';
    public FilterQualElemValue:string = '';
    public FilterElemNo:string = '';
    public FilterElemValue:string = '';
    public CC_Type:number = 0;
    public CC_SenderQ:string = '';
    public CC_SenderID:string = '';
    public CC_SenderGID:string = '';
    public constructor(init?:Partial<CCarbonCopy>) { Object.assign(this, init); }
}
export const ICarbonCopy_TP_PartID_length = 30;
export const ICarbonCopy_CC_PartQ_length = 2;
export const ICarbonCopy_CC_PartID_length = 30;
export const ICarbonCopy_CC_PartGID_length = 30;
export const ICarbonCopy_Direction_length = 1;
export const ICarbonCopy_DGID_length = 5;
export const ICarbonCopy_Van_ID_length = 50;
export const ICarbonCopy_FilterSegment_length = 10;
export const ICarbonCopy_FilterQualElemNo_length = 10;
export const ICarbonCopy_FilterQualElemValue_length = 50;
export const ICarbonCopy_FilterElemNo_length = 10;
export const ICarbonCopy_FilterElemValue_length = 500;
export const ICarbonCopy_CC_SenderQ_length = 2;
export const ICarbonCopy_CC_SenderID_length = 30;
export const ICarbonCopy_CC_SenderGID_length = 30;

export const kCarbonCopy_CCID="CCID";
export const kCarbonCopy_TP_PartID="TP_PartID";
export const kCarbonCopy_CC_PartQ="CC_PartQ";
export const kCarbonCopy_CC_PartID="CC_PartID";
export const kCarbonCopy_CC_PartGID="CC_PartGID";
export const kCarbonCopy_Direction="Direction";
export const kCarbonCopy_DGID="DGID";
export const kCarbonCopy_Van_ID="Van_ID";
export const kCarbonCopy_FilterSegment="FilterSegment";
export const kCarbonCopy_FilterQualElemNo="FilterQualElemNo";
export const kCarbonCopy_FilterQualElemValue="FilterQualElemValue";
export const kCarbonCopy_FilterElemNo="FilterElemNo";
export const kCarbonCopy_FilterElemValue="FilterElemValue";
export const kCarbonCopy_CC_Type="CC_Type";
export const kCarbonCopy_CC_SenderQ="CC_SenderQ";
export const kCarbonCopy_CC_SenderID="CC_SenderID";
export const kCarbonCopy_CC_SenderGID="CC_SenderGID";

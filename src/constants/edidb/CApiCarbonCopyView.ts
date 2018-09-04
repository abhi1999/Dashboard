import { IApiCarbonCopyView } from '../edidb'
export class CApiCarbonCopyView implements IApiCarbonCopyView {
    public CCID:string = '';
    public TP_PartID:string = '';
    public TP_Name:string = '';
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
    public constructor(init?:Partial<CApiCarbonCopyView>) { Object.assign(this, init); }
}
export const IApiCarbonCopyView_TP_PartID_length = 30;
export const IApiCarbonCopyView_TP_Name_length = 30;
export const IApiCarbonCopyView_CC_PartQ_length = 2;
export const IApiCarbonCopyView_CC_PartID_length = 30;
export const IApiCarbonCopyView_CC_PartGID_length = 30;
export const IApiCarbonCopyView_Direction_length = 1;
export const IApiCarbonCopyView_DGID_length = 5;
export const IApiCarbonCopyView_Van_ID_length = 50;
export const IApiCarbonCopyView_FilterSegment_length = 10;
export const IApiCarbonCopyView_FilterQualElemNo_length = 10;
export const IApiCarbonCopyView_FilterQualElemValue_length = 50;
export const IApiCarbonCopyView_FilterElemNo_length = 10;
export const IApiCarbonCopyView_FilterElemValue_length = 500;
export const IApiCarbonCopyView_CC_SenderQ_length = 2;
export const IApiCarbonCopyView_CC_SenderID_length = 30;
export const IApiCarbonCopyView_CC_SenderGID_length = 30;

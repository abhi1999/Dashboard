import { IGetItemChunkResult } from '../edidb'
export class CGetItemChunkResult implements IGetItemChunkResult {
    public LOCATION_IN_RECORD_SET:number = 0;
    public PAGE_NUMBER:number = 0;
    public Int_Item_No:string = '';
    public Item_Desc:string = '';
    public UPC:string = '';
    public Def_Pack_Qty:number = 0;
    public Item_Wt:number = 0;
    public Item_Um:string = '';
    public Item_UOM:string = '';
    public EDI_UOM:string = '';
    public RetailPrice:number = 0;
    public SellingPrice:number = 0;
    public SAC_Flag:boolean;
    public SAC_Qual:string = '';
    public Cube_Length:number = 0;
    public Cube_Width:number = 0;
    public Cube_Height:number = 0;
    public Cube_Qty:number = 0;
    public Cube_UOM:string = '';
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public Item_rfid:boolean;
    public locid:string = '';
    public PackingClass:string = '';
    public Item_Alt_No:string = '';
    public Item_Config:string = '';
    public Item_Size:string = '';
    public Item_Color:string = '';
    public Frt_Code:string = '';
    public GTIN:string = '';
    public EAN:string = '';
    public constructor(init?:Partial<CGetItemChunkResult>) { Object.assign(this, init); }
}
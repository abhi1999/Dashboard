import { INote } from '../edidb'
export class CNote implements INote {
    public NoteID:number = 0;
    public NoteLine:number = 0;
    public NoteText:string = '';
    public DataKey:string = '';
    public DataType:string = '';
    public constructor(init?:Partial<CNote>) { Object.assign(this, init); }
}
export const INote_NoteText_length = 2000;
export const INote_DataKey_length = 10;
export const INote_DataType_length = 10;

export const kNote_NoteID="NoteID";
export const kNote_NoteLine="NoteLine";
export const kNote_NoteText="NoteText";
export const kNote_DataKey="DataKey";
export const kNote_DataType="DataType";

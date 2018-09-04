import { ITempFilesToTable } from '../edidb'
export class CTempFilesToTable implements ITempFilesToTable {
    public rowid:number = 0;
    public procID:string = '';
    public queryID:string = '';
    public filepath:string = '';
    public filename:string = '';
    public constructor(init?:Partial<CTempFilesToTable>) { Object.assign(this, init); }
}
export const ITempFilesToTable_filepath_length = 1000;
export const ITempFilesToTable_filename_length = 200;

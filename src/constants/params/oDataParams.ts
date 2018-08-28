import SortDescriptor from './sortDescriptor';
import FilterDescriptor from './filterDescriptor';

export default class ODataParams
{
    public top:number;
    public skip:number;
    public sorted:SortDescriptor[];
    public filtered:FilterDescriptor[];

    public constructor(init?:Partial<ODataParams>) {
        Object.assign(this, init);
    }
}
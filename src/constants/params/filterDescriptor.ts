export default class FilterDescriptor
{
    public id:string;
    public value:any;
    public displayValue?:string;

    public constructor(init?:Partial<FilterDescriptor>) {
        Object.assign(this, init);
    }
}
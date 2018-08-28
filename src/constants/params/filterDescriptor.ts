export default class FilterDescriptor
{
    public id:string;
    public value:string;

    public constructor(init?:Partial<FilterDescriptor>) {
        Object.assign(this, init);
    }
}
export default class SortDescriptor
{
    public id:string;
    public desc:boolean;

    public constructor(init?:Partial<SortDescriptor>) {
        Object.assign(this, init);
    }
}
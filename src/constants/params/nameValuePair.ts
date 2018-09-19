export default class NameValuePair
{
    public name:string;
    public value:string;

    public constructor(init?:Partial<NameValuePair>) {
        Object.assign(this, init);
    }
}
export default class KeyValueLabel
{
    public key:string;
    public value:any;
    public label:string;

    public constructor(init?:Partial<KeyValueLabel>) {
        Object.assign(this, init);
    }
}
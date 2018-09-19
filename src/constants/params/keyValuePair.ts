export default class KeyValuePair
{
    public key:string;
    public value:string;

    public constructor(init?:Partial<KeyValuePair>) {
        Object.assign(this, init);
    }
}
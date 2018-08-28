export default class TransferItem
{
    public key:string;
    public type:number;
    public title:string;

    public constructor(init?:Partial<TransferItem>) {
        Object.assign(this, init);
    }
}
import { IApiTradeOrders } from '../edidb'
export class CApiTradeOrders implements IApiTradeOrders {
    public Order_No:number = 0;
    public Acct_Order_No:string = '';
    public constructor(init?:Partial<CApiTradeOrders>) { Object.assign(this, init); }
}
import { IFreightCode } from '../edidb';

export default class FreightCode implements IFreightCode {
    public Id:string;
    public Frt_Code:string;
    public Description:string;
    public NMFC:string;
    public Class:string;
    public HazMat:boolean;
    public Sub:string;

    public constructor(init?:Partial<FreightCode>) {
        Object.assign(this, init);
    }
}
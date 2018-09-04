import { IApiShipDetail6 } from '../edidb'
export class CApiShipDetail6 implements IApiShipDetail6 {
    public ID:string = '';
    public Name:string = '';
    public Address1:string = '';
    public Address2:string = '';
    public City:string = '';
    public State:string = '';
    public Zip:string = '';
    public Country:string = '';
    public Source:string = '';
    public constructor(init?:Partial<CApiShipDetail6>) { Object.assign(this, init); }
}
export const IApiShipDetail6_ID_length = 30;
export const IApiShipDetail6_Name_length = 50;
export const IApiShipDetail6_Address1_length = 50;
export const IApiShipDetail6_Address2_length = 50;
export const IApiShipDetail6_City_length = 30;
export const IApiShipDetail6_State_length = 20;
export const IApiShipDetail6_Zip_length = 20;
export const IApiShipDetail6_Country_length = 30;
export const IApiShipDetail6_Source_length = 13;

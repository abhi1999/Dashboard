import { IApiShipDetail5 } from '../edidb'
export class CApiShipDetail5 implements IApiShipDetail5 {
    public ID:string = '';
    public Name:string = '';
    public Address1:string = '';
    public Address2:string = '';
    public City:string = '';
    public State:string = '';
    public Zip:string = '';
    public Country:string = '';
    public Source:string = '';
    public constructor(init?:Partial<CApiShipDetail5>) { Object.assign(this, init); }
}
export const IApiShipDetail5_ID_length = 80;
export const IApiShipDetail5_Name_length = 60;
export const IApiShipDetail5_Address1_length = 60;
export const IApiShipDetail5_Address2_length = 60;
export const IApiShipDetail5_City_length = 35;
export const IApiShipDetail5_State_length = 2;
export const IApiShipDetail5_Zip_length = 15;
export const IApiShipDetail5_Country_length = 30;
export const IApiShipDetail5_Source_length = 15;

export const kApiShipDetail5_ID="ID";
export const kApiShipDetail5_Name="Name";
export const kApiShipDetail5_Address1="Address1";
export const kApiShipDetail5_Address2="Address2";
export const kApiShipDetail5_City="City";
export const kApiShipDetail5_State="State";
export const kApiShipDetail5_Zip="Zip";
export const kApiShipDetail5_Country="Country";
export const kApiShipDetail5_Source="Source";

import { IApiShipDetail4 } from '../edidb'
export class CApiShipDetail4 implements IApiShipDetail4 {
    public ID:string = '';
    public Name:string = '';
    public Address1:string = '';
    public Address2:string = '';
    public City:string = '';
    public State:string = '';
    public Zip:string = '';
    public Country:string = '';
    public Source:string = '';
    public constructor(init?:Partial<CApiShipDetail4>) { Object.assign(this, init); }
}
export const IApiShipDetail4_ID_length = 80;
export const IApiShipDetail4_Name_length = 60;
export const IApiShipDetail4_Address1_length = 60;
export const IApiShipDetail4_Address2_length = 60;
export const IApiShipDetail4_City_length = 35;
export const IApiShipDetail4_State_length = 2;
export const IApiShipDetail4_Zip_length = 15;
export const IApiShipDetail4_Country_length = 30;
export const IApiShipDetail4_Source_length = 18;

export const kApiShipDetail4_ID="ID";
export const kApiShipDetail4_Name="Name";
export const kApiShipDetail4_Address1="Address1";
export const kApiShipDetail4_Address2="Address2";
export const kApiShipDetail4_City="City";
export const kApiShipDetail4_State="State";
export const kApiShipDetail4_Zip="Zip";
export const kApiShipDetail4_Country="Country";
export const kApiShipDetail4_Source="Source";

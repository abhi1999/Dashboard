import { IAPIAllowedObject } from '../edidb'
export class CAPIAllowedObject implements IAPIAllowedObject {
    public DBObjectName:string = '';
    public constructor(init?:Partial<CAPIAllowedObject>) { Object.assign(this, init); }
}
export const IAPIAllowedObject_DBObjectName_length = 50;

export const kAPIAllowedObject_DBObjectName="DBObjectName";

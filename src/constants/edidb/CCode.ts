import { ICode } from '../edidb'
export class CCode implements ICode {
    public functional:string = '';
    public code1:string = '';
    public description:string = '';
    public constructor(init?:Partial<CCode>) { Object.assign(this, init); }
}
export const ICode_functional_length = 100;
export const ICode_code1_length = 100;
export const ICode_description_length = 500;

export const kCode_functional="functional";
export const kCode_code1="code1";
export const kCode_description="description";

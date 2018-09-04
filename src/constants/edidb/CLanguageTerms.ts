import { ILanguageTerms } from '../edidb'
export class CLanguageTerms implements ILanguageTerms {
    public TermID:number = 0;
    public LanguageCode:string = '';
    public Caption:string = '';
    public Custom:string = '';
    public constructor(init?:Partial<CLanguageTerms>) { Object.assign(this, init); }
}
export const ILanguageTerms_LanguageCode_length = 10;
export const ILanguageTerms_Caption_length = 2000;
export const ILanguageTerms_Custom_length = 2000;

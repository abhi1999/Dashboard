import { ILanguage } from '../edidb'
export class CLanguage implements ILanguage {
    public LanguageNo:number = 0;
    public LanguageCode:string = '';
    public LanguageName:string = '';
    public LanguageNameTranslated:string = '';
    public constructor(init?:Partial<CLanguage>) { Object.assign(this, init); }
}
export const ILanguage_LanguageCode_length = 50;
export const ILanguage_LanguageName_length = 200;
export const ILanguage_LanguageNameTranslated_length = 200;

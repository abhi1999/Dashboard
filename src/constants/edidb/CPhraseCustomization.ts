import { IPhraseCustomization } from '../edidb'
export class CPhraseCustomization implements IPhraseCustomization {
    public ID:number = 0;
    public Keyword:string = '';
    public Culture:string = '';
    public Phrase:string = '';
    public constructor(init?:Partial<CPhraseCustomization>) { Object.assign(this, init); }
}
export const IPhraseCustomization_Keyword_length = 50;
export const IPhraseCustomization_Culture_length = 10;

export const kPhraseCustomization_ID="ID";
export const kPhraseCustomization_Keyword="Keyword";
export const kPhraseCustomization_Culture="Culture";
export const kPhraseCustomization_Phrase="Phrase";

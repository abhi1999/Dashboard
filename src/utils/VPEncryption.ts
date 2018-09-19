///
/// Vanatage Point Encryption
/// CodeKey = Encryption key
/// DataIn = String to encrypt
export function XOREncrypt(CodeKey : string, DataIn : string) {
    let strDataOut : string = '';
    let tempstring : string;
    let intXorValue1 : number;
    let intXorValue2 : number;


    while (DataIn.length < CodeKey.length || DataIn.length < 16) {
        DataIn = DataIn + String.fromCharCode(Math.round(Math.floor(Math.random() * 10)));
    }
    for (let lonDataPtr = 1; lonDataPtr <= DataIn.length; lonDataPtr++) {
        intXorValue1 = DataIn.substring(lonDataPtr-1, lonDataPtr).charCodeAt(0);
        const x2 : number = lonDataPtr % CodeKey.length;
        intXorValue2 = CodeKey.substring(x2, x2+1).charCodeAt(0);

        tempstring = (intXorValue1 ^ intXorValue2).toString(16).toUpperCase();
        if (tempstring.length === 1) { tempstring = "0" + tempstring };

        strDataOut = strDataOut + tempstring;
    }

    return strDataOut;
}

///
/// Vanatage Point Decryption
/// CodeKey = Encryption key
/// cryptoText = String to decrypt
export function XORDecrypt(CodeKey : string, cryptoText : string) {
    let clearText : string = '';

    for (let i : number = 0; i <= (cryptoText.length - 1)/2; i++) {
        const t : number = 2 * i;
        const c1 : number = parseInt(cryptoText.substring(t, t + 2), 16);
        const p : number = (i + 1) % CodeKey.length;
        const k1 : number = CodeKey.substring(p, p + 1).charCodeAt(0);
        const x : number = c1 ^ k1;
        if (x < 11) { return clearText };
        clearText = clearText + String.fromCharCode(x);
    }
    return clearText;
}

export const DefaultKey : string = "DataMasonsSoftware";
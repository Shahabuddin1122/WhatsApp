import CryptoJS from "crypto-js";

export const encryptData = ({data, key}:{data:string,key:string}) => {

    return CryptoJS.AES.encrypt(data, key).toString();
};

export const decryptData = ({encryptedData, key}:{encryptedData:any,key:string}) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
};

export const ENCRYPTION_KEY:string="@ndf,sdmnfgjkf:fsf323bbbmn3rtrqq3jngfgxfnge23"


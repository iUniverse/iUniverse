import {validateAccount} from "containers/signUp/first/SingUpFirst.fetch";

const accountCharValidation = (account:string) => {
    try{
        const accountReg = new RegExp('(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');
        if (!accountReg.test(account))
            return {status:false,func:'00',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] accountCharValidation');
        console.log(e);
        return {status:false,func:'00',code:'00',error:e};
    }
}

const accountLengthValidation = (account:string) => {
    try{
        const target = account.replace(/ /,"");
        if(target.length < 5) return {status:false,func:'01',code:'01'};
        else if (target.length > 15) return {status:false,func:'01',code:'02'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] accountLengthValidation');
        console.log(e);
        return {status:false,func:'01',code:'00',error:e};
    }
}

const passwordValidation = (password:string) => {
    try{
        const passwordReg = new RegExp('(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])');
        if (!passwordReg.test(password)) return {status:false,func:'02',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] passwordValidation');
        console.log(e);
        return {status:false,func:'02',code:'00',error:e};
    }
}

const passwordCharValidation = (password:string) => {
    try{
        const passwordReg = /^[0-9a-zA-Z\s`~!@#$%^&*()_\-+={}\[\]\\\|<>?/'"]+$/;
        if (!passwordReg.test(password)) return {status:false,func:'03',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] passwordCharValidation');
        console.log(e);
        return {status:false,func:'03',code:'00',error:e};
    }
}

const passwordLengthValidation = (account:string) => {
    try{
        const target = account.replace(/\s/g,"");
        if(target.length < 8) return {status:false,func:'04',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] passwordLengthValidation');
        console.log(e);
        return {status:false,func:'04',code:'00',error:e};
    }
}

const callValidateAccount = async (account:string)=>{
    try{
        const result = await validateAccount(account);
        console.log(result);
        if(!result.status) return {status:false,func:'05',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] passwordLengthValidation');
        console.log(e);
        return {status:false,func:'05',code:'00',error:e};
    }
}

export const signUpFirstValidation = async (account: string, password: string) => {
    const accountChar : any = await accountCharValidation(account);
    if(!accountChar.status) return accountChar;
    const accountLength : any = await accountLengthValidation(account);
    if(!accountLength.status) return accountLength;
    const passwordResult : any = await passwordValidation(password);
    if(!passwordResult.status) return passwordResult;
    const passwordCharResult : any = await passwordCharValidation(password);
    if(!passwordCharResult.status) return passwordCharResult;
    const passwordLength : any = await passwordLengthValidation(password);
    if(!passwordLength.status) return passwordLength;
    const validationResult : any = await callValidateAccount(account);
    if(!validationResult.status) return validationResult;
    else return {status:true,code:null};
}
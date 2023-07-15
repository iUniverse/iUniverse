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
        const target = account.replace(/ /,"");
        if(target.length < 8) return {status:false,func:'04',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] passwordLengthValidation');
        console.log(e);
        return {status:false,func:'04',code:'00',error:e};
    }
}

const temp = async (account:string)=>{
    try{
        const data = {"account":account};
        const response = await fetch('',{
            method : 'POST',
            cache : 'no-cache',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                'account':account
            })
        })
        if(response) return {status:true,func:null,code:null};
        else return {status:false,func:'05',code:'01'};
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
    const tempResult = await temp(account);
    console.log(tempResult);
    if(!tempResult.status) return passwordLength;
    else return {status:true,code:null};
}
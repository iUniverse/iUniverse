const nickNameCharValidation = (nickName:string) => {
    try{
        const nickNameReg = /^[0-9a-zA-Z가-힣\s]+$/;
        if (!nickNameReg.test(nickName)) return {status:false,func:'00',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] nickNameCharValidation');
        console.log(e);
        return {status:false,func:'00',code:'00',error:e};
    }
}

const lastNameNameCharValidation = (lastName:string) => {
    try{
        const lastNameReg = /^[0-9a-zA-Z가-힣\s]+$/;
        if (!lastNameReg.test(lastName)) return {status:false,func:'01',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] lastNameNameCharValidation');
        console.log(e);
        return {status:false,func:'01',code:'00',error:e};
    }
}

const firstNameCharValidation = (firstName:string) => {
    try{
        const firstNameReg = /^[0-9a-zA-Z가-힣\s]+$/;
        if (!firstNameReg.test(firstName)) return {status:false,func:'02',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] firstNameCharValidation');
        console.log(e);
        return {status:false,func:'02',code:'00',error:e};
    }
}

const mobileCarrierValidation = (mobile:string) => { // 미완성 만들어야함
    try{
        const mobileNameReg = /^\d{3}-?\d{3,4}-?\d{4}$/;
        if (!mobileNameReg.test(mobile)) return {status:false,func:'03',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] mobileValidation');
        console.log(e);
        return {status:false,func:'03',code:'00',error:e};
    }
}

const mobileValidation = (mobile:string) => {
    try{
        const mobileNameReg = /^\d{3}-?\d{3,4}-?\d{4}$/;
        if (!mobileNameReg.test(mobile)) return {status:false,func:'04',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] mobileValidation');
        console.log(e);
        return {status:false,func:'04',code:'00',error:e};
    }
}

const emailValidation = (email:string) => {
    try{
        const emailNameReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailNameReg.test(email)) return {status:false,func:'05',code:'01'};
        else return {status:true,func:null,code:null};
    }
    catch(e){
        console.log('[Error] emailValidation');
        console.log(e);
        return {status:false,func:'05',code:'00',error:e};
    }
}

type infoType = {
    nickName:string;
    lastName:string;
    firstName:string;
    mobileCarrier:string|null;
    mobile:string;
    email:string;
}
export const signUpSecondValidation = async (info: infoType) => {
    const nickNameValidate : any = await nickNameCharValidation(info.nickName);
    if(!nickNameValidate.status) return nickNameValidate;
    const lastNameValidate : any = await lastNameNameCharValidation(info.lastName);
    if(!lastNameValidate.status) return lastNameValidate;
    const firstNameValidate : any = await firstNameCharValidation(info.firstName);
    if(!firstNameValidate.status) return firstNameValidate;
    if(info.mobile.length > 0){
        const mobileValidate : any = await mobileValidation(info.mobile);
        if(!mobileValidate.status) return mobileValidate;
    }
    if(info.email.length > 0){
        const emailValidate : any = await emailValidation(info.email);
        if(!emailValidate.status) return emailValidate;
    }
    return {status:true,code:null};
}
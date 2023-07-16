type dataType = {
    "account":string;
    "password":string;
    "nickName":string;
    "lastName":string;
    "firstName":string;
    "mobileCarrier":string;
    "mobile":string;
    "email":string;
}

export const signUp = async (data:dataType) => {
    try{
        const url = 'http://localhost:3500/signUp';
        const response = await fetch(url,{
            method : 'POST',
            cache : 'no-cache',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "account":data.account,
                "password":data.password,
                "nickName":data.nickName,
                "lastName":data.lastName,
                "firstName":data.firstName,
                "mobileCarrier":data.mobileCarrier,
                "mobile":data.mobile,
                "email":data.email
            })
        });
        return response.json();
    }
    catch(e){
        console.log('[Error] validateAccount fetch');
        console.log(e);
        return {status:false,func:'05',code:'00',error:e};
    }
}
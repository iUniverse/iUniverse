export const validateAccount = async (account:string) => {
    try{
        const url = 'http://localhost:3500/validateAccount';
        const response = await fetch(url,{
            method : 'POST',
            cache : 'no-cache',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                'account':account
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
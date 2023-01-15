export type Login = {
    seq: number;
    id: string;
    email: string;
    password: string;
};

export const LoginDataBase = (() => {
    const logins = [
        {
            seq: 1,
            id: 'id',
            email: 'j@gmail.com',
            password: '123123',
        },
    ] as Login[];

    return {
        findLogin: () => Promise.resolve(logins),
        insertLogin: (inputLogin)=> {
            let input = {...inputLogin};
            input["seq"] = logins[logins.length -1]["seq"] + 1;
            logins.push(input);
            Promise.resolve(input["seq"]);
        }
    };
})();
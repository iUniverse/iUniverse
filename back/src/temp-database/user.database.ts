export type User = {
    seq: number;
    name: string;
    email: string;
    phone: string;
    login: number;
};

export const UserDatabase = (() => {
    const users = [
        {
            seq: 1,
            name: 'J',
            email: 'j@gmail.com',
            phone: '010-3333-4444',
            login: 1
        },
    ] as User[];

    return {
        findLogin: () => Promise.resolve(users),
        insertUser: (inputUser)=> {
            let input = {...inputUser};
            input["seq"] = users[users.length -1]["seq"] + 1;
            users.push(input);
        }
    };
})();
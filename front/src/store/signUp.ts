import {atom, selector} from "recoil";

export const pageInfo = atom<number>({
    key:"page",
    default:0
});
export const accountInfo = atom<string>({
    key:'account',
    default:''
});
export const passwordInfo = atom<string>({
    key:'password',
    default:''
});
export const nickNameInfo = atom<string>({
    key:'nickName',
    default:''
});
export const lastNameInfo = atom<string>({
    key:'lastName',
    default:''
});
export const firstNameInfo = atom<string>({
    key:'firstName',
    default:''
});
export const mobileCarrierInfo = atom<string>({
    key:'mobileCarrier',
    default:''
});
export const mobileInfo = atom<string>({
    key:'mobile',
    default:''
});
export const emailInfo = atom<string>({
    key:'email',
    default:''
});
export const accountBtnInfo = atom<boolean>({
    key:'accountBtn',
    default:false
});
export const infoBtnInfo = atom<boolean>({
    key:'infoBtn',
    default:false
});
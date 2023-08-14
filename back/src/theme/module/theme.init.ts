import { Theme } from "../theme.entity";

const basic_theme = {
    name : "기본테마",
    otherName : 'basic',
    colors : [
        "#19007A",
        "#5C66FB",
        "#3A45E6",
        "#7E5FFC",
        "#5914B2",
        "#503FB1",
        "#684ee8",
        "#340090",
        "#351673",
        "#0a1a87",
        "#6C4DB4",
        "#834DB8",
        "#560275"
    ],
    fontColor : "#fff",
}

const mono_theme = {
    name : "모노테마",
    otherName : "mono",
    colors : [
        "#373737",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5",
        "#F5F5F5"
    ],
    fontColor : "#222222",
}

const cozy_theme = {
    name : "코지테마",
    otherName : 'cozy',
    colors : [
        "#B2C6B4",
        "#E7DFCA",
        "#e8dabf",
        "#ddcdb4",
        "#D1C1A7",
        "#E7E3DA",
        "#E4DDCD",
        "#dad4c8",
        "#d6c9b6",
        "#E0E1CF",
        "#d7d8d0",
        "#cfd1c6",
        "#bcbfb8"
    ],
    fontColor : "#222222",
}

const init_theme = {
    '기본테마' : {
        name : "기본테마",
        otherName : 'basic',
        colors : [
            "#19007A",
            "#5C66FB",
            "#3A45E6",
            "#7E5FFC",
            "#5914B2",
            "#503FB1",
            "#684ee8",
            "#340090",
            "#351673",
            "#0a1a87",
            "#6C4DB4",
            "#834DB8",
            "#560275"
        ],
        fontColor : "#fff",
    },
    '모노테마' : {
        name : "모노테마",
        otherName : 'mono',
        colors : [
            "#373737",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5",
            "#F5F5F5"
        ],
        fontColor : "#222222",
    },
    '코지테마' : {
        name : "코지테마",
        otherName : 'cozy',
        colors : [
            "#B2C6B4",
            "#E7DFCA",
            "#e8dabf",
            "#ddcdb4",
            "#D1C1A7",
            "#E7E3DA",
            "#E4DDCD",
            "#dad4c8",
            "#d6c9b6",
            "#E0E1CF",
            "#d7d8d0",
            "#cfd1c6",
            "#bcbfb8"
        ],
        fontColor : "#222222",
    },
    '트로피컬테마' : {
        name : "트로피컬테마",
        otherName : 'tropical',
        colors : [
            "linear-gradient(to bottom, #a8edea, #fed6e3)",
            "#b2e4ed",
            "#feec83",
            "#f5bade",
            "#c4dc5c",
            "#bae1ac",
            "#ffcb9c",
            "#d4d4ec",
            "#90dad0",
            "#ffcec8",
            "#c4dc5c",
            "#b2d4ed",
            "#ffbc79"
        ],
        fontColor : "#222222",
    }
}

//기본 옵션테마 가져오기
export function getInitTheme(themeName : string){
    const theme = init_theme[themeName];

    const result = new Theme();
    result.name = theme.name;
    result.colors = theme.colors;
    result.fontColor = theme.fontColor;
    result.otherName = theme.otherName;
    return result;
} 
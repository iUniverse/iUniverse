import BlueRoundButton from './blue/BlueRoundButton';
import WhiteRoundButton from './white/WhiteRoundButton';
import {RoundButtonOptions} from './RoundButtonOptions';

export default function RoundButton(props : RoundButtonOptions) {
    switch (props.color){
        case "white":
            return (
                <>
                    <WhiteRoundButton
                        title={props?.title}
                        color={props?.color}
                        func={props?.func}
                        href={props?.href}
                        img={props?.img}
                        width={props?.width}
                        disable={props?.disable}
                    />
                </>
            )
            break;
        case "blue":
            return (
                <>
                    <BlueRoundButton
                        title={props?.title}
                        color={props?.color}
                        func={props?.func}
                        href={props?.href}
                        img={props?.img}
                        width={props?.width}
                        disable={props?.disable}
                    />
                </>
            )
            break;
        default:
            return (
                <>
                    <BlueRoundButton
                        title={props?.title}
                        color={props?.color}
                        func={props?.func}
                        href={props?.href}
                        img={props?.img}
                        width={props?.width}
                        disable={props?.disable}
                    />
                </>
            )
            break;
    }
}
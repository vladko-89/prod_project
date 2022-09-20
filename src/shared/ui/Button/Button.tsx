import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}


export const Button: FC<ButtonProps> = (props) => {

    const { className, onClick, children, theme, ...otherProps} = props;
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme], className])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    )
}
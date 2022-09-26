import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, onClick, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme], className])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};

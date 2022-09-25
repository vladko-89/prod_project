import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NaveBarProps {
    className?: string
}

export const Navbar = ({ className }: NaveBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>

        <div className={cls.links}>
            <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>

    </div>
);

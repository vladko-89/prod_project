import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from 'widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss';
import { classNames } from 'shared/libs/classNames/classNames';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    console.log(className);

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={translate}
        >
            {t('Язык')}
        </Button>

    );
};

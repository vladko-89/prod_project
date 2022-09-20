import { useTheme } from './providers/ThemeProviders/libs/useTheme';
import './styles/index.scss';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/NavBar';
import {Sidebar} from "widgets/Sidebar";
import React, { Suspense } from "react";
import {useTranslation} from "react-i18next";





export function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>


        </div>
    )
}


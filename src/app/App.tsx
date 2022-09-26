import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorButton } from 'app/providers/ErrorBounderies';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProviders/libs/useTheme';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <ErrorButton />
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
}

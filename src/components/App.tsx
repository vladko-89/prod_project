import { Suspense, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';
import { ThemeContext } from '../contexts/ThemeContext';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import '../styles/index.scss';
import { classNames } from '../helpers/classNames/classNames';


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}



export function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route  path="/about" element={<AboutPageAsync/>} />
                    <Route  path="/" element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    )
}
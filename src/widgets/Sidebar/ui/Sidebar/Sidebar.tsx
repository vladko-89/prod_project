import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}


export const Sidebar = ({className}: SidebarProps) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = (): void => {
        setIsCollapsed(state => !state)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <button onClick={toggleSidebar}>Toogle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
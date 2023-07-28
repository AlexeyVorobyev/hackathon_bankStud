import React from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {NavLink, Outlet} from "react-router-dom";
import { BsBoxArrowLeft} from 'react-icons/bs';

const Navigation = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerWrapper1}>
                    <div className={styles.headerLogo}>
                        <p className={styles.headerLogoText}>СБ</p>
                    </div>
                    <div className={styles.headerButton}>
                        <p className={styles.headerButtonText}>Выбрать ВУЗ</p>
                    </div>
                </div>
                <div className={styles.headerWrapper2}>
                    <div className={styles.headerLinks}>
                        <NavLink
                            to={""}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >Услуги</NavLink>
                        <NavLink
                            to={""}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >Преймущества</NavLink>
                        <NavLink
                            to={""}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >Помощь</NavLink>
                        <NavLink
                            to={""}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >Контакты</NavLink>
                    </div>
                    <div className={styles.headerCabinet}>
                        <BsBoxArrowLeft className={styles.headerCabinetIcon}/>
                        <p className={styles.headerCabinetText}>Личный Кабинет</p>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </>
    )
}

export {Navigation}
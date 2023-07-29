import React from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {NavLink, Outlet} from "react-router-dom";
import { BsBoxArrowLeft ,BsBoxArrowRight} from 'react-icons/bs';

const Navigation = () => {


    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerWrapper1}>
                    <NavLink
                        to={"/"}
                        className={styles.headerLogo}
                    >
                        <p className={styles.headerLogoText}>СБ</p>
                    </NavLink>
                    <div className={styles.headerButton}>
                        <p className={styles.headerButtonText}>Выбрать ВУЗ</p>
                    </div>
                </div>
                <div className={styles.headerWrapper2}>
                    <div className={styles.headerLinks}>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >На главную</NavLink>
                        <NavLink
                            to={""}
                            className={({ isActive }) =>
                                (classNames(styles.headerLink, isActive ? styles.active : styles.disActive))}
                        >Гайд о поступлении</NavLink>
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
                    {/*{!inCabinet &&(<NavLink*/}
                    {/*    onClick={() => setInCabinet(true)}*/}
                    {/*    to={"cabinet"}*/}
                    {/*    className={styles.headerCabinet}>*/}
                    {/*    <BsBoxArrowLeft className={styles.headerCabinetIcon}/>*/}
                    {/*    <p className={styles.headerCabinetText}>Личный Кабинет</p>*/}
                    {/*</NavLink>)}*/}
                    <NavLink
                        to={"cabinet"}
                        className={styles.headerCabinet}>
                        <div className={styles.headerEllipse}>
                            <p className={styles.headerEllipseText}>ЮВ</p>
                        </div>
                        <p className={styles.headerCabinetText}>Юлия</p>
                        <BsBoxArrowRight className={styles.headerCabinetIcon}/>
                    </NavLink>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </>
    )
}

export {Navigation}
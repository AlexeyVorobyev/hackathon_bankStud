import React from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {NavLink, Outlet} from "react-router-dom";
import {Swiper} from "./Swiper/Swiper";
import {ReactComponent as Arrow} from './assets/arrow.svg';
const Services = () => {

    const [check, setCheck] =React.useState(true)

    React.useEffect(() => {
        const curPath = window.location.pathname;
        if (curPath === "/services/specialities") {
            console.log(curPath)
            setHeaderTitle("Выбор специальности")
        }
        else {
            console.log(curPath)
            setHeaderTitle("Выгодное кредитование")
        }
    },[check])

    const [headerTitle,setHeaderTitle] = React.useState("");

    return (
        <>
            <section className={styles.cabinetGrid}>
                <div className={styles.applicationsHeader}>
                    <p className={styles.applicationsTitle}>{headerTitle}</p>
                    <NavLink
                        to={"/cabinet"}
                        className={styles.applicationsHeaderLink}
                    >
                        <p>Обратно</p>
                        <Arrow/>
                    </NavLink>
                </div>
                <div className={styles.serviceContainer} onClick={() => setCheck(!check)}>
                    <p className={styles.serviceTitle}>Сервисы</p>
                    <nav className={styles.serviceWrapper}>
                        <NavLink
                            to={"/actual_programs"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Актуальные программы</NavLink>
                        <NavLink
                            to={"/actual_events"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Актуальные события</NavLink>
                        <NavLink
                            to={"/services/specialities"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Выбор Специальности</NavLink>
                        <NavLink
                            to={"/scholarship"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Моя Стипендия</NavLink>
                        <NavLink
                            to={"/services/loans"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Выгодное кредитование</NavLink>
                        <NavLink
                            to={"/tree/tree_specialities"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Дерево возможностей</NavLink>
                    </nav>
                </div>

                <div className={styles.servicesOutlet}>
                    <Outlet/>
                </div>

                <Swiper/>
            </section>
        </>
    )
}

export {Services}
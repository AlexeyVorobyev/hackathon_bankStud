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
            setHeaderTitle("Выбор специальности")
        }
        else if (curPath === "/services/universities") {
            setHeaderTitle("Выбор ВУЗА")
        }
        else if (curPath === "/services/my_loans_application") {
            setHeaderTitle("Мои Заявки на кредиты")
        }
        else if (curPath === "/services/my_loan_application_info") {
            setHeaderTitle("Информация по заявке")
        }
        else {
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
                            to={"/services/my_loans_application"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Мои заявки на кредиты</NavLink>
                        <NavLink
                            to={"/services/specialities"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Выбор Специальности</NavLink>
                        <NavLink
                            to={"/services/universities"}
                            className={({ isActive }) =>
                                (classNames(styles.serviceLink, isActive ? styles.active : styles.disActive))}
                        >Выбор ВУЗа</NavLink>
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

                <div className={styles.servicesOutlet} onClick={() => setCheck(!check)}>
                    <Outlet/>
                </div>

                <Swiper/>
            </section>
        </>
    )
}

export {Services}
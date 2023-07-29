import React from "react";
import styles from './styles.module.scss'
import {ReactComponent as UserPhoto} from './assets/userPhoto.svg';
import {ReactComponent as Settings} from './assets/settings.svg';
import {ReactComponent as Arrow} from './assets/arrow.svg';
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {Swiper} from "./Swiper/Swiper";
const Cabinet = () => {
    return (
        <>
            <div className={styles.cabinetBackground}/>
            <section className={styles.cabinetGrid}>
                <div className={styles.cabinetUserContainer}>
                    <UserPhoto className={styles.cabinetUserPhoto}/>
                    <p className={styles.cabinetUserName}>Васильцова Юлия Владимировна</p>
                    <Settings className={styles.cabinetUserSettings}/>
                </div>

                <div className={styles.serviceContainer}>
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

                <div className={styles.examResultsContainer}>
                    <p className={styles.examResultsTitle}>Результаты ЕГЭ</p>
                    <div className={styles.examResultsStroke}/>
                    <div className={styles.examResultsTable}>
                        <div className={styles.examResultsTableRow}>
                            <p className={styles.examResultsTableField}>Русский язык</p>
                            <p className={styles.examResultsTableField}>100</p>
                        </div>
                        <div className={styles.examResultsTableRow}>
                            <p className={styles.examResultsTableField}>Математика</p>
                            <p className={styles.examResultsTableField}>98</p>
                        </div>
                        <div className={styles.examResultsTableRow}>
                            <p className={styles.examResultsTableField}>История</p>
                            <p className={styles.examResultsTableField}>96</p>
                        </div>
                        <div className={styles.examResultsTableRow}>
                            <p className={styles.examResultsTableField}>Общий Результат:</p>
                            <p className={styles.examResultsTableField}>294</p>
                        </div>
                    </div>
                </div>

                <div className={styles.applicationsContainer}>
                    <p className={styles.applicationsTitle}>Поданые заявления</p>
                    <div className={styles.applicationsStroke}/>
                    <div className={styles.applicationsTable}>
                        <div className={styles.applicationsTableRow}>
                            <p className={styles.applicationsTableField}>Вуз</p>
                            <p className={styles.applicationsTableField}>Место в списке</p>
                        </div>
                        <div className={styles.applicationsTableRow}>
                            <p className={styles.applicationsTableField}>Московский государственный универистет</p>
                            <p className={styles.applicationsTableField}>34</p>
                        </div>
                        <div className={styles.applicationsTableRow}>
                            <p className={styles.applicationsTableField}>Дальневосточный государственный университет</p>
                            <p className={styles.applicationsTableField}>17</p>
                        </div>
                        <div className={styles.applicationsTableRow}>
                            <p className={styles.applicationsTableField}>Кубанский государственный университет</p>
                            <p className={styles.applicationsTableField}>21</p>
                        </div>
                        <div className={styles.applicationsTableRow}>
                            <p className={styles.applicationsTableField}>Тульский государственный университет</p>
                            <p className={styles.applicationsTableField}>23</p>
                        </div>
                    </div>
                    <NavLink
                        className={styles.applicationsLink}
                        to={"../applications"}
                    >
                        <p className={styles.applicationsLinkText}>Подробнее</p>
                        <Arrow className={styles.applicationsLinkArrow}/>
                    </NavLink>
                </div>
                <Swiper/>
            </section>
        </>
    )
}

export {Cabinet}
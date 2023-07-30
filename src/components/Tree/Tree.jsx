import React from "react";
import styles from './styles.module.scss'
import {NavLink, Outlet} from "react-router-dom";
import classNames from "classnames";
import {ReactComponent as Arrow} from './assets/arrow.svg';
import {ReactComponent as Lupa} from './assets/lupa.svg';
import {ReactComponent as Cross} from './assets/cross.svg';
const Tree = () => {

    // const [isNavBarOpen, setIsNavBarOpen] = React.useState(true);

    return (
        <section className={styles.treeSection}>
            <div className={styles.treeHeader}>
                <p className={styles.treeTitle}>Дерево возможностей</p>
                <NavLink
                    to={"/cabinet"}
                    className={styles.treeHeaderLink}
                >
                    <p>Обратно</p>
                    <Arrow/>
                </NavLink>
            </div>
            <div className={styles.treeFlex}>
                <div className={styles.treeContainer}>
                    <div className={styles.treeSearchBox}>
                        <input className={styles.treeSearchInput} placeholder={"Поиск Направления"}/>
                        <Lupa className={styles.treeSearchIcon}/>
                    </div>
                    <Outlet/>
                </div>
                <div className={styles.treeSideBar}>
                    {/*<Cross className={styles.treeSideBarCloseButton} onClick={() => setIsNavBarOpen(false)}/>*/}
                    <nav className={styles.treeSideNav }>
                        <NavLink
                            to={"tree_specialities"}
                            className={({ isActive }) =>
                                (classNames(styles.treeSideNavOption, isActive ? styles.active : styles.disActive))}
                        >Продвижение по специальности</NavLink>
                        <NavLink
                            to={"tree_student_card"}
                            className={({ isActive }) =>
                                (classNames(styles.treeSideNavOption, isActive ? styles.active : styles.disActive))}
                        >Получение студенческой карты</NavLink>
                        <NavLink
                            to={"tree_student_credit"}
                            className={({ isActive }) =>
                                (classNames(styles.treeSideNavOption, isActive ? styles.active : styles.disActive))}
                        >Оформление студенческого кредита</NavLink>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export {Tree}
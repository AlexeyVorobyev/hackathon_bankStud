import React from "react";
import styles from './styles.module.scss'
import {NavLink, Outlet} from "react-router-dom";
import {ReactComponent as Arrow} from "./assets/arrow.svg";

const Proforient = () => {
    return (
        <section className={styles.proforientSection}>
            <div className={styles.applicationsHeader}>
                <NavLink
                    to={"/cabinet"}
                    className={styles.applicationsHeaderLink}
                >
                    <p>Обратно</p>
                    <Arrow/>
                </NavLink>
            </div>
            <Outlet/>
        </section>
    )
}

export {Proforient}
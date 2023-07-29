import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import rocket from "./assets/rocket.png";
const Start = () => {
    return (
        <div className={styles.startWrapper}>
            <p className={styles.startTitle}>Пройди тест и узнай, какая профессия тебе подходит!</p>
            <p className={styles.startDescript}>После прохождения вы получите подборку подходящих профессий</p>
            <NavLink
                className={styles.profContainerButton}
                to={"../question"}
            >
                <p className={styles.profContainerButtonText}>Пройти тест</p>
            </NavLink>
            <img src={rocket} className={styles.startRocket}/>
        </div>
    )
}

export {Start}
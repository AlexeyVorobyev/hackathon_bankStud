import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import q1 from "./assets/q1.png";
import q2 from "./assets/q2.png";
const Question = () => {
    return (
        <div className={styles.questionWrapper}>
            <div className={styles.questionWrapper2}>
                <p className={styles.questionTitle}>1. Вы бы предпочли:</p>
                <div className={styles.questionGrid}>
                    <NavLink
                        className={styles.questionContainer}
                        to={"../finish"}
                    >
                        <div className={styles.ellipse1}/>
                        <div className={styles.ellipse2}/>
                        <img src={q1} className={styles.questionImg}/>
                        <p className={styles.questionText}>Космические исследования</p>
                    </NavLink>
                    <NavLink
                        className={styles.questionContainer}
                        to={"../finish"}
                    >
                        <div className={styles.ellipse1}/>
                        <div className={styles.ellipse2}/>
                        <img src={q2} className={styles.questionImg}/>
                        <p className={styles.questionText}>Творческие манипуляции</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export {Question}
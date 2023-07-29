import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import Rocket from "./assets/finishRocket.png"
const Finish = () => {
    return (
        <div className={styles.finishWrapper}>
            <img src={Rocket} className={styles.finishImg}/>
            <p className={styles.finishDescript}>
                Профессия типа <span>“Человек-Знаковая система”</span> - сильно
                выраженная наклонность (13 из 16). Основным направление
                деятельности данного типа профессий является работа с
                цифрами, формулами, расчетами, текстами и базами данных.
                <span> Профессионально выраженные качества:</span> внимательность,огическое мышление, точность.
            </p>
            <NavLink
                className={styles.profContainerButton}
                to={"/"}
            >
                <p className={styles.profContainerButtonText}>Посмотреть дерево развития</p>
            </NavLink>
        </div>
    )
}

export {Finish}
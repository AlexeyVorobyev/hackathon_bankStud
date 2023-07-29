import React from "react";
import styles from './styles.module.scss'
import {ReactComponent as ArrowDown} from "./assets/arowDown.svg";
import {NavLink} from "react-router-dom";
const MyLoanApplicationInfo = () => {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>Кредит на обучение</p>
            <p className={styles.cardPercent}>Процентная ставка по кредиту: 1,3 %</p>
            <div className={styles.cardGrid}>
                <p className={styles.cardGridText}>Сумма кредита: 1 500 000 Р</p>
                <p className={styles.cardGridText}>Сумма к ежемесяной оплате: 27 500</p>
                <p className={styles.cardGridText}>Срок: 10 лет</p>
                <p className={styles.cardGridText}>Следующая оплата: июнь</p>
            </div>
            <div className={styles.cardButtonsWrapper}>
                <div className={styles.applicationButton}>
                    <p className={styles.applicationButtonText}>Скачать договор</p>
                    <ArrowDown className={styles.buttonArrow}/>
                </div>
                <div className={styles.applicationButton}>
                    <p className={styles.applicationButtonText}>Подписать договор через гос. услуги</p>
                </div>
            </div>
        </div>
    )
}

export {MyLoanApplicationInfo}
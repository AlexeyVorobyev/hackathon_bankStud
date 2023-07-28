import React from "react";
import styles from './styles.module.scss'
import orderImg from './assets/order.png'
import classNames from "classnames";
import {ReactComponent as CreditCardSvg} from './assets/creditCard.svg';
import {ReactComponent as PresentSvg} from './assets/present.svg';
import {ReactComponent as MoneySvg} from './assets/money.svg';
import {ReactComponent as VectorLine} from './assets/vectorLine.svg';

const Landing = () => {
    return (
        <>
            <section className={styles.orderSection}>
                <div className={styles.orderShape1}/>
                <div className={styles.orderShape2}/>
                <div className={styles.orderImgContainer}>
                    <img className={styles.orderImg} src={orderImg}/>
                </div>
                <div className={styles.orderDescriptionWrapper}>
                    <p className={styles.orderHeader}>
                        <span className={styles.spanned}>Уникальное </span>
                        взаимодействие вузов и абитуриентов
                    </p>
                    <p className={styles.orderParagraph}>
                        Оформи уникальную студенческу карту и взаимодействуй
                        с банком напрямую через сайт и мобильное приложение
                    </p>
                    <div className={styles.orderButton}>
                        <p className={styles.orderButtonText}>Заказать</p>
                    </div>
                </div>
            </section>
            <section className={styles.howWorksSection}>
                <p className={styles.howWorksTitle}>Как это Работает</p>
                <div className={styles.howWorksGrid}>
                    <VectorLine className={styles.vector}/>
                    <div className={styles.card}>
                        <div className={styles.cardEllipse}>
                            <p className={styles.cardEllipseText}>1</p>
                        </div>
                        <p className={styles.cardTitle}>Оформите студенческую карту</p>
                        <p className={styles.cardParagraph}>Укажите номер телефона, Ваше ФИО и другие запрашиваемые личные данные</p>
                        <CreditCardSvg className={styles.cardSvg}/>
                    </div>
                    <div className={classNames(styles.card,styles.cardGrey)}>
                        <div className={styles.cardEllipse}>
                            <p className={styles.cardEllipseText}>2</p>
                        </div>
                        <p className={styles.cardTitle}>Зарабатывайте и экономьте</p>
                        <p className={styles.cardParagraph}>После каждой покупки вам будет возвращаться кэшбек в указанном размере</p>
                        <MoneySvg className={styles.cardSvg}/>
                    </div>
                    <div className={classNames(styles.card,styles.cardGrey)}>
                        <div className={styles.cardEllipse}>
                            <p className={styles.cardEllipseText}>3</p>
                        </div>
                        <p className={styles.cardTitle}>Полуйчайте бонусы от партнеров</p>
                        <p className={styles.cardParagraph}>Бонусы от партнеров представляются всем нашим клиентам</p>
                        <PresentSvg className={styles.cardSvg}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Landing}
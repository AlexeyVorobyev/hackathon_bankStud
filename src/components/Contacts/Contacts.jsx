import React from "react";
import styles from './styles.module.scss'
import alex from './assets/alex.png'
import niki from './assets/niki.png'
import vano from './assets/vano.png'
import sofia from './assets/sofia.png'
import kitkat from './assets/kitkat.png'
const Contacts = () => {
    return (
        <section className={styles.contactsSection}>
            <p className={styles.contactsHeader}>Для вас трудились</p>
            <div className={styles.contactsFlex}>
                <div className={styles.background}/>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                    </div>
                    <p className={styles.cardName}>Алексей Воробьев</p>
                    <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                    <a href={"https://t.me/Kurt_Alexis_23"} className={styles.cardLink}>@Kurt_Alexis_23</a>
                    <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={niki}/>
                    </div>
                    <p className={styles.cardName}>Никита Волошин</p>
                    <p className={styles.cardProfession}>Backend разработчик</p>
                    <a href={"https://t.me/nikitaVoV"} className={styles.cardLink}>@nikitaVoV</a>
                    <p style={{marginTop:"50px"}} className={styles.cardStack}>Технологический стек: Java Spring, Postgres</p>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={vano}/>
                    </div>
                    <p className={styles.cardName}>Иван Головачев</p>
                    <p className={styles.cardProfession}>Проджект менеджер</p>
                    <a href={"https://t.me/skoro0977"} className={styles.cardLink}>@skoro0977</a>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={sofia}/>
                    </div>
                    <p className={styles.cardName}>Софья Коновалова</p>
                    <p className={styles.cardProfession}>UI/UX designer</p>
                    <a href={"https://t.me/art3midas"} className={styles.cardLink}>@art3midas</a>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={kitkat}/>
                    </div>
                    <p className={styles.cardName}>Екатерина Мочалова</p>
                    <p className={styles.cardProfession}>Аналитик</p>
                    <a href={"https://t.me/katerina_makone"} className={styles.cardLink}>@katerina_makone</a>
                </div>
            </div>
        </section>
    )
}

export {Contacts}
import React from "react";
import styles from './styles.module.scss'
import alex from './assets/alex.png'
const Contacts = () => {
    return (
        <section className={styles.contactsSection}>
            <p className={styles.contactsHeader}></p>
            <div className={styles.contactsFlex}>
                <div className={styles.background}/>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                        <p className={styles.cardName}>Алексей Воробьев</p>
                        <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                        <p className={styles.cardLink}>@Kurt_Alexis_23</p>
                        <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                    </div>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                        <p className={styles.cardName}>Алексей Воробьев</p>
                        <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                        <p className={styles.cardLink}>@Kurt_Alexis_23</p>
                        <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                    </div>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                        <p className={styles.cardName}>Алексей Воробьев</p>
                        <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                        <p className={styles.cardLink}>@Kurt_Alexis_23</p>
                        <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                    </div>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                        <p className={styles.cardName}>Алексей Воробьев</p>
                        <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                        <p className={styles.cardLink}>@Kurt_Alexis_23</p>
                        <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                    </div>
                </div>
                <div className={styles.contactsCard}>
                    <div className={styles.cardImgContainer}>
                        <img className={styles.cardImg} src={alex}/>
                        <p className={styles.cardName}>Алексей Воробьев</p>
                        <p className={styles.cardProfession}>Frontend/Mobile разработчик</p>
                        <p className={styles.cardLink}>@Kurt_Alexis_23</p>
                        <p className={styles.cardStack}>Технологический стек: React, SASS/SCSS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Contacts}
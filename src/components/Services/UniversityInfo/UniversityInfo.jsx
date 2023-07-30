import React from "react";
import styles from './styles.module.scss'
const UniversityInfo = () => {
    return (
        <>
            <p className={styles.universityName}>Московский Государственный университет</p>
            <div className={styles.infoFlexWrapper}>
                <div className={styles.infoCard}>
                    <p className={styles.infoCardTitle}>Основная информация</p>
                    <div className={styles.infoCardParametrWrapper}>
                        <p className={styles.infoCardParametr}>Год основания: 1755</p>
                        <p className={styles.infoCardParametr}>Студентов: 55000</p>
                        <p className={styles.infoCardParametr}>Преподавателей 13957</p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <p className={styles.infoCardTitle}>Дополнительная информация</p>
                    <div className={styles.infoCardParametrWrapper}>
                        <p className={styles.infoCardParametr}>Бюджетных мест: 22 456</p>
                        <p className={styles.infoCardParametr}>Мест в общежитии: 6450</p>
                    </div>
                    <div className={styles.chartsContainer}>
                        <div className={styles.chartContainer}>
                            <p className={styles.chartLabel}>Доля трудоустроенных выпускников</p>
                            <div className={styles.chart}>
                                <div className={styles.chartFilled}/>
                                <p className={styles.chartMark}>99%</p>
                            </div>
                        </div>
                        <div className={styles.chartContainer}>
                            <p className={styles.chartLabel}>Доля трудоустроенных выпускников</p>
                            <div className={styles.chart}>
                                <div className={styles.chartFilled}/>
                                <p className={styles.chartMark}>75%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <p className={styles.infoCardTitle}>Баллы ЕГЭ</p>
                    <div className={styles.infoCardParametrWrapper}>
                        <p className={styles.infoCardParametr}>Наличие золотой медали: +5 баллов</p>
                        <p className={styles.infoCardParametr}>Наличие золотого значка ГТО: +3 балла</p>
                        <p className={styles.infoCardParametr}>Волонтерство (более 100 часов): +3 балла</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {UniversityInfo}
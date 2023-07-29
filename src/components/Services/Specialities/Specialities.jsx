import React from "react";
import styles from './styles.module.scss'
import {data} from "./assets/data";
const Specialities = () => {

    const SpecTableRow = ({data}) => {
        return (
            <div>test</div>
        )
    }


    return (
        <div className={styles.specFlexWrapper}>
            <form className={styles.specForm}>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Сфера деятельности"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Предметы ЕГЭ"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Сумма оплаты"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Город вуза"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Поиск по вузу"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormInputContainer}>
                    <input className={styles.specFormInput} placeholder={"Цена"}/>
                    <div className={styles.specFormInputStroke}/>
                </div>
                <div className={styles.specFormButton}>
                    <p className={styles.specFormButtonText}>Поиск</p>
                </div>
            </form>

            <div className={styles.profContainer}>
                <p className={styles.profContainerTitle}>Узнай какая профессия подходит именно тебе!</p>
                <div className={styles.profContainerButton}>
                    <p className={styles.profContainerButtonText}>Пройти тест на профориентацию</p>
                </div>
            </div>

            <div className={styles.specTable}>
                {data.map((elem,index) => <SpecTableRow data={elem} key={index}/>)}
            </div>
        </div>
    )
}

export {Specialities}
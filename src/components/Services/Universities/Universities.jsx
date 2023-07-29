import React from "react";
import styles from './styles.module.scss'
import {data} from "./assets/data";
import {NavLink} from "react-router-dom";
const Universities = () => {

    const UniversityTableRow = ({data}) => {
        return (
            <div className={styles.tableRow}>
                <div className={styles.tableRowImageContainer}>
                    <img className={styles.tableRowImage} src={data.img}/>
                </div>
                <div className={styles.tableRowDescriptWrapper}>
                    <div className={styles.wrapper1}>
                        <p className={styles.tableRowTitle}>{data.name}</p>
                        <p className={styles.tableRowParagraph}>{data.description}</p>
                        <div className={styles.tableRowButton}>
                            <p className={styles.tableRowButtonText}>{data.amountProfiles} профилей обучения</p>
                        </div>
                    </div>
                    <div >
                        <div className={styles.tableRowParametersWrapper}>
                            <p className={styles.tableRowParameter}>от {data.parameters.ballBudget} бал. бюджет</p>
                            <p className={styles.tableRowParameter}>от {data.parameters.ballMoney} бал. платно</p>
                            <p className={styles.tableRowParameter}>{data.parameters.amountBudget} мест бюджет</p>
                            <p className={styles.tableRowParameter}>{data.parameters.amountMoney} мест платно</p>
                        </div>
                        <p className={styles.tableRowPrice}>от {data.parameters.price} тыс. рублей в год</p>
                    </div>
                </div>
            </div>
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

            <div className={styles.specTable}>
                {/*{data.map((elem,index) => <UniversityTableRow data={elem} key={index}/>)}*/}
            </div>
        </div>
    )
}

export {Universities}
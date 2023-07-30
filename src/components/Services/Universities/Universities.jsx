import React from "react";
import styles from './styles.module.scss'
import {data} from "./assets/data";
import {NavLink} from "react-router-dom";
const Universities = () => {

    const UniversityTableRow = ({data}) => {
        return (
            <div className={styles.tableRow}>
                <div className={styles.tableRowHeaderContainer}>
                    <div className={styles.flexWrap}>
                        <img className={styles.tableRowImage} src={data.img}/>
                        <div className={styles.tableRowHeaderContainerText}>
                            <p className={styles.tableRowHeaderText1}>{data.name}</p>
                            <p className={styles.tableRowHeaderText2}>{data.descript}</p>
                        </div>
                    </div>
                    <NavLink
                        className={styles.tableRowHeaderButton}
                        to={"../university_info"}
                    >
                        <p className={styles.tableRowHeaderButtonText}>Информация о вузе</p>
                    </NavLink>
                </div>
                <p className={styles.tableRowBodyInfo}>{data.info}</p>
                <div className={styles.tableRowBodyWrapper}>
                    <div className={styles.tableRowBodyWrapper2}>
                        <div className={styles.tableRowBodyWrapper3}>
                            <p className={styles.tableRowBodyInfoPlaces}>Количество платных мест в 2023 году</p>
                            <p className={styles.tableRowBodyLink}>Посмотреть</p>
                        </div>
                        <div className={styles.tableRowBodyWrapper3}>
                            <p className={styles.tableRowBodyInfoPlaces}>Стоимость обучения в год в 2023 году</p>
                            <p className={styles.tableRowBodyLink}>Посмотреть</p>
                        </div>
                    </div>
                    <p className={styles.tableRowBodyPrice}>Стоимость обучения от {data.price} тыс. рублей в год</p>
                </div>
                <NavLink
                    className={styles.tableRowBodyButton}
                    to={"/steps"}
                >
                    <p className={styles.tableRowBodyButtonText}>Пошаговое руководство поcтупления</p>
                </NavLink>
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
                {data.map((elem,index) => <UniversityTableRow data={elem} key={index}/>)}
            </div>
        </div>
    )
}

export {Universities}
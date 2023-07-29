import React from "react";
import styles from './styles.module.scss'
import {ReactComponent as Arrows} from "./assets/arrows.svg";
import {data} from "./assets/data";

const Loans = () => {

    const LoansTableRow = ({data}) => {
        return (
            <div className={styles.tableRow}>
                <div className={styles.tableRowImgContainer}>
                    <img className={styles.tableRowImg} src={data.img}/>
                </div>
                <div className={styles.tableRowDescriptContainer}>
                    <p className={styles.tableRowDescript}>{data.description}</p>
                    <p className={styles.tableRowPercent}>от {data.percent}%</p>
                </div>
                <p className={styles.tableRowPrice}>до {data.price} млн. рублей</p>
            </div>
        )
    }

    return (
        <div className={styles.loansFlexWrapper}>
            <form className={styles.loansForm}>
                <div className={styles.loansFormInputContainer}>
                    <input className={styles.loansFormInput} placeholder={"Сумма кредита от"}/>
                    <div className={styles.loansFormInputStroke}/>
                </div>
                <div className={styles.loansFormInputContainer}>
                    <input className={styles.loansFormInput} placeholder={"Первоначальный взнос от"}/>
                    <div className={styles.loansFormInputStroke}/>
                </div>
                <div className={styles.loansFormInputContainer}>
                    <input className={styles.loansFormInput} placeholder={"Срок погашения"}/>
                    <div className={styles.loansFormInputStroke}/>
                </div>
                <div className={styles.loansFormButton}>
                    <p className={styles.loansFormButtonText}>Поиск</p>
                </div>
            </form>

            <div className={styles.loansTable}>
                <div className={styles.loansTableRowDescript}>
                    <div className={styles.loansTableRowDescriptContainer}>
                        <Arrows className={styles.loansTableRowDescriptArrows}/>
                        <p className={styles.loansTableRowDescriptText}>Банк</p>
                    </div>
                    <div className={styles.loansTableRowDescriptContainer}>
                        <Arrows className={styles.loansTableRowDescriptArrows}/>
                        <p className={styles.loansTableRowDescriptText}>Программа и процентная ставка</p>
                    </div>
                    <div className={styles.loansTableRowDescriptContainer}>
                        <Arrows className={styles.loansTableRowDescriptArrows}/>
                        <p className={styles.loansTableRowDescriptText}>Сумма кредита</p>
                    </div>
                </div>
                <div className={styles.loansTableInner}>
                    {data.map((elem,index) => <LoansTableRow data={elem} key={index}/>)}
                </div>
            </div>
        </div>
    )
}

export {Loans}
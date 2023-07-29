import React from "react";
import styles from './styles.module.scss'
import {data} from './assets/data'
import {NavLink} from "react-router-dom";
const MyLoansApplication = () => {

    const ApplicationTableRow = ({data}) => {

        return (
            <div className={styles.applicationRow}>
                <p className={styles.applicationTitle}>{data.descript}</p>
                <p className={styles.applicationDates}>Дата регистрации: {data.registrData}</p>
                <p className={styles.applicationDates}>Дата ответа на заявку: {data.approveData}</p>
                <p className={styles.applicationStatus}>Статус заявки: {data.status}</p>
                <NavLink
                    to={"../my_loan_application_info"}
                    className={styles.applicationButton}
                >
                    <p className={styles.applicationButtonText}>Посмотреть подробную информацию</p>
                </NavLink>
            </div>
        )
    }

    return (
        <div className={styles.applicationsTable}>
            {data.map((elem,index) => <ApplicationTableRow data={elem} key={index}/>)}
        </div>
    )
}

export {MyLoansApplication}
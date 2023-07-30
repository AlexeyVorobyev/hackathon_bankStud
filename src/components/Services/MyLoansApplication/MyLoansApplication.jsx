import React from "react";
import styles from './styles.module.scss'
import {data} from './assets/data'
import {NavLink} from "react-router-dom";
const MyLoansApplication = () => {

    const ApplicationTableRow = ({data}) => {

        return (
            <div className={styles.applicationRow}>
                <p className={styles.applicationTitle}>{data.bank.description}</p>
                <p className={styles.applicationDates}>Дата регистрации: {data.dateTime}</p>
                <p className={styles.applicationDates}>Дата ответа на заявку: {data.dateTime}</p>
                <p className={styles.applicationStatus}>Статус заявки: {data.status.id === 1 ? "одобрено" : "завершено"}</p>
                <NavLink
                    to={"../my_loan_application_info"}
                    state={{
                        applicationId:data.id
                    }}
                    className={styles.applicationButton}
                >
                    <p className={styles.applicationButtonText}>Посмотреть подробную информацию</p>
                </NavLink>
            </div>
        )
    }

    const [applicationsDataBase,setApplicationsDataBase] = React.useState([]);
    const getApplicationsDataBase = async () => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/application`);
            const json = await response.json();
            console.log(json)
            setApplicationsDataBase(json);
        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() => {
        getApplicationsDataBase()
    },[])

    return (
        <div className={styles.applicationsTable}>
            {applicationsDataBase.map((elem,index) => <ApplicationTableRow data={elem} key={index}/>)}
        </div>
    )
}

export {MyLoansApplication}
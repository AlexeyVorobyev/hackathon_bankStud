import React from "react";
import styles from './styles.module.scss'
import {ReactComponent as ArrowDown} from "./assets/arowDown.svg";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
const MyLoanApplicationInfo = () => {

    const [applicationId,setApplicationId] = React.useState(null);
    const location = useLocation()

    const [applicationsDataBase,setApplicationsDataBase] = React.useState(null);

    const applicationDone = async (id) => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/application/${id}/completed`,{
                method:'post',
                body:null,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log(json)
        } catch (error) {

        }
    };

    const getApplicationDataBase = async (id) => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/application/${id}`);
            const json = await response.json();
            console.log(json.bank.description)
            setApplicationsDataBase(json);
        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() => {
        const {applicationId} = location.state
        setApplicationId(applicationId);
        console.log(applicationId);
        getApplicationDataBase(applicationId);
    },[])


    return (
        <div>
        { applicationsDataBase !== null && (<div className={styles.card}>
            <p className={styles.cardTitle}>{applicationsDataBase.bank.description}</p>
            <p className={styles.cardPercent}>Процентная ставка по кредиту: {applicationsDataBase.percent} %</p>
            <div className={styles.cardGrid}>
                <p className={styles.cardGridText}>Сумма кредита: {applicationsDataBase.amount} Р</p>
                <p className={styles.cardGridText}>Сумма к ежемесяной оплате: {Math.floor(applicationsDataBase.amount/applicationsDataBase.year/12)}</p>
                <p className={styles.cardGridText}>Срок: {applicationsDataBase.year} лет</p>
                <p className={styles.cardGridText}>Следующая оплата: Август</p>
            </div>
            <div className={styles.cardButtonsWrapper}>
                <a className={styles.applicationButton} href='https://www.dropbox.com/s/283qbchl90vfrc2/KD-potreb-bez-zaloga.pdf?dl=0' download>
                    <p className={styles.applicationButtonText}>Скачать договор</p>
                    <ArrowDown className={styles.buttonArrow}/>
                </a>
                {applicationsDataBase.status.id !== 2 && (<NavLink
                    onClick={() =>applicationDone(applicationId)}
                    className={styles.applicationButton}
                    to={"../my_loans_application"}
                >
                    <p className={styles.applicationButtonText}>Подписать договор через гос. услуги</p>
                </NavLink>)}
            </div>
        </div>)}
    </div>
    )
}

export {MyLoanApplicationInfo}
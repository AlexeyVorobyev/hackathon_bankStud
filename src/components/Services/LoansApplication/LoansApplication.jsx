import React from "react";
import styles from './styles.module.scss'
import {MySlider} from "./MySlider/MySlider";
import Bank from "./assets/bank.png"
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";

const sliderSettings1 = {
    width:"70%",
    min:100000,
    max:3000000,
    step:100000,
    defaultVal:500000,
    marks:[
        {
            value: 500000,
            label: '500 000',
        },
        {
            value: 1000000,
            label: '1 000 000',
        },
        {
            value: 1500000,
            label: '1 500 000',
        },
        {
            value: 2000000,
            label: '2 000 000',
        },
        {
            value: 2500000,
            label: '2 500 000',
        },
    ]
}

const sliderSettings2 = {
    width:"222px",
    min:1,
    max:15,
    step:1,
    defaultVal:3,
    marks:[
        {
            value: 2,
            label: '1 год',
        },
        {
            value: 14,
            label: '15 лет',
        }
    ]
}

const LoansApplication = () => {
    const [slider1,setSlider1] = React.useState(sliderSettings1.defaultVal);
    const [slider2,setSlider2] = React.useState(sliderSettings2.defaultVal);

    const [name,setName] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [mail,setMail] = React.useState("");

    const location = useLocation()

    const [loanDataBase,setLoanDataBase] = React.useState({});

    const getLoanDataBase = async (id) => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/bank/${id}`);
            const json = await response.json();
            console.log(json);
            setLoanDataBase(json)
        } catch (error) {
            alert(error);
        }
    };

    const postLoanDataBase = async (id,year,amount) => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/bank/create`,{
                method:'post',
                body: JSON.stringify({amount:amount,year:year,bankId:id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            alert(error);
        }
    };

    const [bankId,setBankId] = React.useState(null);

    React.useEffect(() => {
        const {bankId} = location.state
        setBankId(bankId);
        console.log(bankId);
        getLoanDataBase(bankId);
    },[])

    return (
        <section className={styles.loanApplicationSection}>
            <div className={styles.bankCard}>
                <img className={styles.bankImg} src={loanDataBase.image}/>
                <p className={styles.bankTitle}>Выгодный кредит для студентов экономической кафедры</p>
            </div>
            <div className={styles.stepsContainer}>
                <div className={styles.step}>
                    <div className={styles.stepEllipse}>
                        <p className={styles.stepNum}>1</p>
                    </div>
                    <p className={styles.stepText}>
                        Заполните онлайн-заявку и узнайте решение банка сразу
                    </p>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepEllipse}>
                        <p className={styles.stepNum}>2</p>
                    </div>
                    <p className={styles.stepText}>
                        Подпишите документы цифровой подписью и и подвердите условия
                    </p>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepEllipse}>
                        <p className={styles.stepNum}>3</p>
                    </div>
                    <p className={styles.stepText}>
                        Полная сумма кредита станет доступна после регистрации залога
                    </p>
                </div>
            </div>
            <div className={styles.applicationContainer}>
                <div className={styles.sliderContainer}>
                    <p className={styles.sliderTitle}>Желаемая сумма кредита</p>
                    <p className={styles.sliderVal}>{slider1} Р</p>
                    <MySlider settings={sliderSettings1} callback={(event) => setSlider1(event.target.value)}/>
                </div>
                <div className={styles.wrapperSlider}>
                    <div className={styles.sliderContainer}>
                        <p className={styles.sliderTitle}>Срок кредита</p>
                        <p className={styles.sliderVal}>{slider2} лет</p>
                        <MySlider settings={sliderSettings2} callback={(event) => setSlider2(event.target.value)}/>
                    </div>
                    <div>
                        <p className={styles.monthCaption}>Ежемесячный платеж</p>
                        <p className={styles.monthPrice}>{Math.floor(slider1/slider2/60/100)*100} Р</p>
                    </div>
                </div>
                <form className={styles.applicationForm}>
                    <p className={styles.formTitle}>Конактная информация</p>
                    <div className={styles.formGrid}>
                        <input
                            placeholder={"Фамилия, имя и отчество"}
                            className={styles.formInput}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            placeholder={"Мобильный телефон"}
                            className={styles.formInput}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                        <input
                            placeholder={"Эл. почта"}
                            className={styles.formInput}
                            onChange={(event) => setMail(event.target.value)}
                        />
                    </div>
                    <NavLink
                        style={{textDecoration:"none"}}
                        onClick={() => postLoanDataBase(bankId,slider2,slider1)}
                        className={styles.formButton}
                        to={"/services/my_loans_application"}
                    >
                        <p className={styles.formButtonText}>Подавть заявку</p>
                    </NavLink>
                </form>
            </div>
        </section>
    )
}

export {LoansApplication}
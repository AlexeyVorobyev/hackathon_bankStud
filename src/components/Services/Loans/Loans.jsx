import React from "react";
import styles from './styles.module.scss'
import {ReactComponent as Arrows} from "./assets/arrows.svg";
import {NavLink} from "react-router-dom";

const Loans = () => {

    const [loansData,setLoansData] = React.useState([])
    const getLoansDataBase = async () => {
        try {
            console.log(process.env.REACT_APP_API_HOST);
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/bank`);
            const json = await response.json();
            console.log(json)
            const sortedjson1 = json.filter((elem) => elem.id === 1)
            const sortedjson2 = json.filter((elem) => elem.id !== 1)
            const res = [...sortedjson1,...sortedjson2]
            console.log(sortedjson1,sortedjson2);
            setLoansData(res);
        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() => {
        getLoansDataBase();
    },[])

    const LoansTableRow = ({data}) => {
        return (
            <NavLink
                className={styles.tableRow}
                to={"../loans_application"}
                state={{
                    bankId:data.id
                }}
            >
                <div className={styles.tableRowImgContainer}>
                    <img className={styles.tableRowImg} src={data.image}/>
                </div>
                <div className={styles.tableRowDescriptContainer}>
                    <p className={styles.tableRowDescript}>{data.description}</p>
                    <p className={styles.tableRowPercent}>от {data.percent}%</p>
                </div>
                <p className={styles.tableRowPrice}>до {data.maxSum/1000000} млн. рублей</p>
            </NavLink>
        )
    }

    return (
        <section className={styles.loansFlexWrapper}>
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
                    {/*{data.map((elem,index) => <LoansTableRow data={elem} key={index}/>)}*/}
                    {loansData.map((elem,index) => <LoansTableRow data={elem} key={elem.id}/>)}
                </div>
            </div>
        </section>
    )
}

export {Loans}
import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import {data} from "../Steps/assets/data";
import {ReactComponent as Arrow} from "./assets/arrow.svg";
import {ReactComponent as ArrowElem} from "./assets/arrowElem.svg";
import classNames from "classnames";

const ApplicationsTableRow = ({data,pos}) => {

    const [open,setOpen] = React.useState(false);

    return (
        <>
            <div className={styles.tableRowWrapper}>
                <div className={styles.tableRowEllipseContainer}>
                    <div className={styles.tableRowEllipse}/>
                </div>
                <div className={styles.tableRowHeaderBodyWrapper}>
                    <div className={styles.tableRowHeader} onClick={() => setOpen(!open)}>
                        <p className={styles.universityName}>{`${pos}. ${data.name}`}</p>
                        {data.canOpen && (<ArrowElem/>)}
                    </div>
                    {open && data.canOpen && (<div className={styles.tableRowStats}>
                        <div className={styles.treeListWrap}>
                            <p className={styles.treeListTitle}>Документы, необходимые для заполнения:</p>
                            <ul className={styles.treeList}>
                                <li className={styles.treeListElem}>Заявление подающего в соответствии с образцом.</li>
                                <li className={styles.treeListElem}>Согласие на обработку персональных данных.</li>
                                <li className={styles.treeListElem}>Согласие на распространение персональных данных.</li>
                            </ul>
                        </div>
                        <div className={styles.orderButton}>
                            <p className={styles.orderButtonText}>Скачать образец заполнения</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

const Steps = () => {
    return (
        <section className={styles.applicationsSection}>
            <div className={styles.applicationsHeader}>
                <div>
                    <p className={styles.applicationsTitle}>Пошаговое руководство</p>
                    <p className={styles.applicationsSubtitle}>Подача документов в ВУЗ (20-25 июля)</p>
                </div>
                <NavLink
                    to={"/cabinet"}
                    className={styles.applicationsHeaderLink}
                >
                    <p>Обратно</p>
                    <Arrow/>
                </NavLink>
            </div>
            <div className={styles.applicationsTable}>
                <div className={styles.stroke}/>
                {data.map((elem,index) => <ApplicationsTableRow data={elem} key={index} pos={index + 1}/>)}
            </div>
        </section>
    )
}

export {Steps}
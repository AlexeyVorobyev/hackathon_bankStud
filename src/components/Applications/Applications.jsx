import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from './assets/arrow.svg';
import {ReactComponent as ArrowSmall} from './assets/ArrowSmall.svg';
import {ReactComponent as Plus} from './assets/plus.svg';
import {data} from "./assets/data";
import classNames from "classnames";
const ApplicationsTableRow = ({data,pos}) => {

    const UserRow = ({data}) => {

        return (
            <div className={styles.userRow}>
                <div className={styles.userRowWrapper}>
                    <p className={classNames(styles.userPlace, data.yourself ? styles.userPlaceYou : styles.userPlaceNotYou)}>{data.userPlace}</p>
                    <p className={styles.userName}>{data.name}</p>
                </div>
                <p className={classNames(styles.userSum, data.yourself ? styles.userSumYou : styles.userSumNotYou)}>{data.sum}</p>
                <div className={classNames(styles.userStroke, data.yourself ? styles.userStrokeYou : styles.userStrokeNotYou)}/>
            </div>
        )
    }

    const [open,setOpen] = React.useState(false);

    return (
        <div className={styles.tableRowWrapper}>
            <div className={styles.tableRowHeader} onClick={() => setOpen(!open)}>
                <p className={styles.universityName}>{`${pos}. ${data.name}`}</p>
                <div className={styles.quickFix}>
                    <p className={styles.universityPlace}>{data.userPlace}</p>
                    <a className={styles.universityLink} href={data.link}>
                        <p className={styles.universityLinkText}>Перейти на сайт университета</p>
                        <ArrowSmall/>
                    </a>
                </div>
            </div>
            {open && (<div className={styles.tableRowStats}>
                {data.users.map((elem,index) => <UserRow data={elem} key={index}/>)}
            </div>)}
        </div>
    )
}
const Applications = () => {
    return (
        <section className={styles.applicationsSection}>
            <div className={styles.applicationsHeader}>
                <p className={styles.applicationsTitle}>Поданные заявления</p>
                <NavLink
                    to={"/cabinet"}
                    className={styles.applicationsHeaderLink}
                >
                    <p>Обратно</p>
                    <Arrow/>
                </NavLink>
            </div>
            <div className={styles.applicationsTable}>
                <div className={styles.applicationsTableDescriptRow}>
                    <p className={styles.applicationsTableDescriptField}>Название ВУЗа</p>
                    <p className={styles.applicationsTableDescriptField}>Место в списке на поступление</p>
                </div>
                {data.map((elem,index) => <ApplicationsTableRow data={elem} key={index} pos={index + 1}/>)}
                <div className={styles.tableRowHeaderUniversity} >
                    <p className={styles.tableRowTitle}>Подать документы в ВУЗ</p>
                    <Plus className={styles.tableRowPlusSvg}/>
                </div>
            </div>
        </section>
    )
}

export {Applications}
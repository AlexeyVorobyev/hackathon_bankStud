import React from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ReactComponent as SwiperButtonNext} from "./assets/triangle.svg";
import {ReactComponent as CloudBig} from "./assets/cloudBig.svg";
import {ReactComponent as CloudSmall} from "./assets/cloudSmall.svg";
import {ReactComponent as ListSvg} from "./assets/typcn_th-list.svg";

const SwiperPaginationDot = ({isActive, setSwiperState,keyVal}) => {
    if (isActive) {
        return (
            <div className={classNames(styles.swiperPaginationDot,styles.swiperPaginationDotActive)}></div>
        )
    }
    else {
        return (
            <div
                className={classNames(styles.swiperPaginationDot,styles.swiperPaginationDotDisActive)}
                onClick={() => setSwiperState(parseInt(keyVal))}
            ></div>
        )
    }
}
const SwiperSlide = ({keyVal}) => {
    switch (keyVal) {
        case 1:
            return (
                <>
                    <p className={styles.slideTitle}>До 10% годовых</p>
                    <p className={styles.slideParagraph}>По вкладу студенческого процента</p>
                    <CloudSmall className={styles.slideCloudSmall}/>
                    <CloudBig className={styles.slideCloudBig}/>
                    <div className={styles.slideButton}>
                        <p className={styles.slideButtonText}>Открыть вклад</p>
                    </div>
                </>
            )
            break
        case 2:
            return (
                <>
                    <p className={styles.slideTitle}>Кредит без залога и поручителей</p>
                    <p className={styles.slideParagraph}>Для оформления нужен только паспорт. Подтверждение дохода не требуется!</p>
                    <ListSvg className={styles.slideListSvg}/>
                    <div className={styles.slideButton}>
                        <p className={styles.slideButtonText}>Открыть вклад</p>
                    </div>
                </>
            )
            break
        case 3:
            return (
                <>
                    <p className={styles.slideTitle}>До 10% годовых</p>
                    <p className={styles.slideParagraph}>По вкладу студенческого процента</p>
                    <CloudSmall className={styles.slideCloudSmall}/>
                    <CloudBig className={styles.slideCloudBig}/>
                    <div className={styles.slideButton}>
                        <p className={styles.slideButtonText}>Открыть вклад</p>
                    </div>
                </>
            )
            break
        case 4:
            return (
                <>
                    <p className={styles.slideTitle}>До 10% годовых</p>
                    <p className={styles.slideParagraph}>По вкладу студенческого процента</p>
                    <CloudSmall className={styles.slideCloudSmall}/>
                    <CloudBig className={styles.slideCloudBig}/>
                    <div className={styles.slideButton}>
                        <p className={styles.slideButtonText}>Открыть вклад</p>
                    </div>
                </>
            )
            break
    }
}
const Swiper = () => {

    const swiperSize = 4;
    const [swiperState, setSwiperState] = React.useState(1);

    return (
        <div className={styles.swiperContainer}>
            { swiperState < swiperSize &&(<SwiperButtonNext
                className={styles.swiperButton}
                onClick={() => setSwiperState(swiperState + 1)}
            />)}
            <div className={styles.swiper}>
                <SwiperSlide key={swiperState} keyVal={swiperState}/>
            </div>
            <div className={styles.swiperPagination}>
                {(() => {
                    const arr = [];
                    for (let i = 1; i <= swiperSize; i++) {
                        if (i === swiperState) arr.push(<SwiperPaginationDot isActive={true} setSwiperState={setSwiperState} key={i}/>)
                        else arr.push(<SwiperPaginationDot isActive={false} setSwiperState={setSwiperState} key={i} keyVal={i}/>)
                    }
                    return arr;
                })()}
            </div>
        </div>
    )
}

export {Swiper}
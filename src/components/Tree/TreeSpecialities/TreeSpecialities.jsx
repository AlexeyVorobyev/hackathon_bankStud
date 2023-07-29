import React from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ReactComponent as Plane} from './assets/plane.svg';
import {ReactComponent as Docs} from './assets/docs.svg';
import {ReactComponent as Question} from './assets/ic_baseline-help.svg';
import {ReactComponent as Idea} from './assets/zondicons_light-bulb.svg';
import {ReactComponent as Dudes} from './assets/fa-solid_user-friends.svg';
import {ReactComponent as Acropol} from './assets/uil_university.svg';
import {ReactComponent as Hat} from './assets/uil_university.svg';
import {NavLink} from "react-router-dom";


const TreeSpecNode = ({title, isDone, Icon, coords}) => {
    return (
        <div className={styles.node} style={{
            gridColumnStart:coords[0],
            gridColumnEnd:coords[1],
            gridRowStart:coords[2],
            gridRowEnd:coords[3],
        }}>
            <div className={classNames(styles.nodeIconWrapper,isDone ? styles.nodeIconWrapperDone : styles.nodeIconWrapperUnDone)}>
                <Icon/>
            </div>
            <p className={styles.nodeTitle}>{title}</p>
        </div>
    )
}
const TreeSpecialities = () => {
    return (
        <>
            <div className={styles.treeSpecDescriptWrapper}>
                <p className={styles.treeSpecDescript}>Актуальность: для отечественной бизнес сферы эта профессия достаточно новая, однако, очень востребованная</p>
                <p className={styles.treeSpecDescript}>Для кого подходит: профессия инноватика предъявляет требования к креативности, оригинальному мышлению и т.п.</p>
            </div>
            <div className={styles.treeSpecGrid}>
                <TreeSpecNode
                    title={"Бакалавриат “Инноватика”"}
                    isDone={true}
                    Icon={Docs}
                    coords={[1,2,2,4]}
                />
                <TreeSpecNode
                    title={"Магистратура “Инноватика”"}
                    isDone={false}
                    Icon={Plane}
                    coords={[2,3,2,4]}
                />
                <TreeSpecNode
                    title={"Сотрудник отдела “Инноватика”"}
                    isDone={false}
                    Icon={Question}
                    coords={[3,4,1,3]}
                />
                <TreeSpecNode
                    title={"Аспирант отдела “Инноватика”"}
                    isDone={false}
                    Icon={Idea}
                    coords={[3,4,3,5]}
                />
                <TreeSpecNode
                    title={"Менеджер отдела “Инноватика”"}
                    isDone={false}
                    Icon={Dudes}
                    coords={[4,5,1,3]}
                />
                <TreeSpecNode
                    title={"Менеджер отдела “Инноватика”"}
                    isDone={false}
                    Icon={Acropol}
                    coords={[4,5,3,5]}
                />
                <TreeSpecNode
                    title={"Директор отдела “Инноватика”"}
                    isDone={false}
                    Icon={Hat}
                    coords={[5,6,2,4]}
                />
            </div>
            <NavLink className={styles.treeSpecButton}
                to={"../tree_specialities_descript"}
            >
                <p className={styles.treeSpecButtonText}>Основная информация о специальности</p>
            </NavLink>
        </>
    )
}

export {TreeSpecialities}
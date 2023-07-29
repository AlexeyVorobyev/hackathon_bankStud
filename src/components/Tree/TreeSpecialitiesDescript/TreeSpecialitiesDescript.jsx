import React from "react";
import styles from './styles.module.scss'
const TreeSpecialitiesDescript = () => {
    return (
        <div className={styles.treeDescriptFlex}>
            <div className={styles.treeDescriptComp}>
                <p className={styles.treeDescriptTitle}>Востребованность профессии</p>
                <div className={styles.treeDescriptParWrap}>
                    <div className={styles.treeDescriptDot}/>
                    <p className={styles.treeDescriptPar}>Профессия инновационного менеджера для отечественной бизнес-сферы достаточно новая. Рынок труда по данной профессии находится в стадии формирования.</p>
                </div>
            </div>
            <div className={styles.treeDescriptComp}>
                <p className={styles.treeDescriptTitle}>Для кого подходит</p>
                <div className={styles.treeDescriptParWrap}>
                    <div className={styles.treeDescriptDot}/>
                    <p className={styles.treeDescriptPar}>Помимо компетенции по направлению деятельности, необходимо проявлять креативность, оригинальный подход к решению производственных задач.</p>
                </div>
                <div className={styles.treeListWrap}>
                    <p className={styles.treeListTitle}>Профессия подходит тем, кто:</p>
                    <ul className={styles.treeList}>
                        <li className={styles.treeListElem}>Имеет высокий интеллект, развитую речь, эрудицию</li>
                        <li className={styles.treeListElem}>Умеет нестандартно мыслить, предлагать оригинальные идеи</li>
                        <li className={styles.treeListElem}>Способен мобилизоваться в умственной деятельности</li>
                        <li className={styles.treeListElem}>Умеет работать в команде, участвовать в «мозговом штурме»</li>
                        <li className={styles.treeListElem}>Обладает организаторскими способностями, общителен, коммуникабелен</li>
                    </ul>
                </div>
            </div>
            <div className={styles.treeDescriptComp}>
                <p className={styles.treeDescriptTitle}>Обязанности</p>
                <div className={styles.treeDescriptParWrap}>
                    <div className={styles.treeDescriptDot}/>
                    <p className={styles.treeDescriptPar}>В обязанности инновационного менеджера входит:</p>
                </div>
                <div className={styles.treeListWrap}>
                    <ul className={styles.treeList}>
                        <li className={styles.treeListElem}>Изучение рынка товаров или услуг по направлению деятельности компании</li>
                        <li className={styles.treeListElem}>Разработка бизнес-планов, программ по модернизации производственный деятельности предприятия</li>
                        <li className={styles.treeListElem}>Мониторинг рынка или профессиональной среды на предмет появления новых технологий, административных приемов и другой информации по экономической деятельности</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {TreeSpecialitiesDescript}
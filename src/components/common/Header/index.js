import React from 'react';
import Image from 'next/image';

import logo from 'static/logo.png'

import styles from 'components/common/Header/style.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.body}>
                <div className={styles.logo}>
                    Logo
                </div>
                <div className={styles.menu}>
                    <span className={styles.item}>Главная</span>
                    <span className={styles.item}>Теория</span>
                    <span className={styles.item}>Тесты</span>
                    <span className={styles.item}>Блог</span>
                </div>
            </div>
            <hr className={styles.hr}/>
        </header>
    );
}

export default Header;

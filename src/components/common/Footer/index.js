import React from 'react';

import styles from 'components/common/Footer/style.module.scss';

function Footer() {
    const onCkickEmail = () => {
        window.location = 'mailto:Iisus.Help@gmail.com';
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={styles.menu}>
                    <span className={styles.item}>Главная</span>
                    <span className={styles.item}>Теория</span>
                    <span className={styles.item}>Тесты</span>
                    <span className={styles.item}>Блог</span>
                </div>
                <div className={styles.contact}>
                    <div className={styles.text}>Для связи с администрацией:</div>
                    <div className={styles.email} onClick={onCkickEmail}>Iisus.Help@gmail.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

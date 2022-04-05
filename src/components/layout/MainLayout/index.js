import React from 'react';

import { Header, Footer } from 'components/common';

import styles from 'components/layout/MainLayout/style.module.scss';

function MainLayout({ children }) {
    return (
        <div className={styles.main}>
            <Header />
                <div className={styles.body}>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;

import React from 'react';

import styles from 'components/page/Main/Body/style.module.scss';

function Body({ children }) {
    return <div className={styles.body}>{children}</div>;
}

export default Body;

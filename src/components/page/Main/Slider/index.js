import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import photo1 from 'static/Photo1forCarusel.jpg'
import photo2 from 'static/Photo2.png'
import photo3 from 'static/Photo3.jpg'
import photo4 from 'static/Photo4.jpg'

import styles from './style.module.scss';

function Slider() {
    const slides = [
        {
            slide: photo1,
            text: "Узнавай новое",
        },
        {
            slide: photo2,
            text: "Проходи тесты",
        },
        {
            slide: photo3,
            text: "Читай блог",
        },
        {
            slide: photo4,
            text: "Развивайся",
        },
    ];
    const [active, setActive] = useState(0);
    const max = slides.length;

    const next = () => active < max - 1 && setActive(active + 1)
    const prev = () => active > 0 && setActive(active - 1)

    const setSliderStyles = () => {
        const transition = active * - 100;

        return {
            width: (slides.length * 100) + 'vw',
            transform: 'translateX(' + transition + 'vw)'
        }
    }

    return (
        <section className={styles.slider}>
            <div className={styles.wrapper}>
                <div className={styles.slides} style={setSliderStyles()}>
                    {slides.map((item, index) => (
                        <div
                            className={styles.slide}
                            key={index}
                        >
                            <Image src={item.slide} width={1320} height={450} />
                            <div className={styles.textBlock}><span>{item.text}</span></div>
                        </div>
                    ))}
                </div>
            </div>

            <>
                <button
                    type='button'
                    className={classNames(styles.arrows, styles.prev)}
                    onClick={prev} >
                    {"<"}
                </button>
                <button
                    type='button'
                    className={classNames(styles.arrows, styles.next)}
                    onClick={next} >
                    {">"}
                </button>
            </>
        </section>
    );
}

export default Slider;

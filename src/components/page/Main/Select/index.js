import React, { useState } from 'react';

import styles from 'components/page/Main/Select/style.module.scss';

function Select() {
    const [active,setActive] = useState(false)

    const onClickSelect = (name)=>{
        setActive(name)
    }

    return <div className={styles.select}>
        <div>
            <span onClick={()=>onClickSelect('first')}>О нас:</span>
            {
                active === 'first' && 
                <div>Сайт реализован студенткой в целях дипломной работы. ProTEst - сайт для начинающих тестироващиков. Наш сайт позволяет изучить теоритический материал и закрепить знания в виде тестовых заданий.</div>
            }
        </div>
        <div>
            <span onClick={()=>onClickSelect('two')}>Зачем?</span>
            {
                active==='two' && 
                <div>Сайт позволяет бесплатно ознакомиться с профессией ручного тестирования, а так же прочитать мой блог, в котором я делюсь своими мыслями и опытом.</div>
            }
        </div>
        <div>
            <span onClick={()=>onClickSelect('third')}>Тестирование?</span>
            {
                active === 'third' &&
                <div>Тестирование вкдючает в себя проверку соответствия между реальным и ожидаемым поведением программы, осуществляемая на конечном наборе тестов, выбранном определенным образом.</div>
            }
        </div>
        <div>
            <span onClick={()=>onClickSelect('four')}>Цель тестирования.</span>
            {
                active === 'four' &&
                <div>Нахождение ошибок в программе до того, как их найдут пользователи.</div>
            }
        </div>
    </div>;
}

export default Select;

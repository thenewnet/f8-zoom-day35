import { useState } from 'react';
import clsx from 'clsx';

import styles from './Counter.module.scss';

function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1 className={styles.title}>Counter App</h1>
            <h2 className={clsx(styles.title, {
                [styles.zero]: number === 0,
                [styles.positive]: number > 0,
                [styles.negative]: number < 0
            })}
            >
                {number}
            </h2>

            <button onClick={() => { setNumber(number - 1) }}>
                Giảm (-1)
            </button>
            <button onClick={() => { setNumber(0) }}>
                Reset (0)
            </button>
            <button onClick={() => { setNumber(number + 1) }}>
                Tăng (+1)
            </button>

            <div className={styles.message}>
                {number === 0 ? "Bằng 0" : number > 0 ? "Dương" : "Âm"}
            </div>
        </>
    );
}

export default Counter;
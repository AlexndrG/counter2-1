import React, {useState} from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

const MAX_COUNTER_VALUE = 5
const MIN_COUNTER_VALUE = 0

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        if (counter < MAX_COUNTER_VALUE) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className={s.main}>
            <div className={s.counter}>

                <Display
                    text={counter.toString()}
                    error={counter >= MAX_COUNTER_VALUE}
                />

                <div className={s.buttons}>
                    <Button
                        name={'Inc'}
                        disabled={counter >= MAX_COUNTER_VALUE}
                        callback={increment}
                    />

                    <Button
                        name={'Reset'}
                        disabled={counter === MIN_COUNTER_VALUE}
                        callback={reset}
                    />
                </div>
            </div>
        </div>
    )
}
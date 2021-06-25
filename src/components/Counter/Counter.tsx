import React, {useState} from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

const MAX_COUNTER_VALUE = 5

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
                    counterValue={counter}
                    maxValue={MAX_COUNTER_VALUE}
                />

                <div className={s.buttons}>
                    <Button
                        name={'Inc'}
                        counterValue={counter}
                        disableValue={MAX_COUNTER_VALUE}
                        callback={increment}
                    />

                    <Button
                        name={'Reset'}
                        counterValue={counter}
                        disableValue={0}
                        callback={reset}
                    />
                </div>
            </div>
        </div>
    )
}
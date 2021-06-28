import React, {useState} from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

type CounterPropsType = {
    minValue: number
    maxValue: number
    text: string
    error: boolean
}

export const Counter = (props: CounterPropsType) => {
    const [counter, setCounter] = useState<number>(props.minValue)

    if (props.minValue > counter) {
        setCounter(props.minValue)
    }

    if (props.maxValue < counter) {
        setCounter(props.maxValue)
    }

    const increment = () => {
        if (counter < props.maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(props.minValue)
    }

    return (
        <div className={s.main}>

            <Display
                counterValue={counter}
                text={props.text}
                error={props.error || counter >= props.maxValue}
            />

            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    disabled={!!props.text || counter >= props.maxValue}
                    callback={increment}
                />

                <Button
                    name={'Reset'}
                    disabled={!!props.text || counter === props.minValue}
                    callback={reset}
                />
            </div>

        </div>
    )
}
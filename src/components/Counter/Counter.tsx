import React from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

type CounterPropsType = {
    counter: number
    minValue: number
    maxValue: number
    text: string
    error: boolean
    setCounterValue: (value: number) => void
}

export const Counter = (props: CounterPropsType) => {
    const increment = () => {
        if (props.counter < props.maxValue) {
            props.setCounterValue(props.counter + 1)
        }
    }

    const reset = () => {
        props.setCounterValue(props.minValue)
    }

    return (
        <div className={s.main}>

            <Display
                counterValue={props.counter}
                text={props.text}
                error={ !!props.text ? props.error : props.counter >= props.maxValue}
            />

            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    disabled={!!props.text || props.counter >= props.maxValue}
                    callback={increment}
                />

                <Button
                    name={'Reset'}
                    disabled={!!props.text || props.counter === props.minValue}
                    callback={reset}
                />
            </div>

        </div>
    )
}
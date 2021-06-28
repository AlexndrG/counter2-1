import React, {useState} from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

type CounterWithParamsPropsType = {
    min: number
    max: number
}

export const CounterWithParams = (props: CounterWithParamsPropsType) => {
    const [minValue, setMinValue] = useState<number>(props.min)
    const [maxValue, setMaxValue] = useState<number>(props.max)
    const [text, setText] = useState('')
    const [textError, setTextError] = useState(false)

    const changeMinValue = (value: number) => {
        setMinValue(value)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }

    return (
        <div className={s.main}>
            <CounterSettings
                minValue={minValue}
                maxValue={maxValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
            />

            <Counter
                minValue={minValue}
                maxValue={maxValue}
                text={text}
                textError={textError}
            />
        </div>
    )
}
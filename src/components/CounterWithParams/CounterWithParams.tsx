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
    const [error, setError] = useState(false)

    const makeMessage = (text: string, error: boolean) => {
        setError(error)
        setText(text)
    }

    const changeValues = (minValue: number, maxValue: number) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        makeMessage('',false)
    }

    return (
        <div className={s.main}>
            <CounterSettings
                minValue={minValue}
                maxValue={maxValue}
                changeValues={changeValues}
                makeMessage={makeMessage}
            />

            <Counter
                minValue={minValue}
                maxValue={maxValue}
                text={text}
                error={error}
            />
        </div>
    )
}
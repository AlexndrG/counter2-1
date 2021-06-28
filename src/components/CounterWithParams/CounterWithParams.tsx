import React, {useState} from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

type CounterWithParamsPropsType = {
    min: number
    max: number
}

export const CounterWithParams = (props: CounterWithParamsPropsType) => {
    const [counter, setCounter] = useState<number>(props.min)
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
        setCounter(minValue)
        makeMessage('',false)
    }

    const setCounterValue = (value: number) => {
        setCounter(value)
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
                counter={counter}
                minValue={minValue}
                maxValue={maxValue}
                text={text}
                error={error}
                setCounterValue={setCounterValue}
            />
        </div>
    )
}
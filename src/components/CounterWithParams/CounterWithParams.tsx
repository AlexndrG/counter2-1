import React, {useEffect, useState} from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

const INIT_MIN_VALUE = 0;
const INIT_MAX_VALUE = 5;

const MIN_VALUE_NAME = 'CounterMinValue_Name'
const MAX_VALUE_NAME = 'CounterMaxValue_Name'

export const CounterWithParams = () => {
    let min = INIT_MIN_VALUE
    let max = INIT_MAX_VALUE

    const inintValues = () => {
        const minString = localStorage.getItem(MIN_VALUE_NAME)
        const maxString = localStorage.getItem(MAX_VALUE_NAME)

        if (minString && maxString) {
            let minValue = JSON.parse(minString)
            let maxValue = JSON.parse(maxString)

            if (minValue >= 0 && maxValue > minValue) {
                min = minValue
                max = maxValue
            }
        }
    }
    inintValues()


    const [counter, setCounter] = useState<number>(min)
    const [minValue, setMinValue] = useState<number>(min)
    const [maxValue, setMaxValue] = useState<number>(max)
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
        makeMessage('', false)
        localStorage.setItem(MIN_VALUE_NAME, JSON.stringify(minValue))
        localStorage.setItem(MAX_VALUE_NAME, JSON.stringify(maxValue))
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
import React, {useEffect, useState} from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

const INIT_MIN_VALUE = 0;
const INIT_MAX_VALUE = 5;

const MIN_VALUE_NAME = 'CounterMinValue_Name'
const MAX_VALUE_NAME = 'CounterMaxValue_Name'

export const CounterWithParams = () => {
    const [counter, setCounter] = useState<number>(INIT_MIN_VALUE)
    const [minValue, setMinValue] = useState<number>(INIT_MIN_VALUE)
    const [maxValue, setMaxValue] = useState<number>(INIT_MAX_VALUE)
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const [currentMinValue, setCurrentMinValue] = useState<number>(INIT_MIN_VALUE)
    const [currentMaxValue, setCurrentMaxValue] = useState<number>(INIT_MIN_VALUE)


    useEffect(() => {
        const minString = localStorage.getItem(MIN_VALUE_NAME)
        const maxString = localStorage.getItem(MAX_VALUE_NAME)

        if (minString && maxString) {
            const minNumber = JSON.parse(minString)
            const maxNumber = JSON.parse(maxString)

            if (minNumber >= 0 && maxNumber > minNumber) {
                setCounter(minNumber)
                setMinValue(minNumber)
                setMaxValue(maxNumber)
                setCurrentMinValue(minNumber)
                setCurrentMaxValue(maxNumber)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(MIN_VALUE_NAME, JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem(MAX_VALUE_NAME, JSON.stringify(maxValue))
    }, [maxValue])

    const makeMessage = (text: string, error: boolean) => {
        setError(error)
        setText(text)
    }

    const changeValues = (minValue: number, maxValue: number) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        setCounter(minValue)
        makeMessage('', false)
    }

    const setCounterValue = (value: number) => {
        setCounter(value)
    }

    return (
        <div className={s.main}>
            <CounterSettings
                minValue={currentMinValue}
                maxValue={currentMaxValue}
                changeValues={changeValues}
                makeMessage={makeMessage}
                currentMinValue = {currentMinValue}
                currentMaxValue = {currentMaxValue}
                setCurrentMinValue={(value) => setCurrentMinValue(value)}
                setCurrentMaxValue={(value) => setCurrentMaxValue(value)}
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
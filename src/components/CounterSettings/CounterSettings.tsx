import React, {useState} from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    changeValues: (minValue: number, maxValue: number) => void
    makeMessage: (text: string, error: boolean) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
    const [currentMinValue, setCurrentMinValue] = useState<number>(props.minValue)
    const [currentMaxValue, setCurrentMaxValue] = useState<number>(props.maxValue)
    const [minError, setMinError] = useState<boolean>(false)
    const [maxError, setMaxError] = useState<boolean>(false)


    const checkError = (minValue: number, maxValue: number) => {
        const minError = minValue < 0 || minValue >= maxValue
        const maxError = maxValue < 0 || maxValue <= minValue
        setMinError(minError)
        setMaxError(maxError)

        const error = minError || maxError
        setButtonDisabled(error)
        if (error) {
            props.makeMessage('Incorrect value!', true)
        } else {
            props.makeMessage(`EnterValues and press 'Set'`, false)
        }
    }

    const changeMaxValue = (value: number) => {
        setCurrentMaxValue(value)
        checkError(currentMinValue, value)
    }

    const changeMinValue = (value: number) => {
        setCurrentMinValue(value)
        checkError(value, currentMaxValue)
    }

    const setParameters = () => {
        setButtonDisabled(true)
        props.changeValues(currentMinValue, currentMaxValue)
    }


    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value:'}
                    value={currentMaxValue}
                    changeValue={changeMaxValue}
                    error={maxError}
                />

                <Changer
                    text={'start value:'}
                    value={currentMinValue}
                    changeValue={changeMinValue}
                    error={minError}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={buttonDisabled}
                    callback={setParameters}
                />
            </div>

        </div>
    )
}
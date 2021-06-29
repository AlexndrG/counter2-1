import React, {useState} from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';

type CounterSettingsPropsType = {
    changeValues: (minValue: number, maxValue: number) => void
    makeMessage: (text: string, error: boolean) => void
    currentMinValue: number
    currentMaxValue: number
    setCurrentMinValue: (value: number) => void
    setCurrentMaxValue: (value: number) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
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
        props.setCurrentMaxValue(value)
        checkError(props.currentMinValue, value)
    }

    const changeMinValue = (value: number) => {
        props.setCurrentMinValue(value)
        checkError(value, props.currentMaxValue)
    }

    const setParameters = () => {
        setButtonDisabled(true)
        props.changeValues(props.currentMinValue, props.currentMaxValue)
    }


    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value:'}
                    value={props.currentMaxValue}
                    changeValue={changeMaxValue}
                    error={maxError}
                />

                <Changer
                    text={'start value:'}
                    value={props.currentMinValue}
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
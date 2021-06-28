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
    const [errorMin, setErrorMin] = useState<boolean>(false)
    const [errorMax, setErrorMax] = useState<boolean>(false)


    const selectMinValue = (value: number) => {
        setCurrentMinValue(value)
        if (value < 0 || value >= currentMaxValue) {
            setButtonDisabled(true)
            props.makeMessage('Incorrect value!', true)
            setErrorMin(true)
        } else {
            setButtonDisabled(false)
            props.makeMessage(`enter values and press 'Set'`, false)
            setErrorMin(false)
        }
    }

    const selectMaxValue = (value: number) => {
        setCurrentMaxValue(value)
        if (value < 0 || value <= currentMinValue) {
            setButtonDisabled(true)
            props.makeMessage('Incorrect value!', true)
            setErrorMax(true)
        } else {
            setButtonDisabled(false)
            props.makeMessage(`enter values and press 'Set'`, false)
            setErrorMax(false)
        }
    }

    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value:'}
                    value={currentMaxValue}
                    selectValue={selectMaxValue}
                    error={errorMax}
                />

                <Changer
                    text={'start value:'}
                    value={currentMinValue}
                    selectValue={selectMinValue}
                    error={errorMin}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={buttonDisabled}
                    callback={()=>props.changeValues(currentMinValue, currentMaxValue)}
                />
            </div>

        </div>
    )
}
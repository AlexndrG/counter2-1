import React from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value'}
                    value={props.maxValue}
                    changeValue={props.changeMaxValue}
                />

                <Changer
                    text={'start value'}
                    value={props.minValue}
                    changeValue={props.changeMinValue}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={false}
                    callback={() => {
                    }}
                />
            </div>

        </div>
    )
}
import React from 'react';
import { ChangeEvent } from 'react';
import s from './Changer.module.css'

type ChangerPropsType = {
    text: string
    value: number
    selectValue: (value: number) => void
    error: boolean
}

export const Changer = (props: ChangerPropsType) => {
    const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.selectValue(e.currentTarget.valueAsNumber)
    }

    return (
        <div className={s.main}>
            <div className={s.name}>
                {props.text}
            </div>
            <input
                className={`${s.input}  ${props.error ? s.error : ''}`}
                type={'number'}
                value={props.value}
                onChange={onChangeValue}
            />
        </div>
    )
}
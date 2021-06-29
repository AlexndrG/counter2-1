import React, { ChangeEvent } from 'react';
import s from './Changer.module.css'

type ChangerPropsType = {
    text: string
    value: number
    changeValue: (value: number) => void
    error: boolean
}

export const Changer = (props: ChangerPropsType) => {
    const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.valueAsNumber)
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
import React from 'react';
import s from './Display.module.css'

type PropsType = {
    error: boolean
    text: string
}

export const Display = (props: PropsType) => {

    return (
        <div className={`${s.display} ${props.error ? s.error : ''}`}>
            {props.text}
        </div>
    )
}
import React from 'react';
import s from './Display.module.css'

type PropsType = {
    counterValue: number
    maxValue: number
}

export const Display = (props: PropsType) => {

    return (
        <div className={`${s.display} ${props.counterValue === props.maxValue ? s.finish : ''}`}>
            {props.counterValue}
        </div>
    )
}
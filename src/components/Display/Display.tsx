import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counterValue: number
    text: string
    error: boolean
}

export const Display = (props: DisplayPropsType) => {
    let displayValue = props.text
    let addClassName = s.textOK

    if (props.text) {
        if (props.error) {
            addClassName += ' ' + s.textError
        }
    } else {
        displayValue = props.counterValue.toString()
        addClassName = s.counterOK
        if (props.error) {
            addClassName = s.counterFinish
        }
    }

    return (
        <div className={s.display + ' ' + addClassName}>
            {displayValue}
        </div>
    )
}
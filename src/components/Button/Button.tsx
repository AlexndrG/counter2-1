import React from 'react';
import s from './Button.module.css'

type propsType = {
    name: string
    counterValue: number
    disableValue: number
    callback: () => void
}

export const Button = (props: propsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button
            className={s.button}
            disabled={props.counterValue === props.disableValue ? true : false}
            onClick={onClickHandler}
        >
            {props.name}
        </button>
    )
}
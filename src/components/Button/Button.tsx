import React from 'react';
import s from './Button.module.css'

type ButtobPropsType = {
    name: string
    disabled: boolean
    callback: () => void
}

export const Button = (props: ButtobPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button
            className={s.button}
            disabled={props.disabled}
            onClick={onClickHandler}
        >
            {props.name}
        </button>
    )
}
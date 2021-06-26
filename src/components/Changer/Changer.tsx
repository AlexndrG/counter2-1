import React, {useState} from 'react';
import s from './Changer.module.css'

type ChangerPropsType = {
    text: string
    value: number
    changeValue: (value: number) => void
}

export const Changer = (props: ChangerPropsType) => {
    return (
        <div>
            <div>
                {props.text}
            </div>
            <div>
                <input type={'number'} value={props.value}/>
            </div>
        </div>
    )
}
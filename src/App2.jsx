import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';

const MAX_COUNTER_VALUE = 5

function App() {
    let [counter, setCounter] = useState<number>(0)
    //------------------------------
    let [disabledInc, setDisabledInc] = useState<boolean>(false)
    let [disabledRes, setDisabledRes] = useState<boolean>(true)
    //------------------------------

    const increment = () => {
        if (counter < MAX_COUNTER_VALUE) {
            setCounter(++counter)
        }
        //------------------------------
        if (counter === MAX_COUNTER_VALUE) {
            setDisabledInc(true)
        } else {
            setDisabledRes(false)
        }
        //------------------------------
    }

    const reset = () => {
        setCounter(0)
        //------------------------------
        setDisabledInc(false)
        setDisabledRes(true)
        //------------------------------
    }

    return (
        <div className={'app'}>
            <div className={'counter'}>
                <Display counterValue={counter} maxValue={MAX_COUNTER_VALUE}/>

                <div className={'buttons'}>
                    <Button
                        name={'Inc'}
                        callback={increment}
                        //------------------------------
                        disabled={disabledInc}
                        //------------------------------
                    />

                    <Button
                        name={'Reset'}
                        callback={reset}
                        //------------------------------
                        disabled={disabledRes}
                        //------------------------------
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

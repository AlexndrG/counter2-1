import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';

const MAX_COUNTER_VALUE = 5

function App() {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        if (counter < MAX_COUNTER_VALUE) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className={'app'}>
            <div className={'counter'}>

                <Display
                    counterValue={counter}
                    maxValue={MAX_COUNTER_VALUE}
                />

                <div className={'buttons'}>
                    <Button
                        name={'Inc'}
                        counterValue={counter}
                        disableValue={MAX_COUNTER_VALUE}
                        callback={increment}
                    />

                    <Button
                        name={'Reset'}
                        counterValue={counter}
                        disableValue={0}
                        callback={reset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

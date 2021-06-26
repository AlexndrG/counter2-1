import React from 'react';
import './App.css';
import { CounterWithParams } from './components/CounterWithParams/CounterWithParams';

const INIT_MIN_VALUE = 0;
const INIT_MAX_VALUE = 5;

function App() {
    return <CounterWithParams min={INIT_MIN_VALUE} max={INIT_MAX_VALUE}/>
}

export default App;

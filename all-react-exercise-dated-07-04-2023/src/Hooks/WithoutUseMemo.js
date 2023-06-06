import React, { useState } from "react";

function factorialOf(n) {
    console.log(`function is rendered ${n}`);
    return n<=0 ? 1 : n * factorialOf(n-1);
}

const WithoutUseMemo = () => {
    const [inc, setInc] = useState(0)
    const [number, setNumber] = useState(1)
    const factorial = factorialOf(number)
    const increase = () => {
        setInc(i => i+1)
        console.log(inc);
    }
    const changeNumber = (event) => {
        setNumber(Number(event.target.value))
    }
    return (
        <>
            <h2>Without use memo</h2>
            <button onClick={increase}>increment</button>
            <input onChange={changeNumber} value={number} name="number"></input>
            <div>factorial is: {factorial}</div>
        </>
    )
}

export default WithoutUseMemo;
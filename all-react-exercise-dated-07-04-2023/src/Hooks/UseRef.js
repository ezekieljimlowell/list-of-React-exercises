import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const countRef = useRef(0)
    const [count, setCount] = useState(0)
    const [stopWatchCount, setStopWatchCount] = useState(0)
    const timerIdRef = useRef(0)
    const inputRef = useRef();
    const click = () => {
        countRef.current++;
        console.log(`count reference is ${countRef.current}`);
    }
    const stateClick = () => {
        let increasedCount = count + 1;
        console.log(count);
        setCount(increasedCount)
        console.log(`next step ${count}`);
    }

    console.log('componenent render', count);
    const startCount = () => {
        if(timerIdRef.current) return;
        timerIdRef.current = setInterval(() => {
            setStopWatchCount(c => c + 1)
        }, 1000);
    }
    const stopCount = () => {
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0
    }
    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus()
        return () => clearInterval(timerIdRef.current)
    }, [])
    return (
        <>
            <button onClick={click}>button</button>
            <button onClick={stateClick}>state click</button>
            <div>{stopWatchCount}</div>
            <button onClick={startCount}>start</button>
            <button onClick={stopCount}>stop</button>
            <button onClick={() => setStopWatchCount(0)}>reset</button>
            <input ref={inputRef}></input>
        </>
    )
}

export default UseRef;
import React, { useState } from "react";
import ChildWithoutCallback from "./ChildWithoutCallback";

const ParentWithoutUseCallback = () => {
    const [count, setCount] = useState(0)
    const [testNumber, setTestNumber] = useState(0)
    const clickHandler = () => {
        setTestNumber(t => t+1)
        console.log("triggered");
    }
    const increaseCount = () => {
        setCount(c => c+1)
    }
     return (
        <>
            <h2>Without useCallback</h2>
            <div>{count}</div>
            <button onClick={increaseCount}>Parent renderer</button>
            <ChildWithoutCallback
                clickHandler={clickHandler}
                testNumber={testNumber}
            />
        </>
    )
}

export default ParentWithoutUseCallback;
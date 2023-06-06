import React, { useCallback, useState } from "react";
import ChildWithCallback from "./ChildWithCallback";

const ParentWithUseCallback = () => {
    const [count, setCount] = useState(0)
    const [testNumber, setTestNumber] = useState(0)
    const clickHandler = useCallback(() => {
        setTestNumber(t => t+1)
        console.log("triggered");
    }, [])
    const increaseCount = () => {
        setCount(c => c+1)
    }
     return (
        <>
            <h2>With useCallback</h2>
            <div>{count}</div>
            <button onClick={increaseCount}>Parent renderer</button>
            <ChildWithCallback
                clickHandler={clickHandler}
                testNumber={testNumber}
            />
        </>
    )
}

export default ParentWithUseCallback;
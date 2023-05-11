import React from "react";

const ChildWithoutCallback = ({clickHandler, testNumber}) => {
    console.log('child rendered');
    return (
        <>
            <h2>Child Without useCallback</h2>
            <div>{testNumber}</div>
            <button onClick={() => clickHandler()}>Child button</button>
        </>
    )
}

export default ChildWithoutCallback;
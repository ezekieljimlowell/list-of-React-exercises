import React, { memo } from "react";

const ChildWithCallback = ({clickHandler, testNumber}) => {
    console.log('child rendered');
    return (
        <>
            <h2>Child With useCallback</h2>
            <div>{testNumber}</div>
            <button onClick={() => clickHandler()}>Child button</button>
        </>
    )
}

export default memo(ChildWithCallback);
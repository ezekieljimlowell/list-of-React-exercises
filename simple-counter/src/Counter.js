import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onClickIncrement = () => {
        setCount(count + 1);
    }

    const onClickDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div>{count}</div>
            <button type="button" onClick={() => onClickIncrement()}>Increment</button>
            <button type="button" onClick={() => onClickDecrement()}>Decrement</button>
        </div>
    )
}

export default Counter;
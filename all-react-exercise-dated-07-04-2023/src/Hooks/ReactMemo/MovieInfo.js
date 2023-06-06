import React, { memo } from "react";

function compareFunction(prevValue, nextValue) {
    return prevValue.title === nextValue.title && prevValue.releasedDate === nextValue.releasedDate
    && prevValue.increaseParentCount === nextValue.increaseParentCount;
}

const MovieInfo = ({title, releasedDate, increaseParentCount}) => {
    console.log("Movie Child triggered");
    return (
        <>
            <div>{releasedDate}</div>
            <div>{title}</div>
            <button onClick={increaseParentCount}>Parent increase</button>
        </>
    )
}

export default memo(MovieInfo, compareFunction);
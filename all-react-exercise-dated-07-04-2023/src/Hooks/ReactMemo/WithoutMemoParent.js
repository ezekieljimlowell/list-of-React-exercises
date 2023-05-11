/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import MovieInfo from "./MovieInfo";

const WithoutMemoParent = () => {
    const [change, setChange] = useState(false)
    const [count, setCount] = useState(0)
    const [parentCount, setParentCount] = useState(1);
    let title = change ? "Multiverse of madness" : "Mortal combat";
    let releasedDate = change ? "Jan 2022" : "June 2021";
    const increaseParentCount = useCallback(() => {
        setParentCount(d => d+1)
    }, [parentCount])
    return (
        <>
            <h2>Without React.memo</h2>
            <button onClick={() => setCount(c => c+1)}>Inc</button>
            <button onClick={() => setChange(r => !r)}>Change value</button>
            <div>{count}</div>
            <div>Parent count:{parentCount}</div>
            <MovieInfo
                title={title}
                releasedDate={releasedDate}
                increaseParentCount={increaseParentCount}
            />
        </>
    )
}

export default WithoutMemoParent;
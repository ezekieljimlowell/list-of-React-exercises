import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffect = ({name}) => {
    const message = `hello ${name}`;
    const [fetchedData, setData] = useState([])
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`printing ${name}`);
        }, 5000);
        return () => {
            clearTimeout(timer)
        }
    }, [name])
    useEffect(() => {
        function fetching() {
            const url = 'https://jsonplaceholder.typicode.com/todos?userId=1';
            fetch(url).then(res => res.json()).then(data => setData(data))
        }
        fetching()
    }, [])
    return (
        <>
            <div>{message}</div>
            {fetchedData?.length > 0 && fetchedData?.map(d => <div key={d.id}>
                <div>{d.title}</div>
                <div>{d.completed}</div>
                <div>{d.userId}</div>
                <div>{d.id}</div>
            </div>)}
        </>
    )
}

export default UseEffect;
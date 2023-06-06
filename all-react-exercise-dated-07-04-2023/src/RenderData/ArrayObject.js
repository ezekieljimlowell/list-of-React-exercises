import React from "react";

const ArrayObject = () => {
    const arr = [1,2,3,4,"jim","anderson"]
    const obj = {
        name: "EJL",
        age: 29,
        lifeStyle: "medium",
        employment: "developer",
    }
    return (
        <>
            <ul>
                {arr.map(data => <li key={data}>{data}</li>)}
            </ul>
            <ul>
                {Object.keys(obj).map(key => <div key={key}>
                    <i><b>{key}</b></i> : <i>{obj[key]}</i>
                </div>)}
                <hr></hr>
                {Object.values(obj).map(val => <li key={val}>{val}</li>)}
            </ul>
        </>
    )
}

export default ArrayObject;
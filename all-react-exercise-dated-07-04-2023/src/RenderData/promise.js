import React from "react";
import { useState } from "react";

const PromiseComponent = () => {
    const [promError, setPromError] = useState("")
    const [word, setWord] = useState("");
    const promise1 = new Promise((resolve, reject) => {
        let x = 0;
        if(x !== 0) {
            resolve("success")
        }
        else {
            reject("failed")
        }
    })
    promise1.catch(err => setPromError(err))
    function promise2() {
        return new Promise((res, rej) => res("jim"))
    }
    promise2().then(val => setWord(val))
    return (
        <>
            <div>{promError}</div>
            <div>{word}</div>
        </>
    )
}

export default PromiseComponent;
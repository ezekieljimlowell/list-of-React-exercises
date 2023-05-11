import React, { useContext } from "react";
import ContextGrandChild from "./ContextGrandChild";
import { Context } from "./Context";

const ContextChild1 = () => {
    const contextResult = useContext(Context)
    return (
        <>
            <h2>Child Level 1</h2>
            <div>
                <div>
                    My name is {contextResult.name}. My age is {contextResult.age}.
                    I am living in {contextResult.city} at {contextResult.village}.
                    My Phone number is {contextResult.phoneNumber}
                </div>
            </div>
            <ContextGrandChild />
        </>
    )
}

export default ContextChild1;
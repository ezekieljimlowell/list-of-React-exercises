import React, { useContext } from "react";
import ContextGreatGrandChild from "./ContextGreatGrandChild";
import { Context } from "./Context";

const ContextGrandChild = () => {
    const contextResult = useContext(Context)
    return (
        <>
            <h2>Grand Child</h2>
            <div>
            My name is {contextResult.name}. My age is {contextResult.age}.
                    I am living in {contextResult.city} at {contextResult.village}.
                    My Phone number is {contextResult.phoneNumber}
            </div>
            <ContextGreatGrandChild />
        </>
    )
}

export default ContextGrandChild;
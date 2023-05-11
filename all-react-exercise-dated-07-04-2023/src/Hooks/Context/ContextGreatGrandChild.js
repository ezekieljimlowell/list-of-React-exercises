import React, { useContext } from "react";
import { Context } from "./Context";

const ContextGreatGrandChild = () => {
    const contextResult = useContext(Context)
    return (
        <>
            <h2>Great Grand Child</h2>
            <div>
            My name is {contextResult.name}. My age is {contextResult.age}.
                    I am living in {contextResult.city} at {contextResult.village}.
                    My Phone number is {contextResult.phoneNumber}
            </div>
        </>
    )
}

export default ContextGreatGrandChild;
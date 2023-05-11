import React from "react";
import { Context } from "./Context";

const ContextChild2 = () => {
    return (
        <>
            <h2>Child Level 1</h2>
            <div>
                <Context.Consumer>
                    {value => <div>
                        <div>
                        My name is {value.name}. My age is {value.age}.
                    I am living in {value.city} at {value.village}.
                    My Phone number is {value.phoneNumber}
                        </div>    
                    </div>}
                </Context.Consumer>
            </div>
        </>
    )
}

export default ContextChild2;
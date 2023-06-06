import React, { useContext } from "react";
import { variableContext } from "./ParentContext";

const DisplayUser = () => {
    const {userName} = useContext(variableContext)
    return (
        <>
            <h3>{userName}</h3>
        </>
    )
}

export default DisplayUser;
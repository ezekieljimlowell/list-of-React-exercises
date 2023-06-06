import React, { useContext } from "react";
import { variableContext } from "./ParentContext";
import DisplayUser from "./DisplayUser";

const UserInput = () => {
    const {userName, setUserName} = useContext(variableContext)
    return (
        <>
            <input name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <DisplayUser />
        </>
    )
}

export default UserInput;
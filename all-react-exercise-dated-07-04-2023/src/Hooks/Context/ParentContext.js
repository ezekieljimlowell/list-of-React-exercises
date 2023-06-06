import React, { createContext, useMemo, useState } from "react";
import { Context } from "./Context";
import ContextChild1 from "./ContextChild1";
import ContextChild2 from "./ContextChild2";
import UserInput from "./UserInput";

export const variableContext = createContext({userName: "", setUserName: () => {}})

const ParentContext = () => {
    const [userName, setUserName] = useState("Daniel vettori")
    const value = useMemo(() => ({userName, setUserName}), [userName])
    return (
        <>
            <Context.Provider value={{age: 27, name: "James Daniel", city: "Coimbatore", village: "vengaivasal", phoneNumber: 9764345323}}>
                <ContextChild1 />
                <ContextChild2 />
            </Context.Provider>
            <variableContext.Provider value={value}>
                <UserInput />
            </variableContext.Provider>
        </>
    )
}

export default ParentContext;
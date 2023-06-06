import React from "react";

const RecursiveRender = (props) => {
    //https://naveenda.medium.com/how-to-recursively-render-the-react-component-a821b3532894
    function someThing() {
        return 100;
    }
    const symb = Symbol("hello")
    return (
        <>
            <div style={{background: "red"}}>t{symb}</div>
            {props.data.map(item => <div key={item.name}>
                {item.name}
                {item?.children?.length && <RecursiveRender data={item.children} />}
                {someThing()}
            </div>)}
        </>
    )
}

export default RecursiveRender;
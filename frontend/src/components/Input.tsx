import React from "react";

const Input = ()=>{
    return (
        <>
            <input
                className={"w-10 h-10 border-2 focus:border-black text-center text-xl"}
                maxLength={1}
                autoFocus
            />
        </>
    )
}
export default Input;
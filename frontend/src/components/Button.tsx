import React from "react";



const Button:React.FC<ButtonInterface> = ({text,disable,onClick})=>{
    return (
        <>
            <div className={"md:my-4 lg:mt-10"}>
                <button onClick={onClick} disabled={disable} className={" md:px-7 py-2 bg-green-700 rounded-full text-white"} >{text}</button>
            </div>
        </>
    )
}
export default Button;
const Button = ({text}:{text:String})=>{
    return (
        <>
            <div className={"md:my-4 lg:mt-10"}>
                <button className={" md:px-7 py-2 bg-green-700 rounded-full text-white"} >{text}</button>
            </div>
        </>
    )
}
export default Button;
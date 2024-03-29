import Image from "next/image";


const MessageRight = ({Message,Time,first}:Data)=>{
    return (
        <>
            <div className={"w-full px-2 pt-2 flex justify-end"}>
                <div className={"max-w-[70%] p-1 bg-green-100 rounded inline-block"}>
                    <p className={"text-sm text-wrap break-all"}>{Message}</p>
                    <p className={"text-xs text-gray-600 float-right"}>{Time}</p>
                </div>
                {first ? <div className={"-ml-1"}>
                    <Image src={"/triangle2.svg"} alt={"triangle"} width={12} height={12}/>
                </div>: <div className={"mr-2"}></div>}
            </div>
        </>
    )
}
export default MessageRight;
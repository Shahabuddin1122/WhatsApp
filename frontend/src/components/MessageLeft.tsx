import Image from "next/image";


const MessageLeft = ({Message,Time,first}:Data)=>{
    return (
        <>
            <div className={"flex ml-1"}>
                {first? <div className={"-mr-1 my-1.5"}>
                    <Image src={"/triangle.svg"} alt={"triangle"} width={12} height={12} />
                </div>:<div className={"ml-1.5"}></div>}
                <div className={" max-w-[70%] text-wrap px-2 py-1 mt-2 bg-white inline-block rounded"}>
                    <p className={"text-sm pr-8"}>{Message}</p>
                    <p className={"text-xs text-gray-400 float-right"}>{Time}</p>
                </div>
            </div>
        </>
    )
}
export default MessageLeft;
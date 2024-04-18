import React, { useState } from "react";
import Image from "next/image";

const MessageCard = ({ number, text, image, time, handleMessage }: { number: String, text: String, image: any, time: String, handleMessage: () => void }) => {
    const [dark, setDark] = useState(false);

    return (
        <>
            <div onClick={handleMessage} className={`w-full h-16 border-b border-slate-300 active:bg-amber-100  flex justify-center items-center mb-1 hover:bg-slate-100 cursor-pointer`}>
                <div onClick={() => setDark(!dark)} className={"w-11/12 h-[70%] flex relative"}>
                    <div>
                        <Image src={image ? image : "/profile.png"} alt={"Image"} width={40} height={40} className={"rounded-full"} />
                    </div>
                    <div className={"flex flex-col ml-3"}>
                        <p className={"text-md text-wrap break-all"}>{number}</p>
                        <p className={"text-sm text-slate-500"}>{text.length < 20 ? text : text.slice(0, 20) + "............"}</p>
                    </div>
                    <div className={" mt-1 absolute right-1"}>
                        <p className={"text-slate-400 text-xs"}>{time}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageCard;

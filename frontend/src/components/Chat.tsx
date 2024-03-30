import Image from "next/image";
import MessageLeft from "@/components/MessageLeft";
import MessageRight from "@/components/MessageRight";

const Chat = ()=>{
    return (
        <>
            <div className={"h-[47px] min-w-[350px] w-full flex justify-center items-center"}>
                <div className={"h-[40px] w-[94%] flex justify-between"}>
                    <div className={"h-full flex items-center gap-x-2"}>
                        <Image src={"/profile.png"} alt={"profile"} width={30} height={30} className={"rounded-full"} />
                        <div className={""}>
                            <p className={"text-xs"}>Shahabuddin Akhon</p>
                            <p className={"text-[10px] text-gray-500"}>Last seen yesterday at 8:20 PM</p>
                        </div>
                    </div>
                    <div className={"h-full flex justify-center items-center gap-x-6"}>
                        <div className={"sm:w-[55px] sm:h-[25px] active:bg-gray-300 rounded-full px-1 flex justify-around"}>
                            <Image src={"/video.svg"} alt={"video"} height={20} width={20} />
                            <Image src={"/down.svg"} alt={"down"} height={10} width={10} />
                        </div>
                        <Image src={"/search.svg"} alt={"search"} width={20} height={20} />
                        <Image src={"/dots.svg"} alt={"dots"} width={5} height={5} />
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:"url('/1288117.png')"}} className={"h-[648px] w-full relative overflow-y-scroll"}>
                <MessageLeft Message={"asalamualaikum"} Time={"2:12 PM"} first={true}/>
                <MessageLeft Message={"Kemon aso?"} Time={"2:12 PM"} first={false}/>
                <MessageRight Message={"Alhamdullah vlo.tmi kmn aso?"} Time={"2:12 PM"} first={true}/>
                <MessageRight Message={"Check out the all-new Web Awesome AND get an exclusive lifetime discount on Font Awesome Pro!"} Time={"2:12 PM"} first={false}/>
            </div>
            <div className={"h-[55px] w-full flex justify-center items-center "}>
                <div className={"h-[40px] w-[94%] flex justify-center items-center gap-x-4"}>
                    <div className={"flex justify-center"}>
                        <Image src={"/plus.svg"} alt={"Plus"} width={20} height={20} />
                    </div>
                    <div className={"w-5/6 h-[90%] bg-white rounded-lg flex items-center px-2"}>
                        <Image src={"/person.svg"} alt={"person"} width={15} height={15} />
                        <input type={"text"} placeholder={"Type a message"} className={"w-11/12 h-full border-none outline-none pl-2 text-sm"}/>
                    </div>
                    <div>
                        <Image src={"/voice.svg"} alt={"voice"} width={15} height={15} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;
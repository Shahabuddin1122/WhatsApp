"use client"
import Image from "next/image";
import MessageLeft from "@/components/MessageLeft";
import MessageRight from "@/components/MessageRight";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import {convertDate} from "@/utils/convertDate";
import TimeFrame from "@/components/TimeFrame";

const Chat = ({user, id}: { user?: string, id: string }) => {
    let isLeftNumber:boolean = true;
    let isRightNumber:boolean = true;
    let prevDay:string | null = null;

    const {data, isLoading, error} = useSWR(`http://localhost:8080/api/v1/message/getAll/${id}`, fetcher)
    return (
        <>
            <div className={"h-[47px] min-w-[350px] w-full flex justify-center items-center transition ease-in-out duration-500 delay-1000"}>
                <div className={"h-[40px] w-[94%] flex justify-between"}>
                    <div className={"h-full flex items-center gap-x-2"}>
                        <Image src={(data && data[0].conversation.receiverNumber[0].number === user)? (data[0]?.conversation?.receiverNumber[1]?.imgLink != null) ? data[0]?.conversation?.receiverNumber[1]?.imgLink : "avatar.svg" : "avatar.svg"} alt={"profile"} width={30} height={30} className={"rounded-full"}/>
                        <div className={""}>
                            <p className={"text-xs"}>{(data && data[0].conversation.receiverNumber[0].number === user)? data[0]?.conversation?.receiverNumber[1]?.name : data && (data[0]?.conversation?.receiverNumber[0]?.name || "unKnown")}</p>
                            <p className={"text-[10px] text-gray-500"}>last seen in {(data && data[0].conversation.receiverNumber[0].number === user)? convertDate({date:data[data.length - 1]?.date,flag:true}) : data && (convertDate({date:data[1]?.date,flag:true}) || "long ago")}</p>
                        </div>
                    </div>
                    <div className={"h-full flex justify-center items-center gap-x-6"}>
                        <div
                            className={"sm:w-[55px] sm:h-[25px] active:bg-gray-300 rounded-full px-1 flex justify-around"}>
                            <Image src={"/video.svg"} alt={"video"} height={20} width={20}/>
                            <Image src={"/down.svg"} alt={"down"} height={10} width={10}/>
                        </div>
                        <Image src={"/search.svg"} alt={"search"} width={20} height={20}/>
                        <Image src={"/dots.svg"} alt={"dots"} width={5} height={5}/>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "url('/1288117.png')"}}
                 className={"h-[605px] w-full relative overflow-y-scroll"}>
                {!isLoading && !error && data && data.map((message: any, index: number) => {
                    let forDay = convertDate({ date: message.date, forDay: true });
                    let x;
                    if (prevDay != forDay) {
                        x = <TimeFrame date={forDay} />;
                    } else {
                        x = "";

                    }
                    prevDay = forDay;

                    if (message.senderNumber.number === user) {
                        isLeftNumber=true;
                        const firstForRight = isRightNumber;
                        isRightNumber = false;
                        return <>
                            {x}
                            <MessageRight key={index} Message={message.message} Time={message.date? convertDate({date:message.date}) : "Long ago"} first={firstForRight}/>
                        </>
                    } else {
                        isRightNumber=true;
                        const firstForLeft = isLeftNumber;
                        isLeftNumber = false;
                        return (
                            <>
                                {x}
                                <MessageLeft key={index} Message={message.message} Time={message.date ? convertDate({date: message.date}) : "Long ago"} first={firstForLeft}/>
                            </>
                        )
                    }
                })}

            </div>
            <div className={"h-[50px] w-full flex justify-center items-center "}>
                <div className={"h-[40px] w-[94%] flex justify-center items-center gap-x-4"}>
                    <div className={"flex justify-center"}>
                        <Image src={"/plus.svg"} alt={"Plus"} width={20} height={20}/>
                    </div>
                    <div className={"w-5/6 h-[90%] bg-white rounded-lg flex items-center px-2"}>
                        <Image src={"/person.svg"} alt={"person"} width={15} height={15}/>
                        <input type={"text"} placeholder={"Type a message"}
                               className={"w-11/12 h-full border-none outline-none pl-2 text-sm"}/>
                    </div>
                    <div>
                        <Image src={"/voice.svg"} alt={"voice"} width={15} height={15}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;
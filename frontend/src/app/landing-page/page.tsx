"use client"
import Image from "next/image";
import MessageCard from "@/components/MessageCard";
import avatarImage from "../../../public/avatar.svg";
import Chat from "@/components/Chat";
import {useRouter, useSearchParams} from "next/navigation";
import {decryptData, ENCRYPTION_KEY} from "@/utils/encryption";
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import Default from "@/components/Default";
import {useState} from "react";
import {convertDate} from "@/utils/convertDate";

const LandingPage = () => {
    const [ClickedUser,setClickedUser] = useState();
    const router = useRouter();
    const idParams = useSearchParams();
    const id = decodeURIComponent(idParams.get('id') || '');
    const user = decryptData({
        encryptedData: id?.split(ENCRYPTION_KEY)[0] ,
        key: id?.split(ENCRYPTION_KEY)[1] || ''
    })
    if (!user) {
        router.push("/login")
    }
    const {data, isLoading, error} = useSWR(`http://localhost:8080/api/v1/user/${user}`, fetcher)
    const {data:Conversation, isLoading:LoadConversation, error:errorConversation,mutate} = useSWR(data? `http://localhost:8080/api/v1/message/conversation/${data.id}`: null, fetcher, { refreshInterval: 1000 })

    return (
        <>
            <div className={"min-w-[765px] w-full h-[100px] bg-green-600 flex justify-center"}>
                <div className={"w-11/12 h-[700px] mt-5 bg-slate-100  flex overflow-hidden"}>
                    <div className={"min-w-[350px] sm:w-1/2 md:w-2/5 lg:w-1/3 h-full bg-white shadow-xl  relative"}>
                        <div className={"w-full h-12 px-2 flex justify-between items-center bg-slate-100"}>
                            <div className={"w-10 h-10 flex justify-center items-center rounded-full"}>
                                {!error && !isLoading && data.imgLink ? <Image
                                    src={data.imgLink}
                                    alt={"next"} width={50} height={50}
                                    className={"rounded-full"}/> : <Image
                                    src={avatarImage}
                                    alt={"next"} width={50} height={50}
                                    className={"rounded-full"}/>}
                            </div>
                            <div className={" flex justify-center items-center gap-x-4 md:gap-x-8 lg:gap-x-10"}>
                                <Image src={"/group.svg"} alt={"next"} width={20} height={20}/>
                                <Image src={"/status.svg"} alt={"next"} width={20} height={20}/>
                                <Image src={"/chat.svg"} alt={"next"} width={20} height={20}/>
                                <Image src={"/dots.svg"} alt={"next"} width={5} height={5}/>
                            </div>
                        </div>
                        <div className={"w-full h-8 py-1 flex justify-center items-center sm:gap-x-2 md:gap-x-3"}>
                            <div className="w-5/6 h-full bg-slate-100 rounded-md cursor-pointer flex">
                                <Image src={"/search.svg"} alt={"search"} width={30} height={30} className={"p-1"}/>
                                <input type={"text"} className={"w-full h-full outline-none bg-slate-100"}/>
                            </div>
                            <div className={""}>
                                <Image src={"/filter.svg"} alt={"filter"} width={20} height={20}/>
                            </div>
                        </div>
                        <div className={"w-full h-[600px] relative overflow-y-scroll"}>
                            <div className={"w-full h-auto"}>
                                <div className="flex flex-col justify-center">
                                    {!LoadConversation && !errorConversation && Conversation && Conversation.map((data:any, key:number) =>
                                        <div key={key}>
                                                {data.conversation.receiverNumber.map((receiver:any, index:number) => {
                                                    if(receiver.number == user){ return null}
                                                    return <MessageCard key={index} handleMessage={()=> setClickedUser(data.conversation.id)} number={receiver.name ? receiver.name : receiver.number} text={data.message.message} image={receiver.imgLink ? receiver.imgLink : avatarImage} time={data.message.date? convertDate({date:data.message.date,flag:true}) : "Long ago"} />
                                                }
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div
                            className={"w-full h-[50px] absolute bottom-0 border-t border-gray-300 bg-white flex justify-center items-center shadow-2xl"}>
                            <div className={"w-11/12 h-[90%] flex gap-x-5 items-center"}>
                                <Image src={"/whats_app.png"} alt={"Whatsapp"} height={35} width={35}/>
                                <p className={"text-green-700 text-md md:text-sm "}>Get WhatsApp for Windows <span
                                    className={"md:text-xs text-2xl ml-2"}> &gt; </span></p>
                            </div>
                        </div>
                    </div>
                    <div className={"min-w-[350px] md:w-full lg:w-2/3 h-full "}>
                        {ClickedUser? <Chat user={user} id={ClickedUser}/> : <Default/>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage;
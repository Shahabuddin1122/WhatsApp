import Image from "next/image";
import MessageCard from "@/components/MessageCard";
import avatarImage from "../../../public/avatar.svg";
import profile from "../../../public/profile.png";
import Chat from "@/components/Chat";

const landingPage = () => {
    return (
        <>
            <div className={"min-w-[765px] w-full h-[100px] bg-green-600 flex justify-center"}>
                <div className={"w-11/12 h-[700px] mt-5 bg-slate-100  flex overflow-hidden"}>
                    <div className={"min-w-[350px] sm:w-1/2 md:w-2/5 lg:w-1/3 h-full bg-white shadow-xl  relative"}>
                        <div className={"w-full h-12 px-2 flex justify-between items-center bg-slate-100"}>
                            <div className={"w-10 h-10 flex justify-center items-center rounded-full"}>
                                <Image src={"/profile.png"} alt={"next"} width={50} height={50}
                                       className={"rounded-full"}/>
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
                                    <MessageCard text={"Hi"} number={"+8801982711168"} time={"8:20 PM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello everyone. I am Shahabuddin"} number={"Shahabuddin akhon"}
                                                 time={"8:20 PM"} image={profile}/>
                                    <MessageCard text={"How to Create table and run Liquibase"} number={"Rafsan"}
                                                 time={"8:20 PM"} image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"Abdullah"} time={"12:00 PM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"Nafees Kaiser"} time={"8:20 PM"}
                                                 image={profile}/>
                                    <MessageCard text={"Hello"} number={"Nafis Ahmed"} time={"11:40 PM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"Ashik"} time={"8:25 AM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"+8801715515736"} time={"2:20 AM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"Raiyan"} time={"1:27 AM"}
                                                 image={profile}/>
                                    <MessageCard text={"Hello"} number={"Rafi"} time={"8:50 PM"}
                                                 image={avatarImage}/>
                                    <MessageCard text={"Hello"} number={"Shahida"} time={"3:20 AM"}
                                                 image={profile}/>
                                    <MessageCard text={"Hi"} number={"Peyara"} time={"4:50 AM"}
                                                 image={avatarImage}/>

                                </div>
                            </div>
                        </div>
                        <div className={"w-full h-[50px] absolute bottom-0 border-t border-gray-300 bg-white flex justify-center items-center shadow-2xl"}>
                            <div className={"w-11/12 h-[90%] flex gap-x-5 items-center"}>
                                <Image src={"/whats_app.png"} alt={"Whatsapp"} height={35} width={35}/>
                                <p className={"text-green-700 text-md md:text-sm "}>Get WhatsApp for Windows <span
                                    className={"md:text-xs text-2xl ml-2"}> &gt; </span></p>
                            </div>
                        </div>
                    </div>
                    <div className={"min-w-[350px] lg:w-2/3 h-full "}>
                        <Chat/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default landingPage;
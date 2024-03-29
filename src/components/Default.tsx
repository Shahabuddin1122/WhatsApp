import Image from "next/image";
import Button from "@/components/Button";

const Default = ()=>{
    return (
        <>
            <div className={"h-[655px] flex justify-center items-center"}>
                <div className={"h-[550px] sm:w-full md:w-2/3 lg:w-1/2"}>
                    <div className={"w-full h-[200px] relative"}>
                        <Image src={"/groupcall.jpg"} alt={"groupcall"} fill objectFit={"contain"}/>
                    </div>
                    <div className={"text-center my-5"}>
                        <p className={"text-2xl font-extralight my-4"}>Download WhatsApp for Windows</p>
                        <p className={"text-sm tracking-wider text-gray-500"}>Make calls, share your screen and get a
                            faster experience when you download the Windows app.</p>
                    </div>
                    <div className={"flex justify-center"}>
                        <Button text={"Get from MictroSoft Store"}/>
                    </div>
                </div>
            </div>
            <div className={"h-[55px]"}>
                <p className={"text-sm text-center text-gray-500"}>🔒 Your personal messages are end to end encrypted</p>
            </div>
        </>
    )
}
export default Default;
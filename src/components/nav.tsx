import Image from "next/image";

const nav = ()=>{
    return (
        <>
            <div className={"w-full h-28 bg-green-500 flex justify-center items-center"}>
                <div className={"w-3/5 h-full"}>
                    <div className={"flex items-center my-auto gap-x-2 py-6"}>
                        <Image src={"/whats_app.png"} alt={"Whats app"} height={30} width={30} />
                        <p className={"text-white text-xl uppercase"}>WHATSAPP WEB</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default nav;
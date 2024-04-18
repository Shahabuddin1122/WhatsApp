const TimeFrame = ({date}:{date:string | null})=>{
    return (
        <>
            <div className={"flex justify-center py-2"}>
                <div className={"px-4 py-1  bg-slate-100 rounded-md"}>
                    <p className={"text-center text-xs text-gray-500"}>{date}</p>
                </div>
            </div>
        </>
    )
}
export default TimeFrame;
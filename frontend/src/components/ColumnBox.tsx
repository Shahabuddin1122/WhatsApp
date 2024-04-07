"use client"
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import React from "react";


const ColumnBox:React.FC<InputProps> = ({data:numberAndZip,setData}) => {

    const { data,isLoading, error } = useSWR('https://restcountries.com/v3.1/all', fetcher)

    return (
        <>
            <div className={"mt-7 "}>
                <select name={"zip"} value={numberAndZip.zip} onChange={(e)=>{setData(e.target.value,e.target.name)}} className={" md:w-4/5 lg:w-1/2 border border-black lg:py-3 md:py-2 px-3 rounded-full text-sm"}>
                    <option value={""}>Enter your country</option>
                    {!isLoading && !error && data.map((value:any,index:number)=>(
                        <option key={index} value={value.idd.root} >
                            {value.name.common}
                        </option>
                    ))}
                </select>
            </div>
            <div className={"mt-5 flex justify-center"}>
                <div className={" md:w-4/5 lg:w-1/2  text-sm flex border border-black rounded-full"}>
                    <p className={"lg:py-3 md:py-2 px-3"}>{numberAndZip.zip}</p>
                    <input
                        type={"number"}
                        className={"w-4/5 h-full lg:py-3 md:py-2 rounded-full border-white border-none outline-none"}
                        name={"number"}
                        value={numberAndZip.number}
                        maxLength={10}
                        onChange={(e)=>{setData(e.target.value,e.target.name)}}
                    />
                </div>
            </div>
        </>
    )
}
export default ColumnBox;
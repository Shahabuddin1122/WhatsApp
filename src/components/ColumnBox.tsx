"use client"
import {fetcher} from "@/utils/fetcher";
import useSWR from "swr";
import Image from "next/image";
import {useEffect, useState} from "react";

const ColumnBox = () => {
    const [value,setValue] = useState<any>();

    const { data,isLoading, error } = useSWR('https://restcountries.com/v3.1/all', fetcher)
    // !isLoading && !error && data.map((value:any,index:number)=>{
    //     console.log(value.flags.svg)
    // })
    useEffect(() => {
        console.log(value)
    }, [value]);

    return (
        <>
            <div className={"mt-7 "}>
                <select value={value} onChange={(e)=> setValue(e.target.value)} className={" md:w-4/5 lg:w-1/2 border border-black lg:py-3 md:py-2 px-3 rounded-full text-sm"}>
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
                    <p className={"lg:py-3 md:py-2 px-3"}>{value}</p>
                    <input type={"number"} className={"w-4/5 h-full lg:py-3 md:py-2 rounded-full border-white border-none outline-none"}/>
                </div>
            </div>
        </>
    )
}
export default ColumnBox;
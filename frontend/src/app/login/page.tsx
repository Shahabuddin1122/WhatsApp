"use client"

import Nav from "@/components/nav";
import ColumnBox from "@/components/ColumnBox";
import Button from "@/components/Button";
import OtpModel from "@/components/OtpModel";
import {useState} from "react";

const login = ()=>{


    return (
        <>
            <div className={"w-full h-auto"}>
                <OtpModel/>
                <Nav/>
                <div className={"w-3/5 h-auto bg-white shadow-2xl mx-auto relative -mt-10"}>
                    <div className={"w-full h-[30rem] flex justify-center items-center"}>
                        <div className={"w-1/2 h-4/5 text-center"}>
                            <p className="text-2xl font-extralight py-3">Enter phone number</p>
                            <p className="text-sm text-gray-500">Select a country and enter your WhatsApp phone number</p>
                            <ColumnBox/>
                            <Button text={"Next"}/>
                            <p className={"text-green-700 tracking-wide"}>Link with QR code</p>
                        </div>
                    </div>
                    <div className={"w-full h-auto bg-gray-100 flex justify-center items-center pb-10"}>
                        <div className={"w-1/2 h-4/5 text-center"}>
                            <p className={"text-2xl font-extralight tracking-wider pt-4 "}>Tutorial</p>
                            <p className={"text-green-700 py-2"}>Need help to get started?</p>
                            <video controls width="640" height="360">
                                <source src="https://www.bing.com/videos/riverview/relatedvideo?q=whatsapp+tutorial+video&mid=4116DC372D8DBEE2F4C94116DC372D8DBEE2F4C9&FORM=VIRE" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default login;
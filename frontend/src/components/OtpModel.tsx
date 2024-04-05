"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import OTPInput from "react-otp-input";

const OtpModel = ()=>{
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className={"w-full h-[720px] fixed z-10 bg-gray-400 opacity-40"}></div>
            <div className={"w-full h-[720px] fixed z-10 flex justify-center items-center"}>
                <div className={"w-1/4 h-[300px] bg-white absolute z-20 rounded pt-6 shadow-2xl"}>
                    <div className={"w-full h-1/4 flex justify-center items-center"}>
                        <h1 className={"text-center text-2xl tracking-wider"}>Enter Your OTP</h1>
                    </div>
                    <div className={"w-full h-2/5 flex justify-center items-center gap-2"}>
                        <OTPInput
                            inputStyle={"border border-black text-3xl md:text-2xl"}
                            containerStyle={"min-w-[100px]"}
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span className={" sm:w-2 md:w-3 w-6"}></span>}
                            renderInput={(props) => <input {...props} />}
                        ></OTPInput>
                    </div>
                    <div className={"flex justify-center -mt-3"}>
                        <Button text={"Send"}/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default OtpModel;
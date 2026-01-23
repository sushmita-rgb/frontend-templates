import { motion } from "framer-motion";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage (){
    return(
        <>
            <div className="min-w-screen flex items-center justify-center bg-zinc-900">
                <div className="w-[900px] h-[500px] flex-row overflow-hidden flex rounded-xl">

                    <motion.div
                        className="bg-red-50 flex-1 rounded-l-xl flex flex-col items-center py-4 px-10">
                        <span className="text-gray-900 pb-3 text-2xl font-bold text">Sign In</span>
                        <div className="flex flex-row gap-4 pb-3 items-center justify-center">
                            <span className="rounded-full hover:scale-110 ease-in duration-200 hover:cursor-pointer hover:shadow-[0_0_10px_#f8b4b4] bg-[#fbd5d5] p-1 px-2 h-auto w-auto"><i className="bi text-gray-900 bi-facebook"></i></span>
                            <span className="rounded-full hover:scale-110 ease-in duration-200 hover:cursor-pointer hover:shadow-[0_0_10px_#f8b4b4] bg-[#fbd5d5] p-1 px-2 h-auto w-auto"><i className="bi text-gray-900 bi-google"></i></span>
                            <span className="rounded-full hover:scale-110 ease-in duration-200 hover:cursor-pointer hover:shadow-[0_0_10px_#f8b4b4] bg-[#fbd5d5] p-1 px-2 h-auto w-auto"><i className="bi  text-gray-900 bi-linkedin"></i></span>
                        </div>
                        <span className="text-gray-900 pb-3">or use your account</span>
                        <div className="flex flex-col gap-4 pb-3 ">
                            <label htmlFor="email" className="text-gray-900">Email-</label>
                            <input type="text" id="email" className="bg-[#fef3f3]
                        text-gray-900
                        border border-[#fbd5d5]
                        rounded-lg
                        px-3 py-2
                        transition
                        focus:outline-none
                        focus:border-[#f8b4b4]
                        focus:shadow-[0_0_12px_rgba(248,180,180,0.55)]"/>
                            <label htmlFor="password" className="text-gray-900">Password-</label>
                            <input type="password" id="password" className="bg-[#fef3f3]
                        text-gray-900
                        border border-[#fbd5d5]
                        rounded-lg
                        px-3 py-2
                        transition
                        focus:outline-none
                        focus:border-[#f8b4b4]
                        focus:shadow-[0_0_12px_rgba(248,180,180,0.55)]"/>

                        </div>
                        <span className="text-gray-900 pb-3">Forgot your password?</span>
                        <button className="
                                        !bg-red-500
                                        !px-10
                                        !py-2
                                        !h-auto
                                        !w-auto
                                        !rounded-lg
                                        !text-white
                                        !hover:shadow-[0_0_20px_rgba(248,180,180,0.55)]

                                        hover:!bg-red-600
                                        active:!bg-red-700

                                        focus:!outline-none
                                        focus:!ring-0
                                        active:!outline-none
                                        active:!ring-0
                                        hover:!ring-0
                                        hover:!outline-none

                                        transition-colors
                                        duration-200
                  ">
                            Sign In
                        </button>


                    </motion.div>
                    <motion.div
                        className="bg-red-500 flex-1 rounded-r-xl flex flex-col items-center justify-center py-4 px-10" >
                        <span className="pb-5 text-red-50 text-center text-3xl font-bold">New Here?</span>
                        <button
                            className="
                                    !bg-transparent
                                    !px-10
                                    !py-2
                                    !h-auto
                                    !w-auto
                                    !rounded-lg

                                    !text-red-50
                                    !border
                                    !border-red-200

                                    hover:!bg-red-50
                                    hover:!border-red-300
                                    hover:!text-red-400
                                    hover:!shadow-[0_0_16px_rgba(248,180,180,0.45)]

                                    active:!bg-red-100
                                    active:!border-red-400

                                    focus:!outline-none
                                    focus:!ring-0
                                    active:!outline-none
                                    active:!ring-0

                                    ease-in
                                    duration-500
                                  "
                        >
                            Sign Up
                        </button>

                    </motion.div>

                </div>
            </div>


        </>
    )
}
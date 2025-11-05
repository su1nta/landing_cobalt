import React from 'react'
import BannerRealtimeBg from '../../assets/banner/BannerRealtimeBg.svg';
import MobileApp from '../../assets/banner/mobile-app.svg';
import Hand from '../../assets/banner/hand.png';

function Box2() {
    return (
        <>
            <div className="w-full h-full">
                <div className="relative w-full h-3/5 flex items-center justify-between mask-t-from-40% mask-b-from-40%">
                    <div className="w-[15%] h-full flex flex-col">
                        <div className="h-1/2 w-0.5 mx-auto bg-neutral-700 " />
                        <div className="h-4 w-4 rounded-full border-2 border-neutral-700 mx-auto" />
                        <div className="flex-1 w-0.5 mx-auto bg-neutral-700 " />
                    </div>
                    <div className="w-[85%] h-full grid grid-flow-col grid-rows-8 gap-4 p-4">
                        <div className="row-span-4 flex gap-2 border border-neutral-600 rounded-xl bg-neutral-800">
                            <div className="w-[10%] h-full flex justify-end pl-4 py-2">
                                <svg
                                    className="size-5"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient id="box3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#00A6F4" />
                                            <stop offset="100%" stopColor="#7C3AED" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="5" cy="5" r="5" fill="url(#box3Gradient)" />
                                </svg>
                            </div>
                            <div className="w-[90%] h-full flex flex-col gap-2 p-2 ">
                                <span className="h-1/5 w-full flex items-center gap-1 text-sm text-neutral-300">
                                    Cobalt <span className="text-sm">⚈</span> 4h ago
                                </span>
                                <div className="h-2/5 w-full text-xs flex flex-col text-neutral-300">
                                    <span>💳 Monica is requesting a new card</span>
                                    <span>Card type: Virtual</span>
                                    <span>Spend Limit: $500 monthly</span>
                                </div>
                                <div className="h-2/5 w-full  text-neutral-300 flex gap-1">
                                    <button className="px-3 bg-neutral-700 hover:bg-neutral-900 transition duration-200 ease-in rounded-lg border border-neutral-700">Approve</button>
                                    <button className="px-3 bg-neutral-700 hover:bg-neutral-900 transition duration-200 ease-in rounded-lg border border-neutral-700">Decline</button>
                                    <button className="px-3 bg-neutral-700 hover:bg-neutral-900 transition duration-200 ease-in rounded-lg border border-neutral-700">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-3 flex gap-2 rounded-xl border border-neutral-700 bg-neutral-800">
                                <div className="w-[10%] h-full flex justify-end pl-4 py-5 rounded-full">
                                    <svg
                                        className="size-5"
                                        viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <linearGradient id="box3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#00A6F4" />
                                                <stop offset="100%" stopColor="#7C3AED" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="5" cy="5" r="5" fill="url(#box3Gradient)" />
                                    </svg>
                                </div>
                                <div className="w-[90%] h-full flex flex-col p-1 gap-2 justify-center ">
                                    <span className="w-full flex items-center gap-1 text-sm text-neutral-300">
                                        Cobalt <span className="text-sm">⚈</span> 52m ago
                                    </span>
                                    <div className="w-full text-xs flex flex-col text-neutral-300">
                                        <span>📈 Profits increase alert</span>
                                        <span>27% increase in the last 7 days</span>
                                    </div>
                                    
                            </div>
                        </div>
                        <div className="row-span-1 bg-neutral-700 rounded-t-xl border border-neutral-600"></div>
                    </div>
                </div>
                <div className="px-10 z-10 h-2/5 flex flex-col gap-3 justify-center">  
                    <h4 className="text-white text-xl font-semibold">Important business alerts</h4>
                    <h6 className="text-neutral-500 text-md max-w-[90%]">Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.</h6>
                </div>
            </div>
        </>
    )
}

export default Box2

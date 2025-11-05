import React from 'react'
import Sparkle from '../assets/logo/sparkle.svg';
function AnotherBento() {
    return (
        <>
        <div className="w-full flex justify-between">
            <div className="w-1/2 m-4 h-100 rounded-3xl bg-neutral-900">
                <div className="h-3/5 w-full">
                    <div className="h-full w-full  relative text-white">
                        {/* Gradient Diagonal Lines Pattern */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none mask-b-from-50%"
                            style={{
                            backgroundImage: `
                                repeating-linear-gradient(45deg, 
                                rgba(82, 82, 82, 0.2) 0px, 
                                rgba(82, 82, 82, 0) 2px, 
                                transparent 2px, 
                                transparent 25px
                                )
                            `,
                            }}
                        />
                        
                    </div>
                    <div className="w-1/4"></div>
                </div>
                <div className="px-10 z-10 h-2/5 flex flex-col gap-3 justify-center">  
                    <h4 className="text-white text-xl font-semibold">Smart Forecasting</h4>
                    <h6 className="text-neutral-500 text-md max-w-[95%]">Harness the power of Cobalt's predictive analytics to map out the financial future of your business.</h6>
                </div>
            </div>
            <div className="w-1/2 m-4 h-100 bg-neutral-900 rounded-3xl">
                <div className="h-3/5 w-full">
                    <div className="h-full w-full flex flex-col items-center justify-center relative rounded-3xl">
                    {/* Diagonal Fade Center Grid Background */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                            backgroundImage: `
                                linear-gradient(to right, #404040 1px, transparent 1px),
                                linear-gradient(to bottom, #404040 1px, transparent 1px)
                            `,
                            backgroundSize: "32px 32px",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 60%)",
                            maskImage:
                                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 60%)",
                            }}
                        />
                        <button 
                        className="px-2 py-1 bg-transparent text-white z-10 border border-sky-800 rounded-md shadow-[0px_0px_38px_20px_rgba(0,166,244,0.5)]"
                        >
                            Hey! How can I help you?
                        </button>
                        <div className="absolute flex justify-between items-center bottom-0 w-3/4 h-12 rounded-sm border border-neutral-700">
                            <span className="w-3/4 px-3 text-neutral-400 flex gap-2">
                                <img src={Sparkle} alt="Sparkle" className="size-6" />
                                Who's our most profitable customer?
                            </span>
                            <span className="relative w-1/4 group">
                                <button 
                                className="relative px-2 py-1 rounded-lg bg-primary font-bold z-10 text-white cursor-pointer hover:bg-sky-600 transition duration-300 ease-in"
                                style={{
                                    backgroundImage: `
                                        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 30%),
                                        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 20%),
                                        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 35%)
                                    `,
                                }}
                                >
                                    Ask Genius
                                </button>
                                <div className="absolute -inset-2 opacity-0 rounded-lg bg-linear-to-r from-sky-600 via-indigo-600 to-blue-600 group-hover:opacity-75 blur-lg transition duration-300 ease-in" />
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="px-10 z-10 h-2/5 flex flex-col gap-3 justify-center">  
                    <h4 className="text-white text-xl font-semibold">Chat with Genius</h4>
                    <h6 className="text-neutral-500 text-md max-w-[95%]">Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless.</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default AnotherBento

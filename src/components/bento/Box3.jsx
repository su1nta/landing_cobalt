import React from 'react'
import BannerRealtimeBg from '../../assets/banner/BannerRealtimeBg.svg';
import MobileApp from '../../assets/banner/mobile-app.svg';
import Hand from '../../assets/banner/hand.png';

function Box2() {
    return (
        <>
            <div className="w-full h-full">
                <div className="relative w-full h-3/5 pointer-events-none flex items-center justify-between">
                    <div className="w-[15%] h-full bg-red-500 flex flex-col">
                        <div className="h-1/2 w-0.5 mx-auto bg-neutral-700 " />
                        <div className="h-4 w-4 rounded-full border-2 border-neutral-700 mx-auto" />
                        <div className="flex-1 w-0.5 mx-auto bg-neutral-700 " />
                    </div>
                    <div className="w-[85%] h-full bg-amber-500 grid grid-flow-col grid-rows-8 gap-4">
                        <div className="row-span-4 bg-green-400">
                            
                        </div>
                        <div className="row-span-3 bg-green-400"></div>
                        <div className="row-span-1 bg-green-400"></div>
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

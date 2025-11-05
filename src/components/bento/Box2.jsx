import React from 'react'
import BannerRealtimeBg from '../../assets/banner/BannerRealtimeBg.svg';
import MobileApp from '../../assets/banner/mobile-app.svg';
import Hand from '../../assets/banner/hand.png';

function Box2() {
    return (
        <>
            <div className="w-full h-full">
                <div className="relative w-full h-3/5 pointer-events-none">
                    <img src={BannerRealtimeBg} alt="Banner Background" className="w-full object-cover mask-r-from-20% -p-2" />
                    <div className="absolute left-1/2 top-54 -translate-x-1/2 -translate-y-1/2 mask-b-from-30% bg-neutral-900 ">
                        <img src={MobileApp} alt="Insights" className="w-44 object-cover object-top-left" />
                    </div>
                    <div className="z-30 absolute -bottom-2 right-0 mx-auto mask-b-from-60% ">
                        <img src={Hand} alt="Insights" className="w-50 object-cover object-top-left" />
                    </div>
                </div>
                <div className="px-10 z-10 h-2/5 flex flex-col gap-3 justify-center">  
                    <h4 className="text-white text-xl font-semibold">Manage in real time</h4>
                    <h6 className="text-neutral-500 text-md max-w-[95%]">Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it's 2025.</h6>
                </div>
            </div>
        </>
    )
}

export default Box2

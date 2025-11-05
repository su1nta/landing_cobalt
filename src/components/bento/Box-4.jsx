import React from 'react'
import Keyboard from '../../assets/banner/kbd.png';
import Keys from '../../assets/banner/keys.png';
import Control from '../../assets/banner/BannerControl.svg';

function Box4() {
    return (
        <>
            <div className="w-full h-full">
                
                <div className="relative w-full h-3/5 pointer-events-none overflow-clip">
                    <img src={Keyboard} alt="Banner Background" className="absolute top-10 left-10 translate-x-45 translate-y-15 w-full object-cover mask-r-from-20% scale-170" />
                    <img src={Keys} alt="Banner Background" className="absolute top-10 left-10 translate-x-45 translate-y-15 w-full object-cover mask-r-from-20% scale-170" />
                    <div className="z-30 absolute translate-x-20 translate-y-4 bg-neutral-900 border border-neutral-600 rounded-xl">
                        <img src={Control} alt="Insights" className="w-74 object-cover object-top-left" />
                    </div>
                </div>
                <div className="px-10 z-10 h-2/5 flex flex-col gap-3 justify-center">  
                    <h4 className="text-white text-xl font-semibold">You're in control</h4>
                    <h6 className="text-neutral-500 text-md max-w-[95%]">Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.</h6>
                </div>
            </div>
        </>
    )
}

export default Box4

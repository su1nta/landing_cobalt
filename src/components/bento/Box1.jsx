import React from 'react'
import BannerInsightsBg from '../../assets/banner/BannerInsightsBg.svg';
import BannerInsights from '../../assets/banner/BannerInsights.svg';

function Box1() {
    return (
        <>
            <div className="w-full h-full">
                <div className="relative w-full h-3/5 pointer-events-none">
                    <img src={BannerInsightsBg} alt="z-30 Banner Background" className="w-full object-cover mask-r-from-20% -p-2" />
                    <div className="z-20 absolute top-12 right-10 bg-neutral-900 border border-neutral-700 rounded-xl mask-b-from-30%">
                        <img src={BannerInsights} alt="Insights" className="w-64 object-cover object-top-left" />
                    </div>
                    
                </div>
                <div className="px-10 z-10 h-2/5 justify-center flex flex-col gap-3">  
                    <h4 className="text-white text-xl font-semibold">Insights at your fingertips</h4>
                    <h6 className="text-neutral-500 text-md max-w-[95%]">All your data and finances in one place to provide quick answers and make decisions instantly</h6>
                </div>
            </div>
        </>
    )
}

export default Box1

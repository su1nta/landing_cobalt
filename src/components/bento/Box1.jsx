import React from 'react'
import BannerInsightsBg from '../../assets/banner/BannerInsightsBg.svg';
import BannerInsights from '../../assets/banner/BannerInsights.svg';

function Box1() {
    return (
        <>
            <div className="absolute inset-0 -left-20 top-10 w-full max-w-full overflow-hidden bg-linear-to-r from-transparent to-neutral-900">
                <img
                    src={BannerInsightsBg}
                    alt="Insights Background"
                    className="absolute  h-full w-full object-cover opacity-40"
                />
                
            </div>
            <div className="relative w-full flex items-end justify-end h-80 mt-30">
                <img
                    src={BannerInsights}
                    alt="Insights"
                    className="h-auto w-2/3 object-contain bg-neutral-900 border rounded-xl border-neutral-700 mr-5"
                />
                <div
                    aria-hidden
                    className="flex flex-col justify-end gap-3 pointer-events-none absolute inset-x-0 bottom-0 h-70 bg-linear-to-t from-neutral-900 to-transparent"
                >
                    <h4 className="text-xl text-white px-5">Insights at your fingertips</h4>
                    <h4 className="text-md text-neutral-400 px-5 max-w-3/4">All your data and finances in one place to provide quick answers and make decisions instantly.</h4>
                </div>
            </div>
        </>
    )
}

export default Box1

import React from 'react'
import FeatureText from './FeatureText'
import AnotherBento from './AnotherBento';
function GeniusFeature() {
    const title= <>Meet Genius</>;
    const subtitle = <>Our AI-driven assistant is designed 
    to decode complex financial figures and <span className="text-white">illuminate key trends</span> in your business.</>
    return (
        <>
            <div className="w-full flex flex-col gap-4 mb-20">
                <div className="w-full flex justify-start sm:px-8">
                    <FeatureText title={title} subtitle={subtitle} />
                </div>
                <div className="w-full">
                    <AnotherBento />
                </div>
            </div>
            
        </>
    )
}

export default GeniusFeature

import React from 'react'

function FeatureText({title, subtitle}) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="bg-linear-to-b from-neutral-100 to-neutral-500 bg-clip-text text-4xl md:text-5xl font-bold text-transparent">
                    {title}
                </h1>
                <h4 className="max-w-xl text-lg text-neutral-500">
                    {subtitle}
                </h4>
            </div>
        </>
    )
}

export default FeatureText

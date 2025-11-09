import React from 'react'
import Button from './Button'
function Header() {
    return (
        <>
            <div className="w-full flex items-center justify-between h-20 px-10 2xl:px-0">
                <div>
                    <h1 className="text-3xl text-white font-logo cursor-pointer">bocalt</h1>
                </div>
                <div className="flex gap-6 items-center">
                    <h4 className="text-md text-neutral-300 hover:text-white transition duration-200 ease-in cursor-pointer">Blog</h4>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Header

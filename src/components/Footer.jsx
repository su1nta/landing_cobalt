import React from 'react'
import Button from './Button'
import X from '../assets/logo/x.svg';
import LinkedIn from '../assets/logo/linkedin.svg';
import Facebook from '../assets/logo/facebook.svg';

function Footer() {
    return (
        <>
            <div className="h-180 w-full divide-y divide-neutral-600 relative">
                <div 
                className="absolute inset-0 pointer-events-none z-0 mask-x-from-50%"
                style={{
                backgroundImage: `
                    radial-gradient(ellipse at 20% 30%, rgba(0, 212, 255, 0.4) 0%, transparent 30%),
                    radial-gradient(ellipse at 80% 70%, rgba(0, 92, 246, 0.3) 0%, transparent 45%),
                    radial-gradient(ellipse at 60% 20%, rgba(0, 105, 168, 0.25) 0%, transparent 20%),
                    radial-gradient(ellipse at 40% 80%, rgba(0, 197, 94, 0.2) 0%, transparent 45%)
                `,
                }}
                />
                <div className="flex flex-col gap-4 items-center justify-center h-4/6 w-full relative">
                    <div className="via-primary absolute inset-x-0 top-0.5 h-px w-full bg-linear-to-r from-transparent from-30% to-transparent to-70% opacity-70 transition ease-in duration-400" />
                    <h1 className="max-w-xl text-4xl text-center font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-700"> See where financial automation can take your business.</h1>
                    <h4 className="text-xl text-center text-neutral-500">The first financial tool you'll love. And the last one you'll ever need.</h4>
                    <div className="mt-10">
                        <Button />
                    </div>
                </div>
                <div className="flex flex-col gap-8 lg:gap-4 p-2 h-2/6 w-full">
                    <div className="h-1/5 flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="order-2 lg:order-1 flex gap-4 text-sm text-neutral-400">
                            <span>&copy; 2025 Bocalt Financial Technologies Inc.</span>
                            <span className="cursor-pointer hover:text-neutral-50 transition duration-300 ease-in">Privacy Policy</span>
                            <span className="cursor-pointer hover:text-neutral-50 transition duration-300 ease-in">Terms of use</span>
                        </div>
                        <div className="order-1 lg:order-2 flex items-center justify-center gap-4">
                            <img src={X} alt="X Logo" className="size-8 bg-neutral-600 p-2 rounded-md cursor-pointer" />
                            <img src={LinkedIn} alt="LinkedIn Logo" className="size-8 bg-neutral-600 p-2 rounded-md cursor-pointer" />
                            <img src={Facebook} alt="Facebook Logo" className="size-8 bg-neutral-600 p-2 rounded-md cursor-pointer" />
                        </div>
                    </div>
                    <div className="h-4/5 flex flex-col gap-4 text-sm text-neutral-600 text-center lg:text-left">
                        <p className="max-w-3xl">Bocalt is a trademark or registered trademark of Bocalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Bocalt.</p>
                        <p className="max-w-3xl">Bocalt is a financial technology company, not a bank. Banking services are provided by Telcric Bank and Veeolve Bank & Trust®, Members FDIC.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer
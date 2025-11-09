import React from 'react'

function Button() {
    {/* this part demonstrates group hover */}
    return (
      <div className="group flex justify-center transision duration-700">
        <button className="hover:shwdow-primary relative cursor-pointer rounded-3xl border border-neutral-700 px-3 py-2 text-sm text-neutral-400 transition duration-400 hover:border-neutral-600 hover:text-neutral-300 hover:shadow-[0px_0px_12px_1px_rgba(0,166,244,0.2)]">
          <div className="via-primary absolute inset-x-0 -top-0.5 h-px w-full bg-linear-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition ease-in duration-400" />
          Join the Waitlist
          <div className="via-primary absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent to-transparent group-hover:opacity-70 transition ease-in duration-400" />
        </button>
      </div>
    )
}

export default Button

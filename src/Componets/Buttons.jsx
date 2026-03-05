import React, { children } from 'react'

const Buttons = ({children,className,onclick}) => {
  return (
    <div className={`${className} px-4 py-4 text-xl font-medium cursor-pointer flex items-center justify-center gap-4 rounded-2xl `} onClick={onclick}>
      {children}
    </div>
  )
}

export default Buttons

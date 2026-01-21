import React, { children } from 'react'

const Buttons = ({children,className}) => {
  return (
    <div className={`${className} px-4 py-4 text-xl font-medium cursor-pointer flex items-center gap-4 rounded-2xl `}>
      {children}
    </div>
  )
}

export default Buttons

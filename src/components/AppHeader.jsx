import React from 'react'

const AppHeader = ({header,subHeader,buttonName}) => {
  return (
    <div className='flex justify-between items-center mb-4 '>
      <div className=''>
        <div className='text-md font-bold text-red-400'>{header}</div>
        <div className='text-sm text-[#B7B8BB]'>{subHeader}</div>
      </div>
      {buttonName && <button className='bg-red-400 p-2 text-white rounded-lg text-[12px]'>{buttonName}</button>}
    </div>
  )
}

export default AppHeader

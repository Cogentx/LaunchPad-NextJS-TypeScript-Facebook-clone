import React from 'react'
import InputBox from './InputBox'
import Stories from './Stories'

export default function Feed() {
  return (
    <div className='flex-grow h-screen ph-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
      <div className="mx-auto max-w-md md:max-w-lg">
        <Stories/>
        <InputBox/>
        {/* Posts */}
      </div>
    </div>
  )
}

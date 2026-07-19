import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-lg leading-normal font-semibold mb-10 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero labore molestiae corrupti quidem exercitationem.</p>
            <div className='flex justify-between'> <button className='bg-blue-500 text-gray-200 font-medium py-2 px-6 rounded-full text-lg '>Satisfied</button>
            <button className='bg-blue-500 text-white font-medium py-2 px-4 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
           
        </div>


      </div>
  )
}

export default RightCardContent

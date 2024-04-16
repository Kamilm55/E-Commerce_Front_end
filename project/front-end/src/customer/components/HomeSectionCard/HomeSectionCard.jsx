import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg 
    shadow-lg overflow-hidden w-[15rem] mx-3'>
        
        <div className='h-[13rem] w-[10rem]'>
           <img
           className='object-cover object-top w-full h-full' 
           src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1220/product/media/images/prod/SPM/PIM/20240321/18/d9005f45-334a-3494-aabd-bde7e6e56938/1_org_zoom.jpg" 
           alt="" />
        </div>

        <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
          <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton</p>
        </div>

    </div>
  )
}

export default HomeSectionCard
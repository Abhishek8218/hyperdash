import React from 'react'

export const Banner  = () => {
  return (
    <div className="">

   
    <div className=" bg-[url(/bottom-banner.png)] bg-cover bg-no-repeat max-sm:bg-center py-28 h-[700px]  flex max-sm:flex-col justify-between items-center w-full overflow-x-hidden  gap-y-10  mx-auto  lg:px-0 lg:pl-44 filter  brightness-[90%] saturate-125">
  
    <div className="text-white w-full  pt-64 md:pt-40  px-4">
      <h1 className="text-5xl font-medium mb-4">Air X</h1>
      <p className="text-3xl font-medium mb-4">Accelerate into a New Era</p>


   
    
      <div className="flex space-x-4">
        <button className="bg-white  text-black hover:border hover:border-white hover:bg-transparent cursor-pointer hover:text-white transition-all duration-300 ease-in-out px-11.5 py-3  font-semibold text-nowrap">
          Order Now
        </button>
        <button className=" text-white   hover:border hover:border-white transition-all duration-300 ease-in-out  px-11.5 py-3 font-semibold text-nowrap">
          Learn More
        </button>
      </div>
    </div>

  </div>
  </div>
  )
}

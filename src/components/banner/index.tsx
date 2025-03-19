import React from 'react'

export const Banner  = () => {
  return (
    <div className="">

   
    <div className=" bg-[url(/bottom-banner.png)] bg-cover bg-no-repeat py-28 h-[700px]  flex max-sm:flex-col justify-between items-center w-full overflow-x-hidden  gap-y-10  mx-auto  lg:px-0 lg:pl-44 filter  brightness-[90%] saturate-125">
    {/* Text Content */}
    <div className="text-white w-full md:pt-40  px-4">
      <h1 className="text-5xl font-medium mb-4">Air X</h1>
      <p className="text-3xl font-medium mb-4">Accelerate into a New Era</p>


   
    
      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-white  text-black px-6 py-3  font-semibold">
          Order Now
        </button>
        <button className=" text-white px-6 py-3 rounded-md font-semibold">
          Learn More
        </button>
      </div>
    </div>

  </div>
  </div>
  )
}

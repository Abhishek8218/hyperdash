import Image from 'next/image';

export const Showcase = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Top Section with Air X */}
      <div className="text-white absolute top-14 max-sm:left-[10%] left-[25%] z-20  text-7xl font-light mb-8">Air X</div>
      
      {/* Air X Car Image */}
      <div className="relative w-full   max-sm:max-w-[90vw]  max-w-[980px]  max-sm:h-[350px] h-[535px] mt-24">
        <Image
          src="/showcase1.png" // Add your existing image to the public folder
          alt="Air X Car Interior"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="text-white absolute max-sm:top-[21.5%] top-[36.5%] max-sm:left-[5%] left-[18%] z-20 text-xl font-base mt-6">
        Accelerate into a New Era
      </div>




      {/* Lexo Z Section */}
      <div className="flex max-sm:flex-col justify-between items-center w-full mt-20  gap-y-10  mx-auto  lg:px-0 lg:pl-44">
        
        <div className="text-white w-full lg:w-1/2 px-4">
          <h1 className="text-5xl font-bold mb-4">Lexo Z</h1>
          <p className="text-2xl font-light mb-4">Accelerate into a New Era</p>
          <p className="text-lg font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <p className="text-lg font-light mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <p className="text-lg font-light mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          
          <div className="flex max-sm:flex-col space-x-4">
            <button className="bg-white text-black hover:border hover:border-white hover:bg-transparent cursor-pointer hover:text-white transition-all duration-300 ease-in-out px-11.5 py-3  font-semibold text-nowrap">
              Order Now
            </button>
            <button className=" text-white px-11.5 py-3 hover:border hover:border-white transition-all duration-300 ease-in-out  font-semibold text-nowrap">
              Learn More
            </button>
          </div>
        </div>

    
        <div className="relative w-full lg:w-1/3 h-[500px]"> 
          <Image
            src="/showcase2.png" // Add the Lexo Z car image to the public folder and rename
            alt="Lexo Z Car"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>



   {/* Air X Section */}
   <div className="bg-white bg-[url(/showcase3.png)]  py-28  flex max-sm:flex-col justify-between items-center w-full  gap-y-10  mx-auto  lg:px-0 lg:pl-44">
        
        <div className="text-black w-full lg:w-1/3 px-4">
          <h1 className="text-5xl font-bold mb-4">Air X</h1>
          <p className="text-3xl font-medium mb-4">Accelerate into a New Era</p>
          <p className="text-lg font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
       
        
        
          <div className="flex max-sm:flex-col space-x-4">
            <button className="bg-black text-white border hover:border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer px-11.5 py-3  font-semibold text-nowrap">
              Order Now
            </button>
            <button className=" text-black hover:border hover:border-black  hover:text-black transition-all ease-in-out duration-300 cursor-pointer  px-11.5 py-3  font-semibold text-nowrap">
              Learn More
            </button>
          </div>
        </div>

      </div>


    </div>
  );
}

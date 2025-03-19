import React from "react";

const CarSpecifications = () => {
  return (
    <div className=" text-white">
      {/* Car Image & Specifications */}
      <div className="bg-black relative flex flex-col bg-[url(/feature.png)] h-[800px]  md:flex-row justify-end md:pr-[10%] x;:pr-[20%] items-center md:space-x-12 ">
        {/* <img
          src="/feature.png" // Add the correct image path here
          alt="Model Air X"
          className="w-full md:w-3/4"
        /> */}



        {/* Specifications Section */}
<div className="max-sm:absolute top-[15%] space-y-10 ">


        <h3 className="max-sm:text-center text-xl">Model Air X Specification</h3>
     
      <div className="grid grid-cols-2 text-left md:grid-cols-2 gap-24  md:text-left max-w-3xl  mx-auto">
        {/* First Column */}
        <div className="space-y-16 text-[18px] font-light">
          <div>
            <p className="font-light">Range (EPA est.)</p>
            <p>Up to 300 miles</p>
          </div>
          <div>
            <p className="font-light">Peak Power</p>
            <p>400 hp</p>
          </div>
          <div>
            <p className="font-light">Towing</p>
            <p>2000 pounds</p>
          </div>
          <div>
            <p className="font-light">Drag Coefficient</p>
            <p>0.28 cd</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-16">
          <div>
            <p className="font-light">Acceleration</p>
            <p>4.5s 0-60 mph</p>
          </div>
          <div>
            <p className="font-light">Wheels</p>
            <p>19&quot; or 20&quot;</p>
          </div>
          <div>
            <p className="font-light">Seating</p>
            <p>Up to 5</p>
          </div>
          <div>
            <p className="font-light">Top Speed</p>
            <p>130 mph</p>
          </div>
        </div>
      </div>
    
      </div>


      </div>

      {/* Performance Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 pt-24 ">
        <div className="space-y-8">
            <p className="text-xs">Max Power</p>
          <h3 className="text-5xl font-light">1200+</h3>
          <p className="text-4xl">hp</p>
        </div>
        <div className="space-y-8">
        <p className="text-xs">EPA estimated range up to</p>
          <h3 className="text-5xl font-light">516</h3>
          <p className="text-4xl">mi</p>
        </div>
        <div className="space-y-8">
        <p className="text-xs">Minutes to charge 200 miles</p>
          <h3 className="text-5xl font-light">12</h3>
          <p className="text-4xl">mins</p>
        </div>
        <div className="space-y-8"> 
        <p className="text-xs">0-60mph</p>
          <h3 className="text-5xl font-light">{"<2"}</h3>
          <p className="text-4xl">sec</p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 justify-between">
          <div className="flex flex-col items-center justify-center">
            <img src="/grid/grid1.png" alt="Impeccable Design" />
            <p className="text-left mt-2">Impeccable Design</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/grid/grid2.png" alt="Elevated Performance" />
            <p className="text-center mt-2">Elevated Performance</p>
          </div>
          <div className="flex flex-col items-center justify-center"> 
            <img src="/grid/grid3.png" alt="Great Interiors" />
            <p className="text-left mt-2">Great Interiors</p>
          </div>
        </div>
{/* 
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img src="/grid/grid4.png" alt="Sustainable Future" />
            <p className="mt-2 text-lg font-bold">Drive to a sustainable future</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/grid/grid5.png" alt="Interior" />
            <img src="/grid/grid7.png" alt="Dashboard" />
            <img src="/grid/grid7.png" alt="Speedometer" />
            <img src="/grid/grid18.png" alt="Headlight" />
          </div>
        </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[15%] py-20 px-10  justify-between">
          <div className="flex flex-col items-center justify-center">
            <img src="/grid/grid4.png" alt="Impeccable Design" />

          </div>
          <div className="flex flex-col items-start justify-start">
            <img src="/grid/grid5.png" alt="Elevated Performance" />
            <p className="text-center mt-2">Drive a sustainable  future</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum </p>

          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-10 justify-between ">

          <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 justify-between">
          <div className="flex flex-col md:items-end justify-center">
            <img src="/grid/grid6.png" alt="Impeccable Design" />

          </div>
          <div className="flex flex-col md:items-start justify-center">
            <img src="/grid/grid7.png" alt="Elevated Performance" />
            

          </div>
          <div className="flex flex-col md:items-end justify-center">
            <img src="/grid/grid8.png" alt="Impeccable Design" />

          </div>
          <div className="flex flex-col md:items-start justify-center">
            <img src="/grid/grid9.png" alt="Elevated Performance" />
         

          </div>
        </div>
          </div>



          <div className="flex justify-center items-center">
            <img src="/grid/grid10.png" alt="Elevated Performance" className="" />

          </div>
        </div>
      </div>



      
    </div>
  );
};

export default CarSpecifications;

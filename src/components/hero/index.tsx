import React from 'react'

export const Hero = () => {
  return (
    <main className='bg-[url(/hero.png)]   bg-cover bg-center sm:bg-center h-[90vh] flex items-center justify-center mt-24.5 '>
        <div className='text-white text-center'>    
            <button className='absolute bottom-2 max-sm:left-[34%]   sm:bottom-0 border border-white hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer text-white px-5 py-1.5 mt-4'>Test Drive</button>
        </div>

    </main>
  )
}

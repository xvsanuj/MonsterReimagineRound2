import React from 'react'

const Home = () => {
  return (
    <div className='h-screen pt-[10vh]'>
      <div className='flex h-full'>
        <div className='h-full w-[60%] flex'>
          <div className='w-1/2 h-full'>
            <div className='h-1/2 border-b-[1px] border-zinc-800 w-full flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-black'>Xiaomi</h1>
              <p className='text-sm'>India's No.1 Smartphone Brand</p>
            </div>
            <div className='h-1/2 border-b-[1px] border-zinc-800 w-full px-20 flex justify-center flex-col gap-6'>
              <p className='leading-none'>Get Attractive Offers For Your First Purchase.</p>
              <button className='px-6 py-2 bg-zinc-200 text-black'>Explore Now</button>
            </div>
          </div>
          <div className='relative w-1/2 h-full border-x-[1px] border-zinc-800'>
            <img className='h-full w-full object-cover' src="./src/assets/Images/Home/4.jpg" alt="" />
            <div className='absolute bg-[#55504c] bottom-5  left-5 h-28 w-72'>
              <h1 className='bg-[#55504c] font-normal uppercase text-2xl tracking-tighter pt-3 px-5'>every shot iconic</h1>
              <span className='h-[1px] w-[80%] bg-zinc-200 inline-block mx-5'></span>
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className='h-full w-[40%]'>

        </div>
      </div>
    </div>
  )
}

export default Home
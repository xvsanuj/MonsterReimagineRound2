import React from 'react'

const Home = () => {
  return (
    <div className='h-screen pt-[10vh]'>
      <div className='flex gap-[1%] h-full'>
        <div className='h-full w-[59.5%] flex'>
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
            <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/4.jpg" alt="" />
            <div className='absolute bg-[#55504c] bottom-5  left-5 h-28 w-72'>
              <h1 className='bg-[#55504c] font-normal uppercase text-2xl tracking-tighter pt-3 px-5'>every shot iconic</h1>
              <span className='h-[1px] w-[80%] bg-zinc-200 inline-block mx-5'></span>
              <div className='flex items-center bg-[#55504c] px-5 justify-between'>
                <h1 className='bg-[#55504c] leading-8'>Quick View</h1>
                <button className='bg-[#55504c] px-6 py-1 border-[1px] rounded-full mr-4'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-full flex w-[39.5%] border-x-[1px] border-zinc-800'>
          <div className='w-[80%] h-full flex flex-col gap-[3%] border-r-[1px] border-zinc-800'>
            <div className='h-[59%] w-full border-b-[1px] border-zinc-800'>
              <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/3.jpg" alt="" />
            </div>
            <div className='h-[38%] w-full border-y-[1px] border-zinc-800'>
            <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/2.jpg" alt="" />
            </div>
          </div>
          <div className='h-full flex items-center justify-between py-20 flex-col w-[20%]'>
            <h1 className='-rotate-90 origin-left whitespace-nowrap mt-36 ml-48 font-semibold'>Scroll Down To Next Page</h1>
            <h1 className='-rotate-90 text-2xl font-black whitespace-nowrap origin-left tracking-tighter ml-16'>PAGE 1</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
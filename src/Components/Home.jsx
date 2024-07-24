const Home = () => {
  return (
    <div className='h-[90vh] w-full'>
      <div className='flex flex-col lg:flex-row gap-[1%] h-full'>
        <div className='h-full w-full lg:w-[59.5%] flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 h-full'>
            <div className='h-1/2 border-b-[1px] border-zinc-800 w-full flex flex-col items-center justify-center'>
              <h1 className='text-3xl sm:text-4xl lg:text-6xl font-black'>Xiaomi</h1>
              <p className='text-sm'>India's No.1 Smartphone Brand</p>
            </div>
            <div className='h-1/2 border-b-[1px] border-zinc-800 w-full px-5 sm:px-10 lg:px-20 flex justify-center flex-col gap-6'>
              <p className='leading-none text-center sm:text-left'>Get Attractive Offers For Your First Purchase.</p>
              <button className='px-6 py-2 mb-5 rounded-md bg-zinc-200 text-black'>Explore Now</button>
            </div>
          </div>
          <div className='relative w-full lg:w-1/2 h-full border-x-[1px] border-zinc-800'>
            <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/4.jpg" alt="" />
            <div className='absolute bg-[#55504c] bottom-5 left-5 h-28 w-68 lg:w-72 sm:block rounded-md overflow-hidden'>
              <h1 className='bg-[#55504c] font-normal uppercase text-xl lg:text-2xl tracking-wide lg:tracking-tighter pt-3 px-5'>every shot iconic</h1>
              <span className='h-[1px] w-[90%] lg:w-[80%] bg-zinc-200 inline-block lg:mx-5 mx-3'></span>
              <div className='flex items-center bg-[#55504c] lg:px-5 px-2 justify-between lg:my-0 my-2'>
                <h1 className='bg-[#55504c] leading-8'>Quick View</h1>
                <button className='bg-[#55504c] px-6 py-1 border-[1px] rounded-full mr-4'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-full flex w-full lg:w-[39.5%] border-x-[1px] border-zinc-800 flex-col lg:flex-row'>
          <div className='w-full lg:w-[80%] h-full flex flex-col gap-[3%] border-r-[1px] border-zinc-800'>
            <div className='h-[59%] w-full border-b-[1px] border-zinc-800'>
              <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/3.jpg" alt="" />
            </div>
            <div className='h-[38%] w-full border-y-[1px] border-zinc-800'>
              <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Home/2.jpg" alt="" />
            </div>
          </div>
          <div className='hidden h-full lg:flex items-center justify-between py-10 lg:py-20 flex-col w-full lg:w-[20%]'>
            <h1 className='-rotate-90 origin-left whitespace-nowrap mt-12 lg:mt-36 lg:ml-48 font-semibold text-xs sm:text-sm lg:text-base'>Scroll Down To Next Page</h1>
            <h1 className='-rotate-90 text-base sm:text-xl lg:text-2xl font-black whitespace-nowrap origin-left tracking-tighter lg:ml-16'>PAGE 1</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
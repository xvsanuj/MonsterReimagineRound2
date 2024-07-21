const Visiting = () => {
  return (
    <div className='h-screen w-full flex flex-col lg:flex-row mt-12 md:mt-0'>
        <div className='h-1/4 lg:h-full w-full lg:w-[40%] border-l-[1px] border-zinc-800 flex items-center justify-center lg:justify-start lg:pl-28 lg:pt-48'>
            <h1 className='text-2xl lg:text-7xl tracking-tighter font-[Monument]'>Thanks For Visiting</h1>
        </div>
        <div className='h-1/4 lg:h-full w-full lg:w-[20%] border-l-[1px] border-zinc-800 flex items-center justify-center lg:justify-start lg:pl-0 lg:pt-0'>
            <h1 className='text-2xl lg:text-7xl tracking-tighter font-[Monument] lg:rotate-90'>Smart <br className='hidden lg:block' /> Bundles</h1>
        </div>
        <div className='h-1/4 lg:h-full w-full lg:w-[20%] border-l-[1px] border-zinc-800 flex items-center justify-center lg:justify-start lg:pl-0 lg:pt-0'>
            <h1 className='text-2xl lg:text-7xl tracking-tighter font-[Monument] lg:rotate-90'>Exclusive <br className='hidden lg:block' /> Coupons</h1>
        </div>
        <div className='h-1/4 lg:h-full w-full lg:w-[20%] border-l-[1px] border-zinc-800 flex items-center justify-center lg:justify-start lg:pl-0 lg:pt-0'>
            <h1 className='text-2xl lg:text-7xl tracking-tighter font-[Monument] lg:rotate-90'>No.1 <br className='hidden lg:block' /> Brand</h1>
        </div>
    </div>
  )
}

export default Visiting;

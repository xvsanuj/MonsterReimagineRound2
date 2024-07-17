const Explore = () => {
  return (
    <div className='h-screen w-full'>
      <div className='h-[60vh] relative w-full'>
        <img className='h-[60vh] w-full object-cover object-top' src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Explore/1.jpeg" alt="" />
        <div className='absolute top-0 left-0 h-[60vh] w-full bg-zinc-900 opacity-85'></div>
        <div className='absolute bottom-24 flex flex-col gap-4 left-32'>
          <h1 className="text-8xl w-0 whitespace-nowrap font-semibold tracking-tighter">Explore Xiaomi</h1>
          <p className="w-0 whitespace-nowrap text-sm font-semibold">India's No.1 Smartphone Brand</p>
        </div>
      </div>
      <div className="h-[40vh] w-full relative flex">
        <div className="h-full w-full relative">
          <img className="h-full w-full object-cover object-top" src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Explore/2.jpeg" alt="" />
        </div>
        <div className="h-full w-full relative">
          <img className="h-full w-full object-cover object-top" src="https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Images/Explore/3.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Explore
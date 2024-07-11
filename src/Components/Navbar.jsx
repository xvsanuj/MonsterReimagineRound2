import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="h-[10vh] border-b-[1px] w-full flex items-center justify-between px-20">
        <div className="flex items-center w-[30%] gap-2">
            <h1 className="text-2xl font-semibold tracking-tighter">Xiaomi</h1>
            <span className="h-6 w-[2px] rounded-full bg-zinc-600"></span>
            <p className="text-xs font-semibold leading-none">India's No.1 <br /> Smartphone Brand</p>
        </div>
        <div className="flex items-center justify-center w-[40%] text-sm font-medium gap-5">
          <h1>Store</h1>
          <h1>Phones</h1>
          <h1>Tablets</h1>
          <h1>TV & Smart Home</h1>
          <h1>Smart Watch & Audio</h1>
        </div>
        <div className="w-[30%] flex items-center justify-end">
          <div className="h-12 flex items-center drop-shadow-2xl justify-evenly w-32 rounded-full bg-orange-600">
          <CiSearch className="text-2xl cursor-pointer text-white"/>
          <div className="hamburger cursor-pointer w-10 rounded-full h-10 flex items-center justify-center gap-2 flex-col">
            <span className="h-[0.15rem] inline-block w-8 bg-white rounded-full"></span>
            <span className="h-[0.15rem] inline-block w-8 bg-white rounded-full"></span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
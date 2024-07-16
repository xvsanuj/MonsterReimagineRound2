import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const navLinks = ["Store", "Phones", "Tablets", "TV & Smart Home", "Smart Watch & Audio"];
  return (
    <div className="h-[10vh] justify-between flex items-center px-20 w-full border-b-[1px] border-zinc-800">
      <div className="w-[25%] flex items-center gap-4">
        <h1 className="text-3xl font-semibold tracking-tighter">Xiaomi</h1>
        <span className="h-8 w-[3px] inline-block bg-zinc-800 rounded-full"></span>
        <p className="text-xs font-semibold leading-none">India's No1 <br />Smartphone Brand</p>
      </div>
      <div className="w-[50%] flex justify-center gap-6">
        {
          navLinks.map((link, index) => (
            <h1 className="cursor-pointer text-sm">{link}</h1>
          ))
        }
      </div>
      <div className="w-[25%] flex items-center gap-8 justify-end">
        <span className="text-2xl cursor-pointer"><CiSearch/></span>
        <div className="h-3 cursor-pointer flex flex-col justify-between">
          <span className="inline-block h-[.1rem] bg-white w-10"></span>
          <span className="inline-block h-[.1rem] bg-white w-10"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import gsap from "gsap";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {

  var tl = gsap.timeline();

  var handleNavClick = ()=>{
    // First Animation Loop Complete
    tl.to(".line1", {
      width: 0,
      duration: 0.9,
      ease: "back.inOut",
    }, "kinetic")
    tl.to(".line2", {
      width: 0,
      duration: 0.9,
      ease: "back.inOut",
    }, "kinetic")
    // Setting Rotation Before The Animation
    tl.set(".line1", {
      rotation: 45,
      top: 5
    })
    tl.set(".line2", {
      rotation: -45,
      top: 5
    })
    // Performing Final Cross Animation
    tl.to(".line1", {
      width: "100%",
    })
    tl.to(".line2", {
      width: "100%",
    })
  }

  const navLinks = ["Store", "Phones", "Tablets", "TV & Smart Home", "Smart Watch & Audio"];
  return (
    <div className="h-[10vh] fixed justify-between flex items-center px-20 w-full border-b-[1px] border-zinc-800 z-50">
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
        <div onClick={handleNavClick} className="h-3 w-10 relative cursor-pointer">
          <span className="line1 absolute left-0 top-0  inline-block h-[.1rem] bg-white w-10"></span>
          <span className="line2 absolute right-0 bottom-0  inline-block h-[.1rem] bg-white w-10"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
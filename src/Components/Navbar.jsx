import gsap from "gsap";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
<<<<<<< HEAD

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
=======
  const navLinks = [
    "Store",
    "Phones",
    "Tablets",
    "TV & Smart Home",
    "Smart Watch & Audio",
  ];
>>>>>>> 2a6c1cd6c411f3a3db5fcfa84f410f092ed908ce
  return (
    <div className="h-12 lg:h-[10vh] fixed justify-between flex items-center px-5 lg:px-20 w-full border-b-[1px] border-zinc-800 z-50">
      <div className="lg:w-[25%] flex items-center gap-4">
        <h1 className="text-lg tracking-wide lg:text-3xl font-semibold lg:tracking-tight">
          Xiaomi
        </h1>
        <span className="h-5 lg:h-8 w-[3px] inline-block bg-zinc-800 rounded-full"></span>
        <p className="text-[8px] lg:text-xs font-thin lg:font-semibold leading-none">
          India's No1 <br />
          Smartphone Brand
        </p>
      </div>
      <div className="hidden w-[50%] lg:flex justify-center gap-6">
        {navLinks.map((link, index) => (
          <h1 key={index} className="cursor-pointer text-sm">
            {link}
          </h1>
        ))}
      </div>
<<<<<<< HEAD
      <div className="w-[25%] flex items-center gap-8 justify-end">
        <span className="text-2xl cursor-pointer"><CiSearch/></span>
        <div onClick={handleNavClick} className="h-3 w-10 relative cursor-pointer">
          <span className="line1 absolute left-0 top-0  inline-block h-[.1rem] bg-white w-10"></span>
          <span className="line2 absolute right-0 bottom-0  inline-block h-[.1rem] bg-white w-10"></span>
=======
      <div className="w-[18%] lg:w-[25%] flex lg:items-center lg:gap-8 justify-end">
        <span className="hidden lg:block text-2xl cursor-pointer">
          <CiSearch />
        </span>
        <div className="h-2 lg:h-3 cursor-pointer flex flex-col justify-between">
          <span className="inline-block h-[.1rem] bg-white w-10"></span>
          <span className="inline-block h-[.1rem] bg-white w-10"></span>
>>>>>>> 2a6c1cd6c411f3a3db5fcfa84f410f092ed908ce
        </div>
      </div>
    </div>
  );
};

export default Navbar;

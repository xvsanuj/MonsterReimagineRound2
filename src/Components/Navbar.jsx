import gsap from "gsap";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [nav, setNav] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  var firstRef = useRef(null);
  var secondRef = useRef(null);
  var navFirstRef = useRef(null);
  var navSecondRef = useRef(null);
  var handleNavClick = (dets) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setNav("rotated");
    var tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    })
    if (nav != "rotated") {
      tl.to(firstRef.current, {
        top: 0,
        ease: "expo.inOut",
        duration: 1,
      });
      tl.to(secondRef.current, {
        delay: -0.8,
        top: 0,
        ease: "expo.inOut",
        duration: 1,
      });
      gsap.to(navFirstRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navFirstRef.current, {
            bottom: 15,
            margin: 0,
          });
          gsap.set(navFirstRef.current, {
            rotate: -45,
            delay: -10,
          });
          tl.to(navFirstRef.current, {
            width: "100%",
            delay: -0.5,
          });
        },
      });
      gsap.to(navSecondRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navSecondRef.current, {
            top: 15,
            margin: 0
          });
          gsap.set(navSecondRef.current, {
            delay: -10,
            rotate: 45,
          });
          tl.to(navSecondRef.current, {
            width: "100%",
            delay: -0.3,
          });
        },
      });
      gsap.from(".animation span", {
        y: 100,
        stagger: .1,
        duration: 2,
        ease: 'power4.inOut'
      });
    } else {
      setNav("vertical");
      tl.to(secondRef.current, {
        top: "-100vh",
        ease: "expo.inOut",
        duration: 1,
      });
      tl.to(firstRef.current, {
        delay: -0.8,
        top: "-100vh",
        ease: "expo.inOut",
        duration: 1,
      });
      gsap.to(navFirstRef.current, {
        width: "0",
        backgroundColor: "#fff",
      });
      tl.set(navSecondRef.current, {
        rotate: 0,
        marginTop: 6
      });
      tl.set(navFirstRef.current, {
        rotate: 0,
        marginBottom: 6
      });
      tl.to(navFirstRef.current, {
        width: "100%",
        duration: .4,
      });
      gsap.to(navSecondRef.current, {
        width: "0",
        backgroundColor: "#fff",
      });
      tl.to(navSecondRef.current, {
        width: "100%",
        duration: .4,
      });
    }
  };



  const navLinks = [
    "Store",
    "Phones",
    "Tablets",
    "TV & Smart Home",
    "Smart Watch & Audio",
  ]
  return (
    <div className="h-12 lg:h-[10vh] justify-between flex items-center px-5 lg:px-20 w-full border-b-[1px] border-zinc-800 z-50">
      <div ref={firstRef} className="h-screen w-full fixed bg-orange-600 z-40 left-0 -top-[100vh]"></div>
      <div ref={secondRef} className="h-screen w-full fixed bg-black z-40 left-0 -top-[100vh]" ></div>
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
          <h1 key={index} className="cursor-pointer text-sm link w-fit">
            {link}
          </h1>
        ))}
      </div>
      <div className="w-[25%] flex items-center gap-8 justify-end">
        <div className="fixed h-[6vh] w-[10vw] rounded-xl flex items-center justify-between pl-4 z-50">
          <span className="text-2xl fixed z-50 cursor-pointer ml-2"><CiSearch/></span>
          <div onClick={handleNavClick} className="navMenu h-8 w-10 flex items-center justify-center  cursor-pointer fixed z-40 left-[85%] md:left-[90%] lg:top-5 top-4">
            <h1 ref={navFirstRef} className="h-[2px] w-10 monument bg-white rounded-full inline-block absolute bottom-2 right-0"></h1>
            <h1 ref={navSecondRef} className="h-[2px] w-10 monument bg-white rounded-full inline-block absolute top-2 left-0"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  const [btnClick, setBtnClick] = useState(false)

  const btnClicked = () => {
    setBtnClick(!btnClick);
  }

  const linkVariants1 = {
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    closed: (i) => ({
      y: -30,
      opacity: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const navLinks = ["Store", "Phones", "Tablets", "TV & Smart Home", "Smart Watch & Audio"];
  // const menuLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <div className="h-[10vh] border-b-[1px] w-full flex items-center justify-between px-20 relative">
      <div className="flex items-center w-[30%] gap-2">
        <h1 className="text-2xl font-semibold tracking-tighter">Xiaomi</h1>
        <span className="h-6 w-[2px] rounded-full bg-zinc-600"></span>
        <p className="text-xs font-semibold leading-none">India's No.1 <br /> Smartphone Brand</p>
      </div>
      <div className="flex items-center justify-center  text-sm font-medium gap-5">
        <h1>Store</h1>
        <h1>Phones</h1>
        <h1>Tablets</h1>
        <h1>TV & Smart Home</h1>
        <h1>Smart Watch & Audio</h1>
      </div>

      <MotionConfig
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          animate={btnClick ? "open" : "closed"}  // Animate prope
          variants={{
            open: {
              clipPath: "circle(100% at 50% 50%)",
              opacity: ["0", "0", "0", "1"],

            },
            closed: {
              clipPath: "circle(20px at 95% 5%)",
              opacity: ["1", "1", "1", "0"],
              left: "50%",
              top: "32%",
            },
          }}
          className="toggle-menu absolute top-[10%] left-[50%] -translate-x-[51%] -translate-y-[0%] w-[95vw] h-[90vh] bg-[#EA580C] rounded-2xl p-10">
          <div className="toggle-cont flex w-full h-full">
            <div className="nav-left flex items-center w-1/2 h-full">
              <div className="nav-links flex flex-col gap-5 px-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    custom={i}
                    animate={btnClick ? "open" : "closed"}
                    variants={linkVariants1}
                    className="nav-link uppercase text-4xl text-white h-[8vh] flex items-center"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="nav-right w-1/2 h-full flex items-center justify-center">
              <div className="right-img w-1/2 h-[50vh]">
                <img className='w-full h-full object-cover' src="https://lukaszadam.com/images/free-illustrations/website_work.svg" alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </MotionConfig>

      <div className="flex items-center justify-end">
        <MotionConfig
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            animate={btnClick ? "open" : "closed"}
            variants={{
              open: {
                width: ["11vw", "11vw", "3.5vw"],
              },
              closed: {
                width: ["3.5vw", "11vw", "11vw"],
              }
            }}
            className="w-[11vw] h-12 flex items-center drop-shadow-2xl justify-evenly rounded-full bg-orange-600">
            <motion.div
              animate={btnClick ? "open" : "closed"}
              variants={{
                open: {
                  width: ["3vw", "3vw", "0vw"],
                  opacity: ["1", "0", "0"]
                },
                closed: {
                  width: ["0vw", "3vw", "3vw"],
                  opacity: ["0", "0", "1"]
                }
              }}
              className="search-icon w-[3vw] flex items-center justify-center">
              <CiSearch className="text-3xl  cursor-pointer text-white" />
            </motion.div>
            <motion.div
              onClick={btnClicked}
              animate={btnClick ? "open" : "closed"}
              className="hamburger cursor-pointer togggle-btn w-[4.5vw] h-[4.5vw] relative rounded-full">
              <motion.span
                style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["40%", "50%", "50%"]
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "40%"]
                  }
                }}
                className='absolute w-8 h-[2px] bg-zinc-100'>
              </motion.span>
              <motion.span
                style={{ top: "60%", left: "50%", x: "-50%", y: "-50%" }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                    top: ["60%", "50%", "50%"]
                  },
                  closed: {
                    rotate: ["-45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "60%"]
                  }
                }}
                className='absolute w-8 h-[2px] bg-zinc-100'>
              </motion.span>
            </motion.div>
          </motion.div>
        </MotionConfig>
      </div>

    </div>
  )
}

export default Navbar
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  const [btnClick, setBtnClick] = useState(false)

  const btnClicked = () => {
      setBtnClick(!btnClick);
  }

  const navLinks = ["Store", "Phones", "Tablets", "TV & Smart Home", "Smart Watch & Audio"];
  const menuLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

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

      {/* <div className="w-[30%] flex items-center justify-end">
          <div className="h-12 flex items-center drop-shadow-2xl justify-evenly w-32 rounded-full bg-orange-600">
          <CiSearch className="text-2xl cursor-pointer text-white"/>
          <div className="hamburger cursor-pointer w-10 rounded-full h-10 flex items-center justify-center gap-2 flex-col">
            <span className="h-[0.15rem] inline-block w-8 bg-white rounded-full"></span>
            <span className="h-[0.15rem] inline-block w-8 bg-white rounded-full"></span>
          </div>
          </div>
        </div> */}

      <div className="nav-right">
        <MotionConfig
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            animate={btnClick ? "open" : "closed"}  // Animate prope
            variants={{
              open: {
                width: ["11vw", "11vw", "5vw"],
              },
              closed: {
                width: ["5vw", "11vw", "11vw"],
              }
            }}
            className="menu w-[11vw] h-[10.2vh] bg-white rounded-full flex items-center justify-between p-1 flex-wrap">
            <div className="hand-cont w-full h-full flex items-center justify-between">
              <motion.div
                onClick={btnClicked}  // condition
                animate={btnClick ? "open" : "closed"}  // Animate prope
                className="togggle-btn w-[4.5vw] h-[4.5vw] relative rounded-full">
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
                  className='absolute w-8 h-[2px] bg-zinc-600'>
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
                  className='absolute w-8 h-[2px] bg-zinc-600'>
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </MotionConfig>
      </div>

    </div>
  )
}

export default Navbar
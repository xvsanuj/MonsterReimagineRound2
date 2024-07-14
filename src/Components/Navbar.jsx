import { motion, MotionConfig } from 'framer-motion'
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

  return (
    <div className="h-[10vh] border-b-[1px] w-full flex items-center justify-between px-10 fixed z-30">
      <div className="flex items-center px-2 gap-1">
        <div className="logo-cont size-16">
          <div className="logo"></div>
        </div>
        <span className="h-6 w-[2px] rounded-full bg-zinc-600"></span>
        <h1 className="text-2xl tracking-wide px-4">Xiaomi</h1>
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
          className="toggle-menu absolute z-20 top-[10%] left-[50%] -translate-x-[50%] -translate-y-[0%] w-[95vw] h-[90vh] bg-[#EA580C] rounded-2xl p-10">
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
            <div className="nav-right w-1/2 h-full flex items-center justify-end">
              <div className="right-img w-[90%] h-[100%]">
              </div>
            </div>
          </div>
        </motion.div>
      </MotionConfig>

      <div className="h-15 w-[11vw] flex items-center justify-end">
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
            className="w-[11vw] h-12 flex items-center shadow-md justify-evenly rounded-full bg-orange-600">
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
              className="hamburger cursor-pointer togggle-btn w-[4.5vw] h-[4.5vw] relative z-30 rounded-full">
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
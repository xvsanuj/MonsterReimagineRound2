import gsap from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger); 
import { useEffect } from "react"; 
 
const Visiting = () => { 
    useEffect(() => { 
        gsap.to(".elems-visit", { 
            x:"-40%", 
            y:0, 
          scrollTrigger:{ 
            trigger: ".elems-visit", 
            start: "top top", 
            end: "120% top", 
            scrub: true, 
            pin:true, 
          } 
        }); 
      }); 
 
  return ( 
    <div  className='hello relative h-[200vh] w-full overflow-x-hidden'> 
       <div className="elems-visit w-full h-screen flex"> 
       <div className='elem h-full  shrink-0 w-[40%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] w-72 pt-48 pl-28'>Thanks For Visiting</h1> 
        </div> 
        <div className='elem h-full  shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Smart <br /> Bundles</h1> 
        </div> 
        <div className='elem h-full  shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Exclusive <br /> Coupons</h1> 
        </div> 
        <div className='elem h-full  shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>No.1 <br /> Brand</h1> 
        </div> 
        <div className='elem h-full  shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>No.1 <br /> Brand</h1> 
        </div> 
        <div className='elem h-full  shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
            <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>No.1 <br /> Brand</h1> 
        </div> 
       </div> 
    </div> 
  ) 
} 
 
export default Visiting
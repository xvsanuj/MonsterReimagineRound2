import gsap from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger); 
import { useEffect } from "react"; 
 
const Visiting = () => { 
    useEffect(() => { 
        gsap.to(".elems-visit", { 
            x:"-80%", 
            y:0, 
            scrollTrigger:{ 
                trigger: ".elems-visit", 
                start: "top top", 
                end: "+=100%", 
                scrub: true, 
                pin: true, 
            } 
        }); 
    }, []); 
 
    return ( 
        <div className='hello relative h-[200vh] w-full overflow-x-hidden'> 
            <div className="elems-visit w-full h-screen flex"> 
                <div className='elem relative h-full shrink-0 w-[40%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-6xl text-center tracking-tighter font-[Monument] w-72 pt-48 pl-28'>Thanks For Visiting.</h1> 
                    <img className="absolute top-[55%] left-[45%] -translate-x-2/4 h-40 w-40 object-cover" src="https://cdn3d.iconscout.com/3d/premium/thumb/heart-8190390-6507858.png" alt="" />
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Smart <br /> Bundles</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Exclusive <br /> Coupons</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Smart <br /> TV</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Power <br /> Bank</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-7xl tracking-tighter font-[Monument] rotate-90 mt-64'>Audio <br /> Products</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-6xl tracking-tighter font-[Monument] rotate-90 mt-64'>Bestselling <br /> Smartphone's</h1> 
                </div> 
                <div className='elem h-full shrink-0 w-[20%] border-l-[1px] border-zinc-800'> 
                    <h1 className='text-6xl tracking-tighter font-[Monument] rotate-90 mt-64'>No1 <br /> Brand</h1> 
                </div> 
            </div> 
        </div> 
    ); 
}; 
 
export default Visiting;
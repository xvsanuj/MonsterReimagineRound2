import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='h-[90vh] w-full flex'>
        <div className='w-[70%] h-full flex pl-20 pt-16'>
            <div className='w-[20%] '>
                <h1 className='text-lg font-semibold tracking-tighter'>Support</h1>
                <p className='text-sm py-2'>Onlline Help</p>
                <p className='text-sm py-2'>Customer Service</p>
                <p className='text-sm py-2'>Shipping FAQ</p>
                <p className='text-sm py-2'>Warranty</p>
                <p className='text-sm py-2'>Mi Exchange</p>
                <p className='text-sm py-2'>Bulk Orders</p>
                <p className='text-sm py-2'>User Guide</p>
                <p className='text-sm py-2'>Laptop Drivers</p>
                <p className='text-sm py-2'>Mi Screen Protect</p>
                <p className='text-sm py-2'>Mi Complete Protect</p>
                <p className='text-sm py-2'>Certification</p>
                <p className='text-sm py-2'>Service Centre</p>
                <p className='text-sm py-2'>Xiaomi Easy Service</p>
            </div>
            <div className='w-[20%] '>
                <h1 className='text-lg font-semibold tracking-tighter'>Shop And Learn</h1>
                <p className='text-sm py-2'>Xiaomi Phones</p>
                <p className='text-sm py-2'>Redmi Phones</p>
                <p className='text-sm py-2'>Tv's</p>
                <p className='text-sm py-2'>Laptops And Tablets</p>
                <p className='text-sm py-2'>Audio</p>
                <p className='text-sm py-2'>LifeStyle</p>
                <p className='text-sm py-2'>Smart Home</p>
            </div>
            <div className='w-[20%] '>
                <h1 className='text-lg font-semibold tracking-tighter'>Retail Store</h1>
                <p className='text-sm py-2'>Mi Home</p>
                <p className='text-sm py-2'>Mi Authorized Store</p>
                <p className='text-sm py-2'>Mi Store Franchise</p>
            </div>
            <div className='w-[20%] '>
                <h1 className='text-lg font-semibold tracking-tighter'>About</h1>
                <p className='text-sm py-2'>Xiaomi</p>
                <p className='text-sm py-2'>Privacy Policy</p>
                <p className='text-sm py-2'>User Agreement</p>
                <p className='text-sm py-2'>Integrity And Compliance</p>
                <p className='text-sm py-2'>CSR And Disclosures</p>
                <p className='text-sm py-2'>E - Waste Management</p>
                <p className='text-sm py-2'>In The Pass</p>
                <p className='text-sm py-2'>Trust Center</p>
                <p className='text-sm py-2'>Culture</p>
                <p className='text-sm py-2'>Smartphone Quality</p>
                <p className='text-sm py-2'>TV Quality</p>
                <p className='text-sm py-2'>Service Quality</p>
                <p className='text-sm py-2'>Xiaomi HyperOS</p>
                <p className='text-sm py-2'>Join Our Team</p>
            </div>
        </div>
        <div className='w-[30%] h-full'>
            <h1 className='text-lg pt-16 font-semibold tracking-tighter'>Follow Mi</h1>
                <div className="flex items-center gap-5 py-4">
                    <FaFacebook className="text-black"/>
                    <FaXTwitter className="text-black"/>
                    <RiInstagramFill className="text-black"/>
                </div>
                <h1 className='text-lg pt-16 font-semibold tracking-tighter'>Let's stay in touch</h1>
                <input className="px-6 w-96 rounded-xl mt-3 py-2 border-[1px] " type="text" placeholder="Enter email address"/>
                <div className="border-[1px] w-96 p-4 rounded-xl mt-3 flex gap-4">
                    <img className="rounded-xl" src="https://i03.appmifile.com/32_operator_in/22/11/2022/9b4d58f78a203b82a56bdd11692d4ba1.png" alt="" />
                    <div>
                        <h1 className="text-lg font-semibold tracking-tighter">Get Mi Store App</h1>
                        <p className="text-xs font-semibold pt-2">Scan for our up-to-date information for better shopping experience</p>
                        <button className="text-xs font-semibold bg-white px-6 py-2 text-black rounded-lg mt-4">Get Started</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
export default Footer
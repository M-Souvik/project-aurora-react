import React from 'react'
import { useSidebar } from './ui/sidebar'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'


const Header = () => {
  const { toggleSidebar } = useSidebar()
  return (
<div className="navbar fixed top-0 left-0 right-0 flex justify-between backdrop-blur-md bg-opacity-40 z-20 px-5 border-b border-blue-400 ">
        <div className='flex gap-2 bg-transparent'>
      
       <label className="btn btn-circle swap swap-rotate bg-transparent border-none hover:bg-transparent">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={toggleSidebar}  />

  {/* hamburger icon */}
  {/* <svg
    className="swap-off fill-current text-white"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  {/* close icon */}
  {/* <svg
    className="swap-on fill-current text-white"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>  */}
  <Menu/>
</label>  
       
        {/* {token && (
             <div className="flex-none">
             
             <button className="btn btn-square btn-ghost">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 className="inline-block h-5 w-5 stroke-current">
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             </button>
           </div>
        )} */}
 
  <div className="flex-1">
  <a href={'/'} className=''>UCOE</a>
  </div>
</div>
  {/* <div className="flex-none">
  {!token && (
             <div className="flex-none">
             <Link className="border border-green-500 px-4 py-2 bg-green-400 text-black font-semibold rounded-lg  text-sm" href={'/auth/login'}>
               LOGIN
             </Link>
           </div>
        )}
  </div> */}
</div>
  )
}

export default Header
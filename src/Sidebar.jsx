import React, { useState } from 'react'
import { Logo, ProfileIcon } from './Components'
import { PiSidebarSimpleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom';


const Sidebar = () => {

   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {isSidebarOpen ? (
       <div
        className='sideBar flex flex-col justify-between gap-4 sticky top-0 left-0 
         h-screen w-60 shrink-0 border-r border-zinc-200 dark:border-zinc-800
        bg-zinc-100 dark:bg-zinc-900 z-100'
        >
          <div
           className='w-full sticky top-0 flex justify-between p-3 border-b border-zinc-200 dark:border-zinc-800 '
           >
            <Link
            to={"/"}
             >
              <Logo/>
            </Link>
            <i 
             onClick={()=>setIsSidebarOpen(false)}
             className='p-0.5 rounded bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-600'
             >
              <PiSidebarSimpleLight size={20}/>
            </i>
          </div>
          <ProfileIcon/>
       </div>
      ):(
        <i 
          onClick={()=>setIsSidebarOpen(true)}
          className='fixed top-2.5 left-2.5 p-0.5 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 z-100'
          >
           <PiSidebarSimpleLight size={20}/>
        </i>
      )}
      
    </>
  )
}

export default Sidebar
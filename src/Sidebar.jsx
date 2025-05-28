import React, { useState } from 'react'
import { Btn, Logo, NavMenu, ProfileIcon, TeamsShow } from './Components'
import { PiSidebarSimpleLight } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom';
import { PiUsersFourFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosArrowForward, } from "react-icons/io";
import { VscAdd } from "react-icons/vsc";
import { FaProductHunt } from "react-icons/fa6";
import useOrg from './Context/OrgContext';
import { useProject } from './Context/ProjectContext';


const Sidebar = () => {

   const location = useLocation();

   const { orgData } = useOrg();

   const { setSelectedProject } = useProject();

   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   
   
  return (
    <>
      {isSidebarOpen ? (
       <div
        className='sideBar flex flex-col justify-between gap-10 sticky top-0 left-0 
         h-screen w-60 shrink-0 border-r border-zinc-200 dark:border-zinc-800
        bg-zinc-100 dark:bg-zinc-900 z-100 text-zinc-700 dark:text-zinc-400'
        >
           <div className='flex flex-col'>
              <div
               className='w-full sticky top-0 flex justify-between p-3 border-b border-zinc-200 dark:border-zinc-800 '
               >
                <Link
                to={"/"}
                 >
                <Logo style={"text-zinc-800 dark:text-zinc-200"}/>
                </Link>
                <i 
                 onClick={()=>setIsSidebarOpen(false)}
                 className='p-0.5 rounded bg-zinc-500/20 hover:bg-zinc-500/40'
                 >
                  <PiSidebarSimpleLight size={20}/>
                </i>
              </div>
              <Link
               to={`/${orgData?.orgName}/members`}
               className='px-2 flex flex-col text-[12.5px] mt-3  font-semibold '
               >
                 <NavMenu
                  icon={<PiUsersFourFill size={16}/>}
                  text={"Members"}
                  icon2={<IoIosArrowForward size={16} className='opacity-30 group-hover:opacity-70'/>}
                  className={`${location.pathname.includes("members") ? "bg-zinc-800 text-zinc-300 shadow-md dark:bg-zinc-200 dark:text-zinc-800" :"group hover:bg-zinc-300 dark:hover:bg-zinc-800"} rounded-md cursor-pointer `}
                  />
              </Link>
              <TeamsShow/>
              <div
               className='px-2 mt-2 flex flex-col font-semibold gap-1 text-[12.5px] pt-2 border-t-2 border-zinc-500/8'
               > 
                 <div
                  className='flex items-center group justify-between hover:bg-zinc-500/10 rounded-md pr-2 cursor-pointer'
                  >
                   <NavMenu
                    icon={<GoProjectSymlink size={16} strokeWidth={1}/>}
                    text={"Projects"}
                    />
                    <i
                    className='opacity-30 group-hover:opacity-70'
                     >
                      <VscAdd strokeWidth={0.5}/>
                    </i>
                 </div>
                 {orgData?.projects.length > 0 ? orgData.projects.map((pro)=>(
                 <Link
                  to={`/${orgData.orgName}/project-${pro.projectName}`}
                  key={pro._id} 
                  className='ml-3'
                  onClick={()=>setSelectedProject(pro)}
                  >
                   <NavMenu
                    icon={<FaProductHunt size={15}/>}
                    text={pro.projectName}
                    className={`${location.pathname.includes(pro.projectName) ? "bg-zinc-800 text-zinc-300 shadow-md dark:bg-zinc-200 dark:text-zinc-800" :"group hover:bg-zinc-300 dark:hover:bg-zinc-800"} rounded-md`}
                    />
                 </Link>
                 )):(
                  <div className='w-full flex justify-center'>
                    <Btn
                     text={"Create Project"}
                     icon={<VscAdd strokeWidth={0.5}/>}
                     className={'mt-2 flex shadow-md hover:bg-blue-500/60 hover:border-blue-500/70 gap-2 items-center px-3 py-1 rounded-md bg-blue-500/20 border border-blue-500/30'}
                     />
                  </div>
                 )}
              </div>
            </div>
          <ProfileIcon/>
       </div>
      ):(
        <i 
          onClick={()=>setIsSidebarOpen(true)}
          className='fixed top-2.5 left-2.5 p-0.5 rounded bg-zinc-500/20 hover:bg-zinc-500/40 z-100'
          >
           <PiSidebarSimpleLight size={20}/>
        </i>
      )}
      
    </>
  )
}

export default Sidebar
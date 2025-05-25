import React, { useEffect, useRef, useState } from 'react'
import useUser from './Context/UserContext';
import { IoIosArrowDown } from "react-icons/io";
import useOrg from './Context/OrgContext';
import Loader from './Components/Loader/Loader';
import { Btn } from './Components'

const Topbar = () => {

  const { user } = useUser();
  const { orgData, changeOrg, orgLoading, orgError, setOrgError } = useOrg();

  const [showOrgMenu, setShowOrgMenu] = useState(false);
  const orgListRef = useRef();

  useEffect(()=>{
    const handleClickOutside = (e) => {
      if(orgListRef.current && !orgListRef.current.contains(e.target)){
        setShowOrgMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[])

  useEffect(() => {
    if (!orgLoading && orgData) {
      setShowOrgMenu(false);
    }
  }, [orgLoading, orgData]);

  const handleSelectOrg = (id) => {
     if(id == orgData._id){
       setShowOrgMenu(false);
       return
     }
     changeOrg(id)
  }

  return (
    <>
     <div
       className='flex items-center sticky top-0 bg-zinc-50 dark:bg-zinc-800 w-full h-12 border-b border-zinc-500/20 justify-between px-2'
       >
        <i></i>
        {orgData || user.inOrg.length > 0 ? (
          <div
           onClick={()=>(setOrgError('') ,setShowOrgMenu(true))}
           className='group shadow p-1 flex gap-2 border border-zinc-500/30 w-[max-content] items-center rounded-full text-sm font-semibold
           hover:border-zinc-500 hover:shadow-md'
           >
            <div
             className='h-6 w-6 rounded-full flex items-center justify-center overflow-hidden border border-zinc-500/50 '
             >
              <img className='h-full w-full object-cover' src={orgData?.orgProfilePhoto} alt="" />
            </div>
            <span>{orgData?.orgName || "Select Org"}</span>
            <IoIosArrowDown className='group-hover:mt-1.5 text-zinc-500'/>
          </div>
        ):(
          <Btn
           text={'Create Organization'}
           className={'font-medium text-[12px] px-2 py-1 rounded-full shadow-md bg-blue-500/30 border border-blue-500/50 hover:bg-blue-500/50 hover:border-blue-500'}
           />
        )}
        {showOrgMenu && <div
         ref={orgListRef}
         className='w-[300px] absolute text-sm right-2 top-11 p-2 rounded-md border border-zinc-500/30 shadow-md bg-white dark:bg-zinc-900'
         >
          <div
           className='p-2 text-zinc-500 font-semibold text-[12px]'
           >
            <span>Select Organization</span>
          </div>
          {orgLoading ? (
            <Loader
             size='16px'
             color='blue'
             />
           ):(user?.inOrg?.map(item => (
            <div  
              key={item.org._id}
              className='p-2 flex gap-3 rounded-md hover:bg-zinc-500/20 items-center'
              onClick={() => handleSelectOrg(item.org._id)}
             >
              <i
               className='h-8 w-8 rounded-full border border-zinc-500/50 flex items-center justify-center overflow-hidden'
               >
               <img className='w-full h-full object-cover' src={item.org?.orgProfilePhoto} alt="" /> 
              </i>
              <span className='line-clamp-1 font-medium'>{item.org.orgName}</span>
            </div>
          )))}
          {orgError && <span className='text-red-500'>{orgError}</span>}
        </div>}
      </div>
    </>
  )
}

export default Topbar;
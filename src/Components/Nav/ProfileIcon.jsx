import React, { useState } from 'react'
import useUser from '../../Context/UserContext';
import { Profile } from '../../Views';
import { CiUser } from "react-icons/ci";

const ProfileIcon = () => {

    const { user, logout } = useUser();
    const [showProfile, setShowProfile] = useState(false);

    function sliceEmail(Email){
       if(!Email) return ;
       return Email.length > 12 ? Email.slice(0,15) + "....." : Email;
    }; 

  return (
    <>
      <div className='z-10 sticky bottom-0 backdrop-blur-2xl p-1 border-t border-zinc-200 dark:border-zinc-800 cursor-pointer'>
       {user && 
         <div
          onClick={()=>setShowProfile(!showProfile)} 
          className='p-2 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 flex gap-6 justify-between items-center'>
           <div className='flex gap-2.5 items-center'>
               <div className='flex items-center justify-center overflow-hidden w-9 h-9 bg-slate-200 dark:bg-zinc-950 rounded'>
                 {user.profilePhoto ? <img className='h-full w-full object-cover' src={user.profilePhoto} alt="" /> : <CiUser size={22}/>}
               </div>
               <div className='flex flex-col mt-0.5 text-[12px]'>
                  <p className='font-semibold text-[13px]'>{user.userName}</p>
                  <span className='text-zinc-500'>
                    {sliceEmail(user.email)}
                  </span>
               </div>
           </div>
          </div>
        }   
      </div>  
      {showProfile && (
        <Profile setShowProfile={setShowProfile}/>
      )}
    </>
  )
};

export default ProfileIcon;
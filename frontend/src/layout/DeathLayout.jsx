import React from 'react'
import { NavLink } from 'react-router-dom';

const DeathLayout = ({ children }) => { 

  const subhover = 'py-8 border w-full pl-6 text-start font-[800] border-t-0 hover:bg-gray-400 transition-all ease-out';

  const mainhover = ({ isActive }) => (
    isActive
      ? 'py-8 border w-full pl-6 text-start font-[800] border-t-0 bg-gray-400'  // Active state
      : subhover  // Default hover state
  );
  
  return (
    <div className='grid md:grid-cols-7 sm:grid-cols-1 w-full gap-1  '>
        <div className='md:col-span-2 sm:col-span-7 md:h-[88vh] sm:h-[60vh] w-full border'>
          <div className='border p-6 border-t-0'>
            <h1 className='font-[900] text-[22px] text-gray-900  text-center md:pb-8 pb-0'>Death Certificate</h1>
          </div>
          
            <div className='flex flex-col justify-start items-start w-full '>
              <NavLink to='/AdminDashboards/deathCertificate/registration' className={mainhover}>
                Registration
              </NavLink>
              <NavLink to="/AdminDashboards/deathCertificate/issuance" className={mainhover}>
               Issuance  of Certificate
              </NavLink>

              <NavLink to="/AdminDashboards/deathCertificate/records" className={mainhover}>
               Records
              </NavLink>
            </div>
        </div>
        <div className='md:col-span-5 sm:col-span-7 '>
         {children}  {/* Fix typo here */}
        </div>
    </div>
  )
}

export default DeathLayout;

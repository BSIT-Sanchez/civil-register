import { useState } from 'react';
import { FaTasks } from "react-icons/fa";
import { MdDescription, MdPendingActions } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import EmployeeLayout from '../../layout/EmployeeLayout';
import Header from '../../components/Header';



export default function EmployeeDashboard() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const [modal, setModal] = useState(false)

  const HandlerModal = () => {
    setModal(!modal)
  }

  const IncrementCount = () => {
    setCount(count + 1);
  }
  const DecrementCount = () => {
    setCount(count - 1);
  }
  const UserLists = [
    {
      name: "jorenz",
      description: "sfdsfsufusdufudsh"
    },
    {
      name: "lando",
      description: "sfdsfsufusdufudsh"
    },
    {
      name: "jorenz",
      description: "sfdsfsufusdufudsh"
    },
    {
      name: "jorenz",
      description: "sfdsfsufusdufudsh"
    },
    {
      name: "jorenz",
      description: "sfdsfsufusdufudsh"
    },
  ]

 
  return (
    <EmployeeLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='flex justify-center  items-center gap-3'>
          <button onClick={IncrementCount}>increment</button>
           {count}
           <button onClick={DecrementCount}>decrement</button>

           <button onClick={HandlerModal}>Modal</button>
           {
            modal && ( <div className='bg-blue-700 h-[500px] w-[500px]'>
              Open modal
             </div>)
           }

          {
             UserLists.map((user, index) => (
              <div key={index}>
                 <h1>{user.name}</h1>
                 <p>{user.description}</p>
              </div>
             ))
          }

          <Header logo='Renz' menu='ambot'/>
      </div>
      
       <div className='container mx-auto w-full'>
         <div className={`grid grid-cols-3 place-items-center  gap-10 mt-[30px] ${isOpen ? 'pl-12' : 'pl-0'}`}>
           {/**card1 */}
           <h1>Announcements</h1>
          
          
             
           
         </div>
          
          <div className={`h-[2px] w-[103%] bg-gray-300 mt-12 cardShadow ${isOpen ? 'pl-0' : '-ml-7'}`}/>

         
         
       </div>

      
    </EmployeeLayout>
  );
}
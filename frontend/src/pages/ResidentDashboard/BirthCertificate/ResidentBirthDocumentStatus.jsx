import React, { useState } from 'react'
import ResidentBirthLayout from '../../../layout/ResidentBirthLayout'
import ResidentLayout from '../../../layout/ResidentLayout';
import { FaTasks } from "react-icons/fa";

const ResidentBirthDocumentStatus = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [filter, setFilter] = useState('All');

  // Static data for the table
  const tableData = [
    { id: 1, name: 'Alice Johnson', status: 'Pending', category: 'Registration' },
    { id: 2, name: 'Bob Smith', status: 'Processing', category: 'Registration' },
    { id: 3, name: 'Charlie Brown', status: 'Completed', category: 'Issued' },
    { id: 4, name: 'Diana Prince', status: 'Pending', category: 'Issued' },
    { id: 5, name: 'Edward Norton', status: 'Completed', category: 'Registration' },
    { id: 6, name: 'Fiona Green', status: 'Pending', category: 'Issued' },
    { id: 7, name: 'George White', status: 'Processing', category: 'Registration' },
    { id: 8, name: 'Hannah Adams', status: 'Pending', category: 'Registration' },
    { id: 9, name: 'Isaac Clarke', status: 'Completed', category: 'Registration' },
    { id: 10, name: 'Jessica Taylor', status: 'Pending', category: 'Issued' },
  ];

   // Filter the table data based on selected filter
   const filteredData = filter === 'All' ? tableData : tableData.filter(item => item.status === filter);

  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentBirthLayout>
        <div className={` mt-3 w-full h-[88vh] overflow overflow-y-scroll sidebar ${isOpen ? 'w-[108%]' : 'w-full'}`}>


          <div>
              <div className='flex justify-start items-center gap-[10px] w-full h-auto mt-2 px-2'>
                  <FaTasks className='w-[21px] h-[21px] font-semibold text-[#93A3BC]'/>
                  <h1 className='font-bold text-gray-700 text-[21px]'>Appointment Schedule</h1>
              </div>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-3 px-4 pt-4 mb-10 w-full'>
                <div className='bg-red-500 h-[200px] w-full rounded-sm flex  justify-center items-center'>Monday</div>
                <div className='bg-blue-500 h-[200px] w-full  rounded-sm flex  justify-center items-center'>Monday</div>
                <div className='bg-purple-500 h-[200px] w-full rounded-sm flex  justify-center items-center'>Monday</div>
                
              </div>
          </div>




              <div className="mb-4 flex justify-between items-center w-full gap-2">
                <div className='flex justify-start items-center gap-[10px] w-full h-auto mt-2 '>
                  <FaTasks className='w-[21px] h-[21px] font-semibold text-[#93A3BC]'/>
                  <h1 className='font-bold text-gray-700 text-[21px]'>Document Status</h1>
                </div>
                <label htmlFor="filter" className="block text-gray-700">Filter by Status:</label>
                <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="mt-1 mr-3 w-[20%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className='overflow-x-auto md:overflow-x-hidden'>
                <table className="min-w-full divide-y divide-gray-200 border">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 border">
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>




             
              
            </div>


            
        </ResidentBirthLayout>
      
    </ResidentLayout>
  )
}

export default ResidentBirthDocumentStatus

import { useState } from 'react';
import { FaTasks } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import AdminLayout from '../../layout/AdminLayout';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [filter, setFilter] = useState('All');

  // Static data for the table
  const tableData = [
    { id: 1, name: 'Alice Johnson', status: 'Pending', category: 'Birth' },
    { id: 2, name: 'Bob Smith', status: 'Approved', category: 'Death' },
    { id: 3, name: 'Charlie Brown', status: 'Issued', category: 'Marriage' },
    { id: 4, name: 'Diana Prince', status: 'Pending', category: 'Birth' },
    { id: 5, name: 'Edward Norton', status: 'Approved', category: 'Death' },
    { id: 6, name: 'Fiona Green', status: 'Issued', category: 'Marriage' },
    { id: 7, name: 'George White', status: 'Pending', category: 'Birth' },
    { id: 8, name: 'Hannah Adams', status: 'Approved', category: 'Death' },
    { id: 9, name: 'Isaac Clarke', status: 'Issued', category: 'Marriage' },
    { id: 10, name: 'Jessica Taylor', status: 'Pending', category: 'Birth' },
  ];

  // Data for the Bar Chart
  const barData = {
    labels: ['Pending', 'Approved', 'Issued', 'Users'],
    datasets: [
      {
        label: 'Total Count',
        data: [23, 223, 12, 45], // Sample values, adjust based on categories
        backgroundColor: ['#d9512c', '#007bff', '#ff5722', '#ffc107'],
        borderColor: ['#c7431f', '#0056b3', '#e64a19', '#e0a800'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar Chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Admin Dashboard Statistics (Bar Chart)',
      },
    },
  };

  // Data for the Doughnut Chart
  const doughnutData = {
    labels: ['Birth', 'Death', 'Marriage'],
    datasets: [
      {
        label: 'Counts',
        data: [4, 3, 3], // Sample values for categories
        backgroundColor: ['#d9512c', '#007bff', '#ff5722'],
        borderColor: ['#c7431f', '#0056b3', '#e64a19'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Doughnut Chart
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Admin Dashboard Statistics (Doughnut Chart)',
      },
    },
  };

  // Filter the table data based on selected filter
  const filteredData = filter === 'All' ? tableData : tableData.filter(item => item.status === filter);

  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='container mx-auto w-full mt-20 md:mt-1 px-[8px] mb-10'>
        <div className='flex justify-start items-center gap-[10px] w-full h-auto mt-2 '>
          <FaTasks className='w-[21px] h-[21px] font-semibold text-[#93A3BC]'/>
          <h1 className='font-bold text-gray-700 text-[21px]'>Total Applications</h1>
        </div>

        <div className={`grid md:grid-cols-4 grid-cols-1 place-items-center px-2 gap-4 mt-[30px] ${isOpen ? 'md:pl-12 pl-0' : 'md:pl-0 pl-0'}`}>
          {/* Card 1 */}
          <div className='bg-red-400 w-full h-[120px] rounded-[8px] cardShadow flex flex-col justify-start items-start cursor-pointer'>
            <div className='flex justify-around w-full items-center pt-3'>
              <h1 className='font-[700] text-[16px] text-gray-700'>Pending</h1>
              <MdPendingActions className="text-[25px] text-[#d9512c]" />
            </div>
            <div className='flex justify-center items-center w-full pt-5'>
              <p className='font-bold text-[18px] text-gray-900'>23</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className='bg-blue-400 w-full h-[120px] rounded-[8px] cardShadow flex flex-col justify-start items-start cursor-pointer'>
            <div className='flex justify-around w-full items-center pt-3'>
              <h1 className='font-[700] text-[16px] text-gray-700'>Approved</h1>
              <FaUserCheck className="text-[25px] text-gray-500" />
            </div>
            <div className='flex justify-center items-center w-full pt-5'>
              <p className='font-bold text-[18px] text-gray-900'>223</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className='bg-red-400 w-full h-[120px] rounded-[8px] cardShadow flex flex-col justify-start items-start cursor-pointer'>
            <div className='flex justify-around w-full items-center pt-3'>
              <h1 className='font-[700] text-[16px] text-gray-700'>Issued</h1>
              <MdPendingActions className="text-[25px] text-[#d9512c]" />
            </div>
            <div className='flex justify-center items-center w-full pt-5'>
              <p className='font-bold text-[18px] text-gray-900'>12</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className='bg-yellow-400 w-full h-[120px] rounded-[8px] cardShadow flex flex-col justify-start items-start cursor-pointer'>
            <div className='flex justify-around w-full items-center pt-3'>
              <h1 className='font-[700] text-[16px] text-gray-700'>Users</h1>
              <PiCertificateBold className="text-[25px] text-[#228f30]" />
            </div>
            <div className='flex justify-center items-center w-full pt-5'>
              <p className='font-bold text-[18px] text-gray-900'>45</p>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'pl-2' : 'ml-7'} mt-5 grid md:grid-cols-2 grid-cols-1  gap-20 place-items-center items-center `}>
          {/* Bar Chart */}
          <div className="mt-10 w-full h-[100%] ">
            <Bar data={barData} options={barOptions} />
          </div>
          {/* Doughnut Chart */}
          <div className="mt-10 h-[90%] ">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>

        {/* Table with Filtering */}
        

        <div className="mt-10">
          <div className="mb-4 flex justify-between items-center w-full gap-2">
            <div className='flex justify-start items-center gap-[10px] w-full h-auto mt-2 '>
              <FaTasks className='w-[21px] h-[21px] font-semibold text-[#93A3BC]'/>
              <h1 className='font-bold text-gray-700 text-[21px]'>Recent Task</h1>
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
              <option value="Approved">Approved</option>
              <option value="Issued">Issued</option>
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
      </div>
    </AdminLayout>
  );
}

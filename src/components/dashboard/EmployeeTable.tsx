
'use client';

import { useState } from 'react';

interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  designation: string;
  joiningDate: string;
  status: 'Active' | 'Inactive';
}

export default function EmployeeTable() {
  const [employees] = useState<Employee[]>([
    {
      id: '1',
      employeeId: '000027',
      name: 'Uma Stafford',
      email: 'nocu@mailinator.com',
      mobile: '098-8765-9876',
      dateOfBirth: '1976-05-01',
      designation: 'IT Admin',
      joiningDate: '2010-06-04',
      status: 'Active'
    },
    {
      id: '2',
      employeeId: '000026',
      name: 'Khubaib Ahmed',
      email: 'khubaib@gmail.com',
      mobile: '098-8765-9876',
      dateOfBirth: '1976-05-01',
      designation: 'Data Analysis',
      joiningDate: '2007-05-01',
      status: 'Active'
    },
    {
      id: '3',
      employeeId: '000025',
      name: 'Imran',
      email: 'imran1@gmail.com',
      mobile: '198-8765-9876',
      dateOfBirth: '1980-07-11',
      designation: 'Data Analysis',
      joiningDate: '2015-03-21',
      status: 'Active'
    },
    {
      id: '4',
      employeeId: '000024',
      name: 'Thomas Goodman',
      email: 'qapanalca@gmail.com',
      mobile: '098-8765-9897',
      dateOfBirth: '1982-11-22',
      designation: 'Software',
      joiningDate: '2016-03-16',
      status: 'Active'
    },
    {
      id: '5',
      employeeId: '000023',
      name: 'Jaquelyn White',
      email: 'lyqyman@gmail.com',
      mobile: '987-6457-9046',
      dateOfBirth: '1990-11-22',
      designation: 'Product',
      joiningDate: '2020-03-16',
      status: 'Active'
    },
    {
      id: '6',
      employeeId: '000022',
      name: 'Dawn Cobb',
      email: 'mecy@gmail.com',
      mobile: '987-6457-9046',
      dateOfBirth: '2000-11-22',
      designation: 'IT',
      joiningDate: '2017-12-16',
      status: 'Active'
    },
    {
      id: '7',
      employeeId: '000021',
      name: 'Odysseus Glover',
      email: 'bijema@gmail.com',
      mobile: '987-6457-9046',
      dateOfBirth: '1991-11-22',
      designation: 'HR',
      joiningDate: '2014-11-16',
      status: 'Active'
    },
    {
      id: '8',
      employeeId: '000020',
      name: 'Abra Nelle Barron',
      email: 'wocynyh@gmail.com',
      mobile: '126-306-4191',
      dateOfBirth: '1987-11-12',
      designation: 'HR',
      joiningDate: '2014-11-16',
      status: 'Active'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 10;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push('...');
      }
    }
    return pages.filter((page, index, array) => page !== '...' || array[index - 1] !== '...');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Mobile Card View */}
      <div className="lg:hidden">
        <div className="p-4 space-y-4">
          {employees.map((employee, index) => (
            <div key={employee.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">#{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-gray-500">{employee.employeeId}</span>
                </div>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                  {employee.status}
                </span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-1">{employee.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{employee.designation}</p>
              <p className="text-sm text-gray-600 mb-1">{employee.email}</p>
              <p className="text-sm text-gray-600 mb-3">{employee.mobile}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <p>DOB: {employee.dateOfBirth}</p>
                  <p>Joined: {employee.joiningDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <i className="ri-eye-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <i className="ri-edit-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <i className="ri-delete-bin-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Employee ID</span>
                  <i className="ri-arrow-up-down-line w-3 h-3 flex items-center justify-center"></i>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name of Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile NO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Birth
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Designation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Joining Date</span>
                  <i className="ri-arrow-up-down-line w-3 h-3 flex items-center justify-center"></i>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <i className="ri-arrow-up-down-line w-3 h-3 flex items-center justify-center"></i>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Action</span>
                  <i className="ri-arrow-up-down-line w-3 h-3 flex items-center justify-center"></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {String(index + 1).padStart(2, '0')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.employeeId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.mobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.dateOfBirth}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.joiningDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                      <i className="ri-eye-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                      <i className="ri-edit-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                      <i className="ri-delete-bin-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 lg:px-6 py-4 border-t border-gray-200 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center"></i>
          </button>
          
          <div className="flex items-center space-x-1">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                className={`w-8 h-8 rounded flex items-center justify-center text-sm cursor-pointer ${
                  page === currentPage
                    ? 'bg-black text-white'
                    : typeof page === 'number'
                    ? 'hover:bg-gray-100 text-gray-700'
                    : 'text-gray-400 cursor-default'
                }`}
                disabled={typeof page !== 'number'}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
}

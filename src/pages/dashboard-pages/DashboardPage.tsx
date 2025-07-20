
'use client';

import { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import TopBar from '../../components/dashboard/TopBar';
import TabNavigation from '../../components/dashboard/TabNavigation';
import EmployeeTable from '../../components/dashboard/EmployeeTable';

export default function EmployeeListPage() {
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Mobile menu overlay */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden" onClick={() => setShowMobileMenu(false)}></div>
            )}

            {/* Sidebar */}
            <div className={`${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} fixed lg:static lg:translate-x-0 z-50 transition-transform duration-300 ease-in-out lg:block`}>
                <Sidebar activeItem="employee-list" onClose={() => setShowMobileMenu(false)} />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar onMenuClick={() => setShowMobileMenu(true)} />

                <main className="flex-1 overflow-y-auto">
                    <div className="p-4 lg:p-6">
                        <TabNavigation activeTab="list" />

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
                            <h1 className="text-xl font-semibold text-gray-900">Employee list</h1>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Employee Position"
                                        className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                                    />
                                    <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                                </div>

                                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                                    <i className="ri-filter-line w-4 h-4 flex items-center justify-center"></i>
                                    <span className="text-sm">Filter</span>
                                </button>

                                <button
                                    onClick={() => setShowAddEmployeeModal(true)}
                                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap"
                                >
                                    <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
                                    <span className="text-sm">Add Employee</span>
                                </button>
                            </div>
                        </div>

                        <EmployeeTable />
                    </div>
                </main>
            </div>

            {showAddEmployeeModal && (
                <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Add New Employee</h2>
                            <button
                                onClick={() => setShowAddEmployeeModal(false)}
                                className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                            >
                                <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
                            </button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Employee Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                                    placeholder="Enter employee name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                                    placeholder="Enter mobile number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                                    placeholder="Enter designation"
                                />
                            </div>

                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowAddEmployeeModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap"
                                >
                                    Add Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

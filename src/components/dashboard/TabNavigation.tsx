

import { Link } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: string;
}

export default function TabNavigation({ activeTab }: TabNavigationProps) {
  const tabs = [
    { id: 'position', label: 'Employee Position', href: '/employee/position' },
    { id: 'list', label: 'Employee List', href: '/employee/list' },
    { id: 'performance', label: 'Employee Performance', href: '/employee/performance' }
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.href}
            className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardLine, RiCalendarCheckLine, RiCloseLine, RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

interface SidebarProps {
  activeItem: string;
  onClose?: () => void;
}

export default function Sidebar({ activeItem, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['employee']);

  const toggleExpand = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: RiDashboardLine,
      link: '/dashboard',
      hasSubmenu: false,
    },
    {
      id: 'attendance',
      label: 'Payments',
      icon: RiCalendarCheckLine,
      link: '/payments',
      hasSubmenu: false,
    },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r px-4 border-gray-200 flex flex-col">
      {/* Logo + Close */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold">PR</span>
            </div>
            <span className="font-bold text-xl">Payroll</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200"
          >
            <RiCloseLine className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Section Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Home</h3>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map(({ id, label, icon: Icon, link, hasSubmenu }) => (
          <div key={id}>
            {hasSubmenu ? (
              <button
                onClick={() => toggleExpand(id)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-100 active:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                {expandedItems.includes(id) ? (
                  <RiArrowDownSLine className="w-4 h-4" />
                ) : (
                  <RiArrowRightSLine className="w-4 h-4" />
                )}
              </button>
            ) : (
              <Link
                to={link ?? '#'}
                onClick={onClose}
                className={`flex items-center space-x-3 px-4 py-3 transition-colors rounded-xl mb-2
                  ${id === 'dashboard' || activeItem === id
                    ? 'bg-black text-white border-r-2 border-black'
                    : 'text-gray-700 hover:bg-gray-50 focus:bg-gray-100 active:bg-gray-100'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

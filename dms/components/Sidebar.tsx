'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Overview',
    href: '/',
  },
  {
    name: 'Projects Management',
    href: '/projects-management',
  },
  {
    name: 'Projects Areas',
    href: '/projects-areas',
  },
  {
    name: 'Supervisors',
    href: '/supervisors',
  },
  {
    name: 'Defense Schedule',
    href: '/defense-schedule',
  },
  {
    name: 'Logs',
    href: '/logs',
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        flex flex-col h-screen overflow-hidden font-montserrat
      `}>
        {/* Logo Section - Fixed height */}
        <div className="flex items-center justify-center h-16 px-4 border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-semibold text-custom-blue">
              DMS
            </span>
          </div>
        </div>

        {/* Navigation Links - Scrollable if needed but constrained */}
        <nav className="flex-1 px-4 pt-12 pb-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-3 py-3 text-sm font-medium relative
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-gray-200 dark:bg-gray-700 border-l-4 border-blue-600 text-custom-blue'
                    : 'text-custom-blue hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Academic Year Dropdown */}
        <div className="px-4 pb-4 flex-shrink-0">
          <label htmlFor="academic-year" className="block text-xs font-medium text-custom-blue mb-2">
            Academic Year
          </label>
          <select
            id="academic-year"
            className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-custom-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="2024-2025"
          >
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2021-2022">2021-2022</option>
          </select>
        </div>

        {/* Logout Button - Fixed at bottom */}
        <div className="p-4 border-gray-200 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-3 py-3 text-sm font-medium text-custom-blue hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
          >
            <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

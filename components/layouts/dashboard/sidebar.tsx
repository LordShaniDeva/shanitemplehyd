import React from 'react';
import EventsIcon from '@/components/icons/events';
import LogoutIcon from '@/components/icons/logout';
import DashboardIcon from '@/components/icons/dashboard';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 bg-gray-800 border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 pb-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          {array.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {<item.icon height={24} width={24} />}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2 font-medium">
          <li>
            <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <LogoutIcon />
              <span className="ml-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;

const array = [
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    href: '/admin/dashboard',
  },
  {
    name: 'Events',
    icon: EventsIcon,
    href: '/admin/dashboard/events',
  },
];

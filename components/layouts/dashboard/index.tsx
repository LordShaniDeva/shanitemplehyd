import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};
export default DashboardLayout;

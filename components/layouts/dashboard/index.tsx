import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="mt-14 flex flex-col">{children}</div>
      </div>
    </React.Fragment>
  );
};
export default DashboardLayout;

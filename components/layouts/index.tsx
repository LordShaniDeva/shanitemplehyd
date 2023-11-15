import React from 'react';
import Header from './header';
import Footer from './footer';

const DefaultLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;

import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const pathnames = ['/', '/cart'];

function Main({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <main className={`${pathnames.includes(pathname) ? 'main' : 'min-h-screen'}`}>{children}</main>;
}

export default Main;
